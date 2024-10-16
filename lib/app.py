import json
from flask import Flask, request, render_template, redirect, url_for
from models import db, User, Prescription
import os
from ibm_watson import AssistantV2
from ibm_watson.authenticators import IAMAuthenticator

# Load configuration from JSON file
with open('credentials.json') as config_file:
    config = json.load(config_file)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///medical_assistant.db'
app.config['UPLOAD_FOLDER'] = 'static/uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
db.init_app(app)

# IBM Watson Assistant setup
authenticator = IAMAuthenticator(config['api_key'])
assistant = AssistantV2(
    version='2022-04-01',
    authenticator=authenticator
)
assistant.set_service_url(config['service_url'])

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    name = request.form['name']
    email = request.form['email']
    new_user = User(name=name, email=email)
    db.session.add(new_user)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/upload', methods=['POST'])
def upload():
    user_id = request.form['user_id']
    file = request.files['prescription']
    if file:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)
        new_prescription = Prescription(user_id=user_id, image_path=file_path)
        db.session.add(new_prescription)
        db.session.commit()
    return redirect(url_for('index'))

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.form['user_input']
    session_response = assistant.create_session(
        assistant_id=config['assistant_id']
    ).get_result()
    session_id = session_response['session_id']

    response = assistant.message(
        assistant_id=config['assistant_id'],
        session_id=session_id,
        input={'message_type': 'text', 'text': user_input}
    ).get_result()

    # Clean up the session after use
    assistant.delete_session(
        assistant_id=config['assistant_id'],
        session_id=session_id
    )

    return response['output']['generic'][0]['text']

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

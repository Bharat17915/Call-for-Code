import React from 'react';
import { Message, Container, Segment, Search, Icon } from 'semantic-ui-react';

const ChatBubble = ({ message, isUser }) => {
    return (
    <Message
    style={{
    maxWidth: '60%',
    margin: isUser ? '10px auto 10px 50px' : '10px 50px 10px auto',
    backgroundColor: isUser ? '#007bff' : '#f1f1f1',
    color: isUser ? '#fff' : '#000',
    borderRadius: '10px',
    padding: '10px',
    display: 'flex',
    width: '100%'
    }}
    >
        {message}
    </Message>
    );
};

export default function Helper () {
    const messages = [
        { text: 'Hello! I am getting hot flushes and I feel always frustrated. Not sure what is happening to me. ', isUser: false },
        { text: 'It sounds like you may be experiencing symptoms of perimenopause or menopause, which is common for women in their 40s and 50s. Hot flushes (or hot flashes) and mood changes, including frustration or irritability, are typical signs of hormonal shifts associated with this phase.\
            Here are some common symptoms of perimenopause/menopause:\
            Hot flushes: Sudden feelings of warmth, often accompanied by sweating.\
            Mood changes: Increased irritability, anxiety, or frustration.\
            Irregular periods: Your menstrual cycle may become less predictable.\
            Sleep disturbances: Difficulty sleeping or staying asleep.\
            Fatigue: Feeling tired or low on energy.\
            Changes in skin or hair: Skin may become drier, and hair may thin.\
            Vaginal dryness: This can lead to discomfort during intercourse.', isUser: true },
        { text: 'Okay! Can you provide me more infor on this?', isUser: false },
        { text: 'Here are some dietary and exercise recommendations that may help alleviate symptoms associated with perimenopause or menopause:\
            Diet Recommendations:\
            Increase Phytoestrogens: Foods rich in phytoestrogens can mimic estrogen in the body. Include:\
            Soy products: Tofu, tempeh, edamame\
            Flaxseeds: Ground flaxseeds can be added to smoothies or oatmeal.\
            Chickpeas: Incorporate into salads, stews, or as hummus.\
            Omega-3 Fatty Acids: Help reduce inflammation and improve mood. Sources include:\
            Fatty fish: Salmon, mackerel, sardines\
            Chia seeds and walnuts\
            Fruits and Vegetables: Rich in vitamins, minerals, and antioxidants. Aim for a variety of colors and types, focusing on:\
            Leafy greens (spinach, kale)\
            Berries (blueberries, strawberries)\
            Citrus fruits (oranges, grapefruits)\
            Whole Grains: Support energy levels and digestion. Include:\
            Oats, quinoa, brown rice, whole grain bread, and pasta.\
            Limit Sugar and Processed Foods: Reducing sugar can help stabilize mood swings and energy levels. Focus on whole, minimally processed foods.\
            Stay Hydrated: Drink plenty of water throughout the day, and consider herbal teas (like chamomile or peppermint) to help with relaxation.\
            Exercise Recommendations\
            Aerobic Exercise: Aim for at least 150 minutes of moderate aerobic activity per week. This can include:\
            Walking, swimming, cycling, or dancing.\
            Strength Training: Incorporate strength exercises at least twice a week to help maintain muscle mass and bone density. This can include:\
            Bodyweight exercises (squats, lunges, push-ups)\
            Resistance bands or free weights.\
            Flexibility and Balance: Activities like yoga or Pilates can improve flexibility, balance, and relaxation, helping to reduce stress and anxiety.\
            Mind-Body Exercises: Practices like yoga, tai chi, or meditation can be beneficial for both physical and mental well-being.', isUser: true },
        { text: 'Perimenopause and menopause are significant life transitions for women, typically beginning in their 40s, with menopause occurring \
            around the average age of 51. The perimenopausal phase can last from 4 to 8 years and is often marked by symptoms such as hot flashes \
            (experienced by about 75% of women), mood swings, and sleep disturbances, affecting approximately 60% of women’s quality of life.\
            Health risks increase post-menopause, notably osteoporosis and cardiovascular issues. While about 30% of women in the U.S. opt for \
            hormone replacement therapy (HRT) to alleviate symptoms, many also explore alternative remedies. Additionally, the psychological impact \
            can lead to increased anxiety and depression, and many women report that menopause negatively affects their work performance\
            If these symptoms sound familiar, it could be helpful to consult with a healthcare professional. They can offer guidance on \
            managing symptoms and suggest treatments or lifestyle changes like hormone replacement therapy (HRT), diet, exercise, or stress \
            management techniques. Additionally, herbal remedies or supplements (such as black cohosh, evening primrose oil, or phytoestrogens) are sometimes used, \
            but its important to discuss these with a doctor first.', isUser: true },
        { text: 'If you’d like more specific data or insights into a particular aspect of perimenopause or menopause, let me know!', isUser: true}
        ];

    return (
        <Container>
            <Segment style={{ maxHeight: '400px', overflowY: 'scroll', padding: '20px' }}>
            {messages.map((msg, index) => (
                <>
                <ChatBubble key={index} message={msg.text} isUser={msg.isUser} />
                <br/>
                </>
            ))}
            </Segment>
            <Segment style={{width:'100%', display:'flex'}}>
                <div style={{width:'95%'}}>
                    <Search input={{ fluid: true }} placeholder='Ask you query in your language'/>
                </div>
                <div style={{width:'5%', textAlign:'end'}}>
                    <Icon name='microphone' size='big'/>
                </div>   
            </Segment>
        </Container>
    );
}
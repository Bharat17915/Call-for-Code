# Medical Assistant Chatbot

## Overview

The Medical Assistant Chatbot is a Python-based web application designed to assist users in managing their medical prescriptions and queries. By integrating IBM's WatsonX AI, the chatbot provides users with an interactive experience, allowing them to engage in natural language conversations. The application can store user information and accept image uploads for prescriptions, making it a comprehensive tool for personal health management.

## Features

- **User Registration**: Users can register by providing their name and email address. This allows the application to store their information securely.
- **Prescription Upload**: Users can upload images of their prescriptions, which are saved in a dedicated directory and stored in a database for future reference.
- **Chat Functionality**: Leveraging IBM WatsonX AI, users can interact with the chatbot in real-time, receiving responses to their health-related queries.
- **Database Management**: User information and prescription data are managed using SQLAlchemy, ensuring efficient storage and retrieval.

## Tech Stack

- **Backend**: Flask
- **Database**: SQLite (with SQLAlchemy for ORM)
- **AI Integration**: IBM WatsonX (AssistantV2)
- **Frontend**: HTML, CSS, JavaScript
- **Image Processing**: Pillow (for image handling)

## Usage
- **Register**: Enter your name and email to register.
- **Upload Prescription**: Use the upload form to submit images of your prescriptions.
- **Chat**: Interact with the chatbot by typing your queries in the chat interface. The WatsonX AI will respond with relevant information.

# MedCare Chatbot
## Final Project - Machine Learing - HCMUS

## Member Contributor Information
| Name              | ID       |
|-------------------|----------|
| Vo Nguyen Gia Bao  | 21127016 |
| Tran Hai Phat   | 21127131 |
| Vo Thanh Hiep   | 21127275 |
| Bui Minh Duc  | 21127596 |
| Tran Thanh Quy  | 21127411 |

## Introduction:
**MedCare** aims to:
- Develop a specialized chatbot in the field of healthcare, specifically for diagnosing illnesses based on descriptions.

## Technical Stack:
- Web-app
- Front-end (Client-side): HTML, JavaScript, CSS, React
- Back-end (Server-side): Python, Flask

## Front-end Features:
- Logo and website name: "Medcare AI - Your Health Support"
- Menu bar with links to main sections: Home, Services, About Us, Reviews, Articles
- Home: Description of the website's purpose, focusing on health monitoring with MedCare AI
- Services: List of main services with icons, titles, and descriptions
- About Us: Display of MedCare AI's image and description, mission, commitment, and goals
- Reviews: Display of customer reviews with images, names, star ratings, and comments
- Articles: List of blog posts with images, publishing dates, authors, titles, and descriptions
- Chatbot:
  - Use React to create a ChatNow component for flexibility and scalability
  - "Chat Now" button to stimulate user interaction
  - Upon clicking, the application renders or starts the main App for immediate chat interaction
 
## Back-end Features:
- Flask Server to integrate with OpenAI API, handle requests from the frontend, send requests to OpenAI API, and return results
- Flask Server listens for HTTP requests on localhost, port 8000
- React Frontend (Chat Window) contains user interaction logic
- User inputs a question, and React sends a POST request containing the question to the Flask Server via FetchData
- Flask Server responds, and the response is processed to update the user interface

## Machine Learning Model:

- Pre-trained Model: GPT-3.5-turbo-0613
- Description: A large language model developed by OpenAI for natural language processing tasks
- Features: 1.37B parameters, trained on a vast dataset, capable of text generation, language translation, content creation, and comprehensive question answering
- Fine-tuning Process:
  - Fine-tune the pre-trained model on a specific task based on labeled data
  - Data preprocessing, model parameter optimization, train-validation split, model training, and evaluation

## Installation
1. Open up your favorite code editor and from a terminal window run the following
```bash
npm install
```
## Usage

2. After the install completes, go ahead and start up your react development server
```bash
npm run start
```

Note that: This is only for running the web but to host the server for chat you need to contact team members for fine-tuned api key

This demo app will call the API
(ai-api-demo) https://github.com/msuliot/ai-api-demo

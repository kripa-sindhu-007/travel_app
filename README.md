# AI Travel Planner App

### Project Overview
The **AI Travel Planner App** is an Android-based application designed to assist users in planning trips effortlessly by leveraging AI capabilities. The app provides users with a comprehensive travel plan by taking user inputs such as destination, number of days, type of travel (family, couple, or friends), and budget. Using a large language model (LLM), the app will generate recommendations for ticket fares, hotel accommodations, and places to visit, all along with their prices, in one place.

---

## Features
1. **User Authentication**
   - Signup and login via username and password (Firebase Authentication).
   - Social authentication options using Google/Facebook.

2. **Personalized AI Travel Planning**
   - Generates travel plans based on user preferences.
   - Provides details on ticket fares, hotel stays, and recommended places to visit.
   - Leverages LLM models such as Gemini AI or ChatGPT for travel suggestions.

3. **Modern UI/UX**
   - Sleek and intuitive interface design using React Native and Expo.
   - Easy navigation with React Navigation and Expo Router.
   
4. **Firebase Integration**
   - User data management and authentication using Firebase.
   - Real-time data storage and retrieval from the Firebase database.

5. **Comprehensive Trip Planning**
   - Provides all essential trip details in one place: ticket prices, accommodations, and attractions.
   - AI-driven recommendations with price estimations.

---

## Project Objectives
- Build a user-friendly travel planning app using **React Native** and **Expo**.
- Integrate **Firebase** for authentication and data management.
- Use **AI models** to generate personalized travel plans and cost estimates.

---

## Technology Stack

| Component           | Technology/Tool        |
|---------------------|------------------------|
| **Frontend**         | React Native, Expo      |
| **Backend**          | Firebase               |
| **Authentication**   | Firebase Authentication|
| **Database**         | Firebase Realtime DB    |
| **AI Integration**   | Gemini AI / ChatGPT     |
| **Navigation**       | React Navigation (Expo Router) |

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kripa-sindhu-007/travel_app.git
   cd travel_app

2. **Install Dependencies**:
    ```bash
    npm install

3. **Configure Firebase**:
    - Set up a Firebase project and add the necessary credentials in the project.

4. **Run the App**:
    ```bash
    expo start

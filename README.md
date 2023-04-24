# Note Taking App with Google Authentication

A simple note-taking web application built using ReactJS. Users can create, edit, and delete notes. Authentication is handled using Google Authentication, allowing users to sign in using their Google accounts.

## Tech Stack

- ReactJS
- Firebase Authentication
- Firebase FireStore
- Tailwind CSS

## Features

- Create notes: Users can create new notes and save them to the Firebase Realtime Database.
- Edit notes: Users can edit their existing notes and save changes to the database.
- Google Authentication: Users can sign in using their Google accounts, which will be authenticated using Firebase Authentication.
- Responsive UI: The app is designed to work on desktop and mobile devices.

## Installation

1. Clone the repository: `git clone https://github.com/reaperhound/note-taking-app.git`
2. Navigate to the project directory: `cd note-taking-app`
3. Install dependencies: `npm install`
4. Set up Firebase: Create a new Firebase project, and enable Authentication and FireStore Database.
5. Start the development server: `npm run dev`
6. Open the app in your browser: `http://localhost:5173`

## Deployment

The app can be deployed to a hosting service like Firebase Hosting or Netlify. To deploy the app, follow these steps:

1. Create a production build: `npm run build`
2. Deploy the build folder to the hosting service.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

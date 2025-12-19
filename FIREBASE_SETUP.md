# Firebase Setup Guide

Follow these steps to set up Firebase for your Flag Quiz Game with user accounts and statistics tracking.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "flag-quiz-game")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Set up Authentication

1. In your Firebase project, click on "Authentication" in the left sidebar
2. Click on "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" provider
5. Optionally enable "Google" provider for social login

## Step 3: Set up Firestore Database

1. Click on "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" for now (we'll secure it later)
4. Select a location closest to your users
5. Click "Done"

## Step 4: Get Your Firebase Configuration

1. Click on the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click on "Web" icon (</>) to add a web app
5. Give your app a nickname (e.g., "Flag Quiz Web")
6. Check "Also set up Firebase Hosting" if you want (optional)
7. Click "Register app"
8. Copy the Firebase configuration object

## Step 5: Update Your Configuration File

1. Open `firebase-config.js` in your project
2. Replace the placeholder configuration with your actual Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key-here",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-actual-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-actual-app-id"
};
```

## Step 6: Set up Firestore Security Rules (Later)

For now, test mode allows read/write access. Later, you should update rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Step 7: Test Your Setup

1. Open your `index.html` file in a web browser
2. Try registering a new account
3. Try logging in
4. Play a quiz and check if statistics are being tracked

## Firestore Data Structure

Your app will automatically create this structure:

```
users/
├── {userId}/
│   ├── profile: {username, email, joinDate, totalGames, etc.}
│   └── flagStats/
│       └── {flagCode}: {countryName, correct, total, percentage}
```

## Troubleshooting

- **CORS errors**: Make sure you're serving the files from a web server, not opening directly
- **Auth errors**: Check that Email/Password is enabled in Firebase Console
- **Database errors**: Verify Firestore is in test mode and properly initialized
- **Config errors**: Double-check your Firebase configuration object

## Free Tier Limits

Firebase's free tier includes:
- **Authentication**: Unlimited users
- **Firestore**: 1 GiB storage, 50K reads/day, 20K writes/day, 20K deletes/day

This is more than enough for a personal flag quiz game!
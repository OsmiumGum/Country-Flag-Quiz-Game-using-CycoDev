// Firebase Configuration
// You'll need to replace this with your actual Firebase config
// Instructions for getting your config:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or use existing)
// 3. Go to Project Settings > General > Your apps
// 4. Click "Add app" and choose Web
// 5. Copy the config object and replace the one below

const firebaseConfig = {
    apiKey: "AIzaSyDsAHBfXT8LZVJNnVS9pcznENhNfdQ1OPk",
    authDomain: "flag-quiz-game-7745f.firebaseapp.com",
    projectId: "flag-quiz-game-7745f",
    storageBucket: "flag-quiz-game-7745f.firebasestorage.app",
    messagingSenderId: "734673677166",
    appId: "1:734673677166:web:26b9c3e0e681d957842f7f",
    measurementId: "G-7MR7SHQ1MD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

// Export for use in other files
window.auth = auth;
window.db = db;
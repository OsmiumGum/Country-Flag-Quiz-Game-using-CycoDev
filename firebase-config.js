// Firebase Configuration
// For GitHub Pages deployment, users need to replace these placeholder values
// with their actual Firebase configuration from Firebase Console

// Template configuration (replace with your actual Firebase config for deployment)
const firebaseConfig = {
    apiKey: "your-api-key-here",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id",
    measurementId: "your-measurement-id"
};

// Check if Firebase config is still using template values
const isTemplateConfig = firebaseConfig.apiKey === "your-api-key-here";

if (isTemplateConfig) {
    console.warn('⚠️ Firebase is using template configuration. User accounts are disabled.');
    console.log('To enable user accounts and statistics:');
    console.log('1. Create a Firebase project at https://console.firebase.google.com/');
    console.log('2. Update the firebaseConfig object above with your actual keys');
    console.log('3. Follow the setup guide in the repository README');
}

// Initialize Firebase only if we have valid config
let auth, db;
try {
    if (!isTemplateConfig && typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        console.log('✅ Firebase initialized successfully');
    } else {
        console.log('🎮 Running in demo mode - authentication disabled');
        // Create mock objects for demo mode
        auth = {
            onAuthStateChanged: (callback) => callback(null),
            signInWithEmailAndPassword: () => Promise.reject(new Error('Demo mode: Please configure Firebase')),
            createUserWithEmailAndPassword: () => Promise.reject(new Error('Demo mode: Please configure Firebase')),
            signOut: () => Promise.reject(new Error('Demo mode'))
        };
        db = {
            collection: () => ({
                doc: () => ({
                    set: () => Promise.resolve(),
                    get: () => Promise.resolve({ exists: false }),
                    update: () => Promise.resolve()
                })
            })
        };
    }
} catch (error) {
    console.error('Firebase initialization failed:', error);
    console.log('🎮 Running in demo mode');
}

// Export for use in other files
window.auth = auth;
window.db = db;
window.isFirebaseConfigured = !isTemplateConfig;
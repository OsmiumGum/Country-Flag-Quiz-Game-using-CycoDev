# 🚀 Secure Deployment Guide

Deploy your Flag Quiz Game with Firebase integration **without exposing your API keys**.

## 🔐 Option 1: Netlify (Recommended - Easiest)

### Step 1: Prepare for Deployment
1. **Push your code to GitHub** (with template Firebase config)
2. Make sure `firebase-config.js` has placeholder values
3. All sensitive keys will be stored as environment variables

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"New site from Git"**
3. Connect to GitHub and select your `flag-quiz-game` repository
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

### Step 3: Set Environment Variables
In your Netlify site dashboard:
1. Go to **Site Settings** → **Environment Variables**
2. Add these variables:
   ```
   FIREBASE_API_KEY = AIzaSyDsAHBfXT8LZVJNnVS9pcznENhNfdQ1OPk
   FIREBASE_AUTH_DOMAIN = flag-quiz-game-7745f.firebaseapp.com
   FIREBASE_PROJECT_ID = flag-quiz-game-7745f
   FIREBASE_STORAGE_BUCKET = flag-quiz-game-7745f.firebasestorage.app
   FIREBASE_MESSAGING_SENDER_ID = 734673677166
   FIREBASE_APP_ID = 1:734673677166:web:26b9c3e0e681d957842f7f
   FIREBASE_MEASUREMENT_ID = G-7MR7SHQ1MD
   ```

### Step 4: Deploy!
1. Netlify will automatically build and deploy
2. Your app will be live with full Firebase functionality
3. API keys are secure - not visible in source code

---

## 🔐 Option 2: Vercel (Alternative)

### Step 1: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up
2. Import your GitHub repository
3. Deploy with default settings

### Step 2: Set Environment Variables
In Vercel dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add the same Firebase variables as above

---

## 🔐 Option 3: Firebase Hosting (Google's Platform)

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 2: Initialize Firebase Hosting
```bash
cd flag_quiz_game
firebase login
firebase init hosting
```

### Step 3: Deploy
```bash
npm run build
firebase deploy
```

## ✅ Benefits

- **🔒 Secure**: API keys never exposed in source code
- **🌍 Public**: Anyone can use your game
- **🎯 Full Featured**: Complete Firebase functionality
- **💰 Free**: All platforms have generous free tiers
- **🔄 Auto-Deploy**: Updates automatically when you push to GitHub

## 🎮 Result

Your game will be live with:
- Full user authentication
- Statistics tracking
- All features working
- No security risks
- Professional deployment

Choose **Netlify** for the easiest setup! 🚀
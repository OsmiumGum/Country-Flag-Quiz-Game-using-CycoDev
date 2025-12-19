# 🌍 Flag Quiz Game - Enhanced Edition

A fun and interactive quiz game to test your knowledge of country flags around the world, now with **user accounts, detailed statistics tracking, and multiple game modes**!

![Flag Quiz Game](https://via.placeholder.com/800x400/36d1dc/ffffff?text=Flag+Quiz+Game)

## 🌟 Features

### 🎮 **Game Modes**
- **25 Questions Mode** - Traditional quiz with 25 random flags
- **Unlimited Mode** - Keep playing until you decide to stop with the "End Game" button

### 👤 **User Accounts & Progress Tracking**
- **Firebase Authentication** - Secure email/password registration and login
- **Personal Statistics** - Track your performance over time
- **Individual Flag Analytics** - See your success rate for each country's flag
- **Progress Insights** - Identify which flags you know well and which need practice

### 📊 **Detailed Statistics**
- **Overall Performance**: Games played, accuracy percentage, best score
- **Flag-Specific Data**: Success rate, attempt counts, and performance trends
- **Sortable Views**: Sort by success rate, alphabetical, or attempt frequency
- **Visual Indicators**: Color-coded performance levels (Excellent/Good/Average/Needs Practice)
- **Flag Icons**: Visual flag display in statistics for easy recognition

### 🎨 **Modern Interface**
- **Clean Design** - Beautiful gradient backgrounds and modern styling
- **Responsive Layout** - Works perfectly on desktop and mobile devices
- **Modal Statistics** - Clean, non-intrusive profile and statistics display
- **Smooth Animations** - Polished user experience with CSS transitions

## 🚀 Live Demo

[Play the Game Here](https://your-username.github.io/flag-quiz-game)

## 🛠️ Setup Instructions

### Quick Start (No Account Features)
1. Download the repository
2. Open `index.html` in your web browser
3. Start playing! (Statistics won't be saved without Firebase setup)

### Full Setup (With User Accounts)
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/flag-quiz-game.git
   cd flag-quiz-game
   ```

2. **Set up Firebase (Free):**
   - Follow the detailed guide in [`FIREBASE_SETUP.md`](FIREBASE_SETUP.md)
   - Create a free Firebase project
   - Update `firebase-config.js` with your configuration

3. **Run locally:**
   ```bash
   node server.js
   ```
   Then open `http://localhost:8080`

## 💰 Cost

**Completely FREE!** 
- The game uses Firebase's generous free tier
- Supports thousands of users and games daily
- No hidden costs or premium features

## 🏗️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Firebase Authentication & Firestore
- **Flags**: [Flag CDN](https://flagcdn.com) for high-quality flag images
- **Hosting**: GitHub Pages compatible

## 📁 File Structure

```
flag-quiz-game/
├── index.html              # Main game interface
├── script.js              # Core game logic & modes
├── user-manager.js        # User authentication & statistics
├── firebase-config.js     # Firebase configuration (update with your keys)
├── countries.js           # Country/flag database
├── styles.css             # Complete styling
├── server.js              # Local development server
├── README.md              # This file
└── FIREBASE_SETUP.md      # Detailed Firebase setup guide
```

## 🎯 How to Play

1. **Choose Your Mode:**
   - **25 Questions**: Traditional quiz format
   - **Unlimited**: Play until you're ready to stop

2. **Create an Account** (Optional but Recommended):
   - Track your progress over time
   - See detailed flag-by-flag statistics
   - Get personalized recommendations

3. **Play & Learn:**
   - Identify flags from multiple choice options
   - Get immediate feedback on your answers
   - Build up your flag knowledge database

4. **View Your Progress:**
   - Click "Profile" to see your statistics
   - Analyze your performance with detailed breakdowns
   - Use sorting options to find patterns in your knowledge

## 📈 Statistics Features

### Overview Stats
- Total games played
- Overall accuracy percentage  
- Best score achieved
- Total flags attempted

### Detailed Analytics
- **Flag-specific performance** with success rates
- **Visual flag icons** for easy identification
- **Sortable views**: By performance, alphabetical, or frequency
- **Color-coded indicators**: 
  - 🟢 Excellent (80%+)
  - 🔵 Good (60-79%)
  - 🟡 Average (40-59%)  
  - 🔴 Needs Practice (<40%)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs or suggest features via GitHub Issues
- Submit pull requests for improvements
- Share the game with friends and fellow geography enthusiasts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Flag images provided by [Flag CDN](https://flagcdn.com)
- Firebase for free backend services
- The geography and vexillology communities for inspiration

## 🌟 Show Your Support

If you enjoyed this game, please:
- ⭐ Star this repository
- 🍴 Fork it to create your own version
- 📢 Share it with friends who love geography
- 🐛 Report any bugs you find

---

**Made with ❤️ for geography enthusiasts worldwide!**

*Test your flag knowledge and discover countries you never knew existed!*
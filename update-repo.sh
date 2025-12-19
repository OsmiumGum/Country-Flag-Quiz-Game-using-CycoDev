#!/bin/bash
# Git commands to update your repository with the new features

echo "🚀 Updating Flag Quiz Game Repository..."

# Add all files
echo "📁 Adding all files..."
git add .

# Create commit with detailed message
echo "💾 Creating commit..."
git commit -m "🌟 Major Update: Enhanced Flag Quiz Game

✨ New Features:
- 👤 User accounts with Firebase authentication
- 📊 Detailed statistics tracking per flag
- 🎮 Two game modes (25 questions + Unlimited)
- 📈 Sortable performance analytics with flag icons
- 🎨 Modal-based clean profile interface
- 📱 Responsive design improvements

🔧 Technical Improvements:
- Firebase Firestore integration
- Real-time statistics updates
- Color-coded performance indicators
- Enhanced error handling
- Improved code organization

🎯 User Experience:
- Clean overview stats by default
- Expandable detailed statistics
- Multiple sorting options
- Visual flag icons in analytics
- Escape key and click-outside modal closing"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Successfully updated your GitHub repository!"
echo "🌐 Your enhanced flag quiz is now live!"

# Optional: Show the repository URL
echo ""
echo "📍 Repository should be available at:"
echo "https://github.com/YOUR_USERNAME/flag-quiz-game"
echo ""
echo "🎮 GitHub Pages URL (if enabled):"
echo "https://YOUR_USERNAME.github.io/flag-quiz-game"
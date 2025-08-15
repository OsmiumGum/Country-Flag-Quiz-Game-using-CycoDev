// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const flagImage = document.getElementById('flag-image');
const optionsContainer = document.getElementById('options-container');
const currentQuestionSpan = document.getElementById('current-question');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const feedbackMessage = document.getElementById('feedback-message');
const progressFill = document.getElementById('progress-fill');

// Game variables
let quiz = [];
let currentQuestion = 0;
let score = 0;
let usedCountries = [];
const totalQuestions = 25;

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to get random countries
function getRandomCountries(count) {
    // Create a copy of countries array to avoid modifying the original
    let availableCountries = [...countries];
    // Shuffle the array to randomize selection
    availableCountries = shuffleArray(availableCountries);
    // Return the first 'count' elements
    return availableCountries.slice(0, count);
}

// Function to generate quiz questions
function generateQuiz() {
    // Reset game variables
    quiz = [];
    currentQuestion = 0;
    score = 0;
    usedCountries = [];

    // Get 25 random countries for the quiz
    const quizCountries = getRandomCountries(totalQuestions);

    // Create quiz questions
    for (let i = 0; i < totalQuestions; i++) {
        const correctAnswer = quizCountries[i];
        usedCountries.push(correctAnswer.name);

        // Get three random incorrect options
        let options = [correctAnswer.name];
        while (options.length < 4) {
            const randomCountry = countries[Math.floor(Math.random() * countries.length)];
            if (!options.includes(randomCountry.name) && !usedCountries.includes(randomCountry.name)) {
                options.push(randomCountry.name);
                usedCountries.push(randomCountry.name);
            }
        }

        // Shuffle options
        options = shuffleArray(options);

        // Create question object
        quiz.push({
            flag: correctAnswer.flag,
            correctAnswer: correctAnswer.name,
            options: options
        });
    }

    // Start the quiz
    displayQuestion();
}

// Function to display the current question
function displayQuestion() {
    // Update question number and progress bar
    currentQuestionSpan.textContent = currentQuestion + 1;
    progressFill.style.width = `${((currentQuestion + 1) / totalQuestions) * 100}%`;
    
    // Get the current question
    const question = quiz[currentQuestion];
    
    // Display the flag
    flagImage.src = question.flag;
    flagImage.alt = `Flag for quiz question ${currentQuestion + 1}`;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add the options
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(optionElement);
    });
}

// Function to handle option selection
function selectOption(selectedOption) {
    // Get the current question and correct answer
    const question = quiz[currentQuestion];
    const correctAnswer = question.correctAnswer;
    
    // Disable all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
        if (option.textContent === selectedOption && selectedOption !== correctAnswer) {
            option.classList.add('incorrect');
        }
        if (option.textContent === selectedOption && selectedOption === correctAnswer) {
            option.classList.add('selected');
        }
    });
    
    // Update score if correct
    if (selectedOption === correctAnswer) {
        score++;
        scoreSpan.textContent = score;
    }
    
    // Move to next question after a delay
    setTimeout(() => {
        currentQuestion++;
        
        // Check if quiz is complete
        if (currentQuestion < totalQuestions) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Function to show results
function showResults() {
    // Hide quiz screen, show results screen
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    // Update final score
    finalScoreSpan.textContent = score;
    
    // Display feedback message
    let feedbackText;
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage >= 90) {
        feedbackText = "Outstanding! You're a geography expert!";
    } else if (percentage >= 75) {
        feedbackText = "Great job! You know your flags very well!";
    } else if (percentage >= 50) {
        feedbackText = "Good effort! You have a solid knowledge of world flags.";
    } else if (percentage >= 25) {
        feedbackText = "Not bad! With a bit more practice, you'll improve your score.";
    } else {
        feedbackText = "Keep learning! Try again to improve your knowledge of world flags.";
    }
    
    feedbackMessage.textContent = feedbackText;
}

// Event Listeners
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    generateQuiz();
});

restartBtn.addEventListener('click', () => {
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    scoreSpan.textContent = '0';
    generateQuiz();
});

// Handle image load errors
flagImage.addEventListener('error', () => {
    flagImage.src = 'https://via.placeholder.com/320x160?text=Flag+Image+Not+Available';
});
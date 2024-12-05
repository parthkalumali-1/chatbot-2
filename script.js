document.getElementById('send-btn').addEventListener('click', handleUserInput);

function handleUserInput() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        addMessageToChat('user', userInput);
        processBotResponse(userInput);
        document.getElementById('user-input').value = '';
    }
}

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processBotResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();
    let botResponse = "I'm not sure how to respond to that.";

    if (lowerCaseInput.includes('hello')) {
        botResponse = "Hello! How can I assist you today?";
    } else if (lowerCaseInput.includes('bye')) {
        botResponse = "Goodbye! Have a great day!";
    } else if (lowerCaseInput.includes('how are you')) {
        botResponse = "I'm just a bot, but I'm doing great! How about you?";
    } else if (lowerCaseInput.includes('who made you')) {
        botResponse = "I was made with HTML, CSS, and JavaScript by some human existence.";
    } else if (lowerCaseInput.includes('time') || lowerCaseInput.includes('date')) {
        const now = new Date();
        botResponse = `The current date is ${now.toDateString()} and the time is ${now.toLocaleTimeString()}.`;
    } else if (lowerCaseInput.includes('joke')) {
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "What do you call fake spaghetti? An impasta!"
        ];
        botResponse = jokes[Math.floor(Math.random() * jokes.length)];
    } else if (lowerCaseInput.includes('weather')) {
        botResponse = "I can't check the weather right now, but you can try asking your favorite weather app!";
    } else if (lowerCaseInput.includes('tic-tac-toe')) {
        startTicTacToe();
        return;
    } else if (lowerCaseInput.includes('rock-paper-scissors')) {
        startRockPaperScissors();
        return;
    }

    addMessageToChat('bot', botResponse);
}

function startTicTacToe() {
    addMessageToChat('bot', "Starting Tic-Tac-Toe! Please open the game window.");
    // Launch Tic-Tac-Toe in a new tab or alert for now
    window.open('https://playtictactoe.org/', '_blank'); // Placeholder link
}

function startRockPaperScissors() {
    addMessageToChat('bot', "Let's play Rock-Paper-Scissors! Type rock, paper, or scissors.");
    document.getElementById('send-btn').addEventListener('click', function playGame() {
        const userChoice = document.getElementById('user-input').value.trim().toLowerCase();
        const choices = ['rock', 'paper', 'scissors'];
        const botChoice = choices[Math.floor(Math.random() * choices.length)];

        let result;
        if (userChoice === botChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper')
        ) {
            result = `You win! I chose ${botChoice}.`;
        } else if (choices.includes(userChoice)) {
            result = `I win! I chose ${botChoice}.`;
        } else {
            result = "Invalid choice! Please type rock, paper, or scissors.";
        }

        addMessageToChat('bot', result);
    });
}

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;
    addMessage(userInput, "user-message");

    document.getElementById('user-input').value = '';

    const response = getBotResponse(userInput.toLowerCase());
    setTimeout(() => addMessage(response, "bot-message"), 1000);
}

function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', type);
    messageElement.textContent = message;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getBotResponse(input) {
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I assist you today?";
    }
    if (input.includes("joke")) {
        return getJoke();
    }
    if (input.includes("weather")) {
        return getWeather();
    }
    if (input.includes("time")) {
        return getCurrentTime();
    }
    if (input.includes("help")) {
        return "You can ask me for a joke, the weather, the current time, or just chat!";
    }
    return "I'm sorry, I didn't understand that. Type 'help' for options.";
}

function getJoke() {
    const jokes = [
        "Why don't skeletons fight each other? They don't have the guts.",
        "Why don’t scientists trust atoms? Because they make up everything!",
        "I told my computer I needed a break, now it won't stop sending me Kit-Kats."
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
}

function getWeather() {
    // Mock weather response for the sake of the example
    return "The current weather is 22°C with light showers.";
}

function getCurrentTime() {
    const now = new Date();
    return `The current time is ${now.toLocaleTimeString()}.`;
}


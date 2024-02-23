document.addEventListener("DOMContentLoaded", function() {
    var chatLog = document.getElementById("chat-log");
    var userInput = document.getElementById("user-input");
    var sendButton = document.getElementById("send-button");
    var resetButton = document.getElementById("reset-button"); // Add this line

    // Initialize ELIZA bot
    var eliza = new ElizaBot();

    // Function to append a message to the chat log
    function appendMessage(message, sender) {
        var messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.innerText = message;
        chatLog.appendChild(messageElement);
        // Scroll to the bottom of the chat log
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    // Function to handle user input
    function handleUserInput() {
        var userInputText = userInput.value.trim();
        if (userInputText !== "") {
            // Append user message to chat log
            appendMessage(userInputText, "user");
            // Get ELIZA's response
            var elizaResponse = eliza.transform(userInputText);
            // Append ELIZA's response to chat log after a short delay to simulate typing
            setTimeout(function() {
                appendMessage(elizaResponse, "eliza");
            }, 500);
            // Clear user input field
            userInput.value = "";
        }
    }

    // Event listener for send button click
    sendButton.addEventListener("click", function() {
        handleUserInput();
    });

    // Event listener for pressing Enter key in the input field
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });

    // Event listener for reset button click
    resetButton.addEventListener("click", function() {
        // Clear the chat log
        chatLog.innerHTML = "";
    });

    // Initial greeting message from ELIZA
    var initialGreeting = eliza.getInitial();
    appendMessage(initialGreeting, "eliza");
});

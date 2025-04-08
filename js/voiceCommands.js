// Voice Commands for E-Learning Website (Continuous Listening Mode)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.continuous = true; // Keep listening continuously

recognition.onresult = (event) => {
    const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
    console.log("Recognized command:", command);

    if (command.includes("go to home")) {
        window.location.href = "index.html";
    } else if (command.includes("open courses")) {
        window.location.href = "courses.html";
    } else if (command.includes("login")) {
        window.location.href = "login.html";
    } else if (command.includes("sign up")) {
        window.location.href = "signup.html";
    } else if (command.includes("contact support")) {
        window.location.href = "contact.html";
    } else if (command.includes("read content")) {
        let content = document.body.innerText;
        let speech = new SpeechSynthesisUtterance(content);
        window.speechSynthesis.speak(speech);
    } else if (command.includes("scroll down")) {
        window.scrollBy(0, 500);
    } else if (command.includes("scroll up")) {
        window.scrollBy(0, -500);
    } else if (command.includes("read more")) {
        let buttons = document.querySelectorAll("button, a");
        for (let btn of buttons) {
            if (btn.innerText.toLowerCase().includes("read more")) {
                btn.click();
                break;
            }
        }
    } else if (command.includes("join now")) {
        let buttons = document.querySelectorAll("button, a");
        for (let btn of buttons) {
            if (btn.innerText.toLowerCase().includes("join now")) {
                btn.click();
                break;
            }
        }
    } else {
        alert("Command not recognized: " + command);
    }
};

// Start listening automatically when the page loads
recognition.start();

recognition.onerror = (event) => {
    console.error("Speech recognition error", event);
    recognition.start(); // Restart recognition if an error occurs
};

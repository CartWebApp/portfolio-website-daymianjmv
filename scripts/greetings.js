const greetings = [
    "Hello!", "Welcome!", "Hi there!", "Greetings!", "Howdy!", "Hey!", "Good to see you!", "Hiya!", "What's up?", "Salutations!", "Yo!", "Nice to meet you!", "Ahoy!", "Good day!", "WAZZZZ UPPP!",
    "¡Hola!", "Bonjour!", "Hallo!", "Ciao!", "Olá!", "Nǐ hǎo!", "Konnichiwa!", "Annyeong!", "As-salāmu ʿalaykum!", "Namaste!", "Privet!", "Jambo!", "Merhaba!", "Nomoskar!"];  
const greetingsElement = document.querySelector(".greetings");

function typeGreeting(text, callback) {
    let i = 0;
    greetingsElement.textContent = "";
    const interval = setInterval(() => {
        greetingsElement.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
            setTimeout(() => callback(), 2000); // Pause before deleting
        }
    }, 100);
}

function deleteGreeting(callback) {
    const interval = setInterval(() => {
        greetingsElement.textContent = greetingsElement.textContent.slice(0, -1);
        if (greetingsElement.textContent.length === 0) {
            clearInterval(interval);
            callback();
        }
    }, 50);
}

function cycleGreetings() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    typeGreeting(greetings[randomIndex], () => {
        deleteGreeting(() => {
            cycleGreetings();
        });
    });
}

cycleGreetings();

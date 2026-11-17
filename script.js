function welcomeMessage() {
    alert("Welcome to my Personal Resume Website!");
}

// ===== HOME PAGE TYPING ANIMATION =====

const typingElement = document.getElementById("typing-text");

if (typingElement) {
    const roles = [
        "CSE Student",
        "Web Developer",
        "Java Programmer",
        "Technology Enthusiast"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        typingElement.textContent = currentRole.substring(0, charIndex);

        if (!deleting && charIndex < currentRole.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (deleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else if (!deleting) {
            deleting = true;
            setTimeout(typeEffect, 1200);
        } else {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 300);
        }
    }

    typeEffect();
}

document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".typing-text");

    textElements.forEach((textElement, index) => {
        const textToType = "Efficiency Empowered.";
        const randomDelay = Math.random() * 3000; // Adjust the maximum delay time (in milliseconds)

        setTimeout(() => {
            let charIndex = 0;
            function typeText() {
                if (charIndex < textToType.length) {
                    textElement.innerHTML += textToType.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeText, 100); // Adjust typing speed (milliseconds)
                }
            }

            typeText();
        }, randomDelay);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutMeText = document.getElementById("about-me-text");
    const textArray = [
        "Hello! I'm passionate about coding and technologyPassionate team dedicated to excellence roviding high-y services and products Customer-centric approach for satisfaction Innovative solutions tailored to your needs Years of experience in the industry I'm passionate about coding and technologyPassionate team dedicated to excellence roviding high-y services and products Customer-centric approach for satisfaction Innovative solutions tailored to your needs Years of experience in the industry",
        "Hello! I'm passionate about coding and technologyPassionate team dedicated to excellence roviding high-y services and products Customer-centric approach for satisfaction Innovative solutions tailored to your needs Years of experience in the industry I'm passionate about coding and technologyPassionate team dedicated to excellence roviding high-y services and products Customer-centric approach for satisfaction Innovative solutions tailored to your needs Years of experience in the industry",
        "Hello! I'm passionate about coding and technologyPassionate team dedicated to excellence roviding high-y services and products Customer-centric approach for satisfaction Innovative solutions tailored to your needs Years of experience in the industry I'm passionate about coding and technologyPassionate team dedicated to excellence roviding high-y services and products Customer-centric approach for satisfaction Innovative solutions tailored to your needs Years of experience in the industry",
        "Hello! I'm passionate about coding and technologyPassionate team dedicated to excellence roviding high-y services and products Customer-centric approach for satisfaction Innovative solutions tailored to your needs Years of experience in the industry I'm passionate about coding and technologyPassionate team dedicated to excellence roviding high-y services and products Customer-centric approach for satisfaction Innovative solutions tailored to your needs Years of experience in the industry",

    ];

    let index = 0;
    function changeText() {
        aboutMeText.innerHTML = textArray[index];
        index = (index + 1) % textArray.length;
    }

    setInterval(changeText, 8000); // Change text every 8 seconds (adjust as needed)
});
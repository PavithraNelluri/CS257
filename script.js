
window.onload = function() {
    const movingTexts = document.querySelectorAll('.moving-text');
    
    movingTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('fade-out'); // Add class to trigger CSS animation
        }, index * 500); // Stagger the animation
    });
};

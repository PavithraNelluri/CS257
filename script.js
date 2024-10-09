
window.onload = function() {
    const movingTexts = document.querySelectorAll('.moving-text');
    
    movingTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('fade-out'); 
        }, index * 500); 
    });
};

const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log('Clicked!'); 
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

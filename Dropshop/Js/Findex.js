window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const backgroundImage = document.getElementById('backgroundImage');
    
    // Ajusta el valor de desplazamiento según sea necesario
    backgroundImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});

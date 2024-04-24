document.getElementById('sim').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=678cV9ldaMg';
});

document.getElementById('nao').addEventListener('mousemove', function(event) {
    const naoButton = document.getElementById('nao');
    naoButton.style.position = 'absolute';
    naoButton.style.left = event.clientX + 'px';
    naoButton.style.top = event.clientY + 'px';
});


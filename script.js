document.addEventListener("DOMContentLoaded", function(event) {
    var element = document.getElementById('background');
    var text = element.textContent;
    var letters = text.split('');

    element.textContent = ''; // Clear the text content

    letters.forEach(function(letter, index) {
        var span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = (index * 0.1) + 's'; // Delay each letter's animation
        element.appendChild(span);
    });
});

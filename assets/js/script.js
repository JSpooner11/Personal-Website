// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web designing", "android development", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->


// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('./skills.json')
        .then(response => response.json())
        .then(data => {
            const iconContainer = document.getElementById('icon-container');

            data.forEach(icon => {
                const iconElement = document.createElement('i');
                iconElement.className = icon.class;
                iconElement.title = icon.title;

                iconContainer.appendChild(iconElement);
            });
        })
        .catch(error => console.error('Error fetching icons:', error));
});


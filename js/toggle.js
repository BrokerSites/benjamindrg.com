document.querySelectorAll('.toggle-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.toggle-button.active').classList.remove('active');
        button.classList.add('active');
    });
});
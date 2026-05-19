document.getElementById('btn').addEventListener('click', function() {
    const textElement = document.getElementById('text');
    textElement.textContent = 'Success! JavaScript is working inside Termux.';
    textElement.style.color = '#00adb5';
});

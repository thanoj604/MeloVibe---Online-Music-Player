document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Dummy authentication logic (replace with actual authentication logic)
    if (username === 'thanoj' && password === 'thanoj604') {
        // Redirect to the music player page
        alert("Login Successful");
        window.location.href = 'index.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password.';
    }
});

document.getElementById('backButton').addEventListener('click', function() {
    // Redirect to previous page or perform any other action
    window.location.href = 'index.html';
});


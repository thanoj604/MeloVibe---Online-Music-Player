document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Perform form validation (you can add your own validation logic here)
    if (firstName === 'thanoj' && lastName === 'sriman' && password == 'thanoj604' && confirmpassword == 'thanoj604' && email == "22r05a6604@cmritonline.ac.in" && phoneNumber == 630123) {
        // Redirect to the music player page
        alert("Signin Successful");
        window.location.href = 'index.html';
    } else {
        alert("Invalid User Details");
    }

    // Dummy alert showing form values (replace with actual signup logic)
    // alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nEmail: " + email + "\nPhone Number: " + phoneNumber);
});

document.getElementById('backButton').addEventListener('click', function() {
    // Redirect to previous page or perform any other action
    window.location.href = 'index.html';
});

function validate() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkpasswordsmatch(password, cpassword);
}

function checkusername(username) {
    var usernameElement = document.getElementById('username');
    var usernameErrorElement = document.getElementById('username_error');

    if (username.length > 7) {
        usernameElement.classList.add('success');
        usernameElement.classList.remove('error');
        usernameErrorElement.innerHTML = '';
    } else {
        usernameElement.classList.remove('success');
        usernameElement.classList.add('error');
        usernameErrorElement.innerText = 'Username must be 8 letters long';
    }
}

function checkemail(email) {
    // Add email validation logic here (e.g., using regular expressions)
    // If the email is valid, update the input and error message accordingly
}

function checkpassword(password) {
    // Add password validation logic here
    // Update the input and error message based on your validation criteria
}

function checkpasswordsmatch(password, cpassword) {
    // Add logic to check if the passwords match
    // Update the input and error message based on your criteria
}

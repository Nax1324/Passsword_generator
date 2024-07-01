function generatePassword() {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*?';
    
    const string = lowerCase + upperCase + numbers + symbols;
    const length = document.getElementById('length').value;
    
    if (length < 1 || length > 100) {
        alert("Please enter a length between 1 and 100.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += string.charAt(Math.floor(Math.random() * string.length));
    }

    document.getElementById('password').textContent = `Your password is: ${password}`;
}

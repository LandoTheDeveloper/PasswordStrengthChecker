document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    let result = checkPasswordStrength(password);
    document.getElementById("strength").textContent = `Strength: ${result.strength}`;
});

// Password strength evaluation function
function checkPasswordStrength(password) {
    const common_passwords = [
        "123456", "password", "123456789", "12345678", "12345", "1234567", "1234567890", "qwerty",
        "abc123", "111111", "123123", "admin", "letmein", "welcome", "monkey", "password1", "password123"
    ];

    if (common_passwords.includes(password)) return { strength: "Contains commonly used password." };
    let score = 0;

    if (password.length >= 12) score += 2;
    else if (password.length >= 8) score += 1;
    else return { strength: "Too short! Use at least 8 characters." };

    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;

    let strengthLevels = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
    return { strength: strengthLevels[Math.min(score, 4)] };
}
document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    let result = checkPasswordStrength(password);
    let strengthElement = document.getElementById("strength");
    strengthElement.textContent = `Strength: ${result.strength}`;

    switch (result.strength) {
        case "Very Weak":
            strengthElement.style.color = "DarkRed";
            break;
        case "Weak":
            strengthElement.style.color = "LightCoral";
            break;
        case "Moderate":
            strengthElement.style.color = "Maroon";
            break;
        case "Strong":
            strengthElement.style.color = "MediumSeaGreen";
            break;
        case "Very Strong":
            strengthElement.style.color = "Green";
            break;
        default:
            strengthElement.style.color = "black";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let eyeBtn = document.getElementById("eye-btn")
    let password = document.querySelector(".password")
    console.log(password.value)
    
    eyeBtn.onclick = () => {
        console.log(password.value);
        if(password.type == "password"){
            password.type == "text"
            eyeBtn.src = './resources/pw_show.png'
        } else{
            password.type == "password"
            eyeBtn.src = './resources/pw_hide.png'
        }
    }

    document.querySelector(".submitBtn").addEventListener('click', (e) => {
        e.preventDefault();
        validateForm();
    });

})

function validateForm() {
    const name = document.getElementById("fullName").value;
    const username = document.getElementById("newUsername").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const nameRegex = /^[A-Za-z\s]{3,50}$/;
    const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_])[\S]{8,}$/;

    clearErrors();

    let isValid = true;

    if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent = "Full name invalid (3-50 characters, letters only)";
        isValid = false;
    }
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').textContent = "Username invalid (3-20 alphanumeric characters)";
        isValid = false;
    }
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Email invalid";
        isValid = false;
    }
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = "Password invalid (8+ characters, including uppercase, lowercase, number, and special character)";
        isValid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        document.getElementById('registerForm').submit();
    }
}

function clearErrors() {
    document.querySelectorAll('.error').forEach((currElem) => (currElem.textContent = ""));
}
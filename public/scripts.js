document.addEventListener("DOMContentLoaded", () => {
    fetchMarsWeather();
    fetchAsteroids();
    fetchGallery();

    const loginBtn = document.getElementById('loginBtn')
    const modalBody = document.getElementById('modal-body')
    const loginModal = document.getElementById('loginModal')
    const span = document.getElementById('close');
    let password = document.getElementById("password")
    let eyeBtn = document.getElementById('eye-btn')

    // login
    // loginBtn.onclick = () => {
    //     fetch('/login')
    //         .then(response => response.text())
    //         .then(data => {
    //             sessionStorage.setItem('loginAllowed', 'true')

    //             modalBody.innerHTML = data
    //             history.pushState(null, '', '/login')
                
                
    //         })
    //         .catch(error => console.error('Error fetching modal content:', error))
    // }

    loginBtn.onclick = function() {
        loginModal.style.display = 'block'
    }

    span.onclick = function() {
        loginModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    }

    window.onpopstate = function(event) {
        // Handle back/forward button
        if (loginModal.style.display === 'block') {
            loginModal.style.display = 'none';
        }
    }
    
    eyeBtn.onclick = () => {
        if(password.type == "password"){
            password.type == "text"
            eyeBtn.src = './resources/pw_show.png'
        } else{
            password.type == "password"
            eyeBtn.src = './resources/pw_hide.png'
        }
    }


});

document.querySelector(".submitBtn").addEventListener('click', (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    // regex

    const usernameRegex = /^[A-Za-z0-9 ]{3,20}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]){8,}$/
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    // clear errors
    document.querySelectorAll('.error').forEach((currElem) => (currElem.textContent = ""))

    if(!usernameRegex.test(username)){
        document.getElementById('usernameError').textContent = "Username invalid"
    }
    if(!passwordRegex.test(password)){
        document.getElementById('passwordError').textContent = "Password invalid"
    }
})




function fetchMarsWeather() {
}

function displayMarsWeather(data) {
}

function fetchAsteroids() {
}

function displayAsteroids(data) {
}

function fetchGallery() {
}

function displayGallery(data) {
}

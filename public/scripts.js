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

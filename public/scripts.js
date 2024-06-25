document.addEventListener("DOMContentLoaded", () => {
    fetchMarsWeather();
    fetchAsteroids();
    fetchGallery();

    const loginBtn = document.getElementById('loginBtn')
    const modalBody = document.getElementById('modal-body')
    const loginModal = document.getElementById('loginModal')
    const modal = document.getElementsByClassName('modal')
    const span = document.getElementsByClassName('close')[0];


    loginBtn.onclick = () => {
        fetch('/login')
            .then(response => response.text())
            .then(data => {
                modalBody.innerHTML = data
                loginModal.style.display = 'block'
            })
            .catch(error => console.error('Error fetching modal content:', error))
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
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

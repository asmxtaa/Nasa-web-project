// require('dotenv').config()
const apodImg = document.getElementById('apod-img') 
const test = document.getElementById('test')

async function getImages() {
    const promise = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=dqWBYP7u8P4RkZAMHAtty5HogOv7Z0x4gYMlNNjm&count=9"
    )
    return await promise.json()
}

document.addEventListener('DOMContentLoaded', async () => {
    const result = await getImages()
    const imageGrid = document.getElementById('imageGrid')
    result.forEach(entry => {
        console.log(entry)
        const imgElement = document.createElement('img')
        imgElement.src = entry.url
        imgElement.alt = entry.title

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.appendChild(imgElement);

        imageGrid.appendChild(galleryItem);
    })
})


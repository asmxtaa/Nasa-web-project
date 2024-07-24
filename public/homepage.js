// require('dotenv').config()
const apodImg = document.getElementById('apod-img') 
console.log("Hello");

async function getImage() {
    const promise = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=dqWBYP7u8P4RkZAMHAtty5HogOv7Z0x4gYMlNNjm"
    )
    return await promise.json()
}

document.addEventListener('DOMContentLoaded', async () => {
    const result = await getImage()
    console.log(result)
})
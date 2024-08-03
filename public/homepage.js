// require('dotenv').config()
const apodImg = document.getElementById('apod-img') 
const test = document.getElementById('test')

// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
let date = new Date();
let currentDate = date.toISOString().slice(0, 10)

let prevDate = new Date()
prevDate.setDate(date.getDate() - 18)
let formattedPrevDate = prevDate.toISOString().slice(0, 10)

async function getImages() {
    const promise = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=dqWBYP7u8P4RkZAMHAtty5HogOv7Z0x4gYMlNNjm&start_date=${formattedPrevDate}&end_date=${currentDate}`
    )
    return await promise.json()
}

async function getArticles(){
    const url = 'https://spacenews.p.rapidapi.com/datenews/1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ebebce4ca8msh1022a37d8630962p19f74ajsn382b09e49349',
            'x-rapidapi-host': 'spacenews.p.rapidapi.com'
        }
    };
    const promise = await fetch(url, options)
    return await promise.json()
}



function createImageCarouselItem() {
    const li = document.createElement('li');
    li.className = 'img-card';

    const imgContainer = document.createElement('div')
    imgContainer.className = 'img'

    const img = document.createElement('img');
    img.className = 'carouselImg'
    img.src = 'resources/placeholder.png';
    

    const overlay = document.createElement('div')
    overlay.className = 'overlay'
    const title = document.createElement('div')
    title.className = 'imgTitle'

    overlay.appendChild(title)
    imgContainer.appendChild(img)
    imgContainer.appendChild(overlay)

    li.appendChild(imgContainer);
    return li;
}

async function populateImageCarousel() {
    const imgCarousel = document.querySelector('.img-carousel')

    for (let i = 0; i < 18; i++) {
        const carouselItem = createImageCarouselItem()
        imgCarousel.appendChild(carouselItem)  
    }
    const imgCarouselImg = document.querySelectorAll('.carouselImg')
    console.log(imgCarouselImg);

    const imgTitle = document.querySelectorAll('.imgTitle')

    const actualImage = new Image();
    const images = await getImages()
    let count = 0
    images.forEach(item => {
        imgCarouselImg[count].src = item.url
        imgCarouselImg[count].alt = item.title
        imgTitle[count].innerText = item.title
        count++;
    })
}

function createArticleCarouselItem(link) {
    const btn = document.createElement('button')
    btn.className = 'article-btn'

    const li = document.createElement('li');
    li.className = 'article-card';

    const artiContainer = document.createElement('div')
    artiContainer.className = 'article'

    const headline = document.createElement('h3')
    headline.className = 'title'
    headline.innerText = 'Headline'
    artiContainer.appendChild(headline)

    const summary = document.createElement('p')
    summary.className = 'summary'
    summary.innerText = 'Summary'
    artiContainer.appendChild(summary)

    // btn.appendChild(artiContainer)
    li.appendChild(artiContainer)
    btn.appendChild(li)
    return btn
}

async function populateArticleCarousel() {
    const articleCarousel = document.querySelector('.article-carousel')
    const articleCard = document.querySelector('.article-card')
    

    for (let i = 0; i < 25; i++) {
        const carouselItem = createArticleCarouselItem()
        articleCarousel.appendChild(carouselItem)  
    }
    const articleCarouselTitle = document.querySelectorAll('.title')
    const articleCarouselSummary = document.querySelectorAll('.summary')

    const articles = await getArticles()
    const articleBtn = document.querySelectorAll('.article-btn')
    let count = 0
    articles.forEach(item => {
        articleBtn[count].addEventListener('click', () => {
            window.open(item.site_url, '_blank')
        })
        articleCarouselTitle[count].innerText = item.title
        articleCarouselSummary[count].innerText = item.news_summary_long
        count++;
    })
    // articles.forEach(item => {
    //     articleBtn.addEventListener('click', () => {
    //         window.location.href = item.site_url
    //     })
    // })
}

populateArticleCarousel()
populateImageCarousel()

// document.addEventListener('DOMContentLoaded', async () => {
//     const result = await getImages()
//     result.forEach(entry => {
//         const imgElement = document.createElement('img')
//         imgElement.src = entry.url
//         imgElement.alt = entry.title

//         const galleryItem = document.createElement('div');
//         galleryItem.className = 'gallery-item';
//         galleryItem.appendChild(imgElement);

//         imageGrid.appendChild(galleryItem);
//     })

//     const articles = await getArticles()
//     articles.forEach(results => {
//         console.log(results);
//     })
// })

const imgCarousel = document.querySelector(".img-carousel")
const galleryContainer = document.querySelector(".gallery-container")
const imgArrowBtns = document.querySelectorAll(".gallery-container i, .articles-container i")
const firstCardWidth = imgCarousel.querySelector(".img-card").offsetWidth
const articleCarousel = document.querySelector('.article-carousel')
const firstArticleWidth = articleCarousel.querySelector('.article-card').offsetWidth
// const imgCarouselChildren = [...imgCarousel.children]

let isDragging = false, startX, startScrollLeft, timeoutId

let cardPerView = Math.round(imgCarousel.offsetWidth / firstCardWidth)

// imgCarouselChildren.slice(-cardPerView).reverse().forEach(card => {
//     imgCarousel.insertAdjacentHTML("afterbegin", card.outerHTML)
// })

// imgCarouselChildren.slice(0, cardPerView).forEach(card => {
//     imgCarousel.insertAdjacentHTML("beforeend", card.outerHTML)
// })

imgArrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        switch (btn.id) {
            case "articleLeft":
                articleCarousel.scrollLeft += -firstArticleWidth
                break;
            case "articleRight":
                articleCarousel.scrollLeft += firstArticleWidth
                break;
            case "imgLeft":
                imgCarousel.scrollLeft += -firstCardWidth
                break;
            case "imgRight":
                imgCarousel.scrollLeft += firstCardWidth
                break
        }
        // imgCarousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
    })
})

// const articleCarousel = document.querySelector('.article-carousel')
const articleContainer = document.querySelector('.articles-container')
const articleArrowBtns = document.querySelectorAll('.articles-container i')
// const firstArticleWidth = articleCarousel.querySelector('.article-card').offsetWidth

// articleArrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         if(imgCarousel.scroll += btn.id ===)
//         imgCarousel.scrollLeft += btn.id === "left" ? -firstArticleWidth : firstArticleWidth
//     })
// })

const dragStart = (e) => {
    isDragging = true
    imgCarousel.classList.add("dragging")
    startX = e.pageX
    startScrollLeft = imgCarousel.scrollLeft
}

const dragging = (e) => {
    if(!isDragging) return
    imgCarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false
    imgCarousel.classList.remove("dragging")
}

// const autoPlay = () => {
//     if(window.innerWidth < 800) return
//     timeoutId = setTimeout(() => {
//         imgCarousel.scrollLeft += firstCardWidth
//     }, 2500);
// }
// autoPlay()

// const infiniteScroll = () => {
//     if(imgCarousel.scrollLeft === 0) {
//         console.log("Left");
//         imgCarousel.classList.add("no-transition")
//         imgCarousel.scrollLeft = imgCarousel.scrollWidth - (2 * imgCarousel.offsetWidth)
//         imgCarousel.classList.remove("no-transition")
//     } else if(Math.ceil(imgCarousel.scrollLeft) === imgCarousel.scrollWidth - imgCarousel.offsetWidth){
//         console.log("Right");
//         imgCarousel.classList.add("no-transition")
//         imgCarousel.scrollLeft = imgCarousel.offsetWidth
//         imgCarousel.classList.remove("no-transition")
//     }

//     clearTimeout(timeoutId)
//     if(!galleryContainer.matches(":hover")) autoPlay()
// }

imgCarousel.addEventListener("mousedown", dragStart)
imgCarousel.addEventListener("mousemove", dragging)
imgCarousel.addEventListener("mouseup", dragStop)

// imgCarousel.addEventListener("scroll", infiniteScroll)
// imgCarousel.addEventListener("mouseenter", () => clearTimeout(timeoutId))
// imgCarousel.addEventListener("mouseleave", autoPlay)
const getrandomColor = ()=>{
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const color = `rgb(${red} , ${blue} , ${green})`
    return color

}
function button (){
    const main = document.getElementsByClassName('container')
    const randomColor = getrandomColor()
    main[0].style.backgroundColor = randomColor

}

document.getElementById("btn").onclick = button

// Create a Slider in js 

const Slider = document.querySelector('.slider')
const previous = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')


let SlideIndex = 0 ;
function showslide(){
    Slider.style.transform = `translateX(${-SlideIndex * 100}%)`
}
function slideNext (){
    SlideIndex++;
    if(SlideIndex >= Slider.children.length){
        SlideIndex = 0
    }
    showslide()
}
function slidePrev(){
    SlideIndex--
    if(SlideIndex < 0){
        SlideIndex = Slider.children.length - 1
    }
    showslide()
}
next.addEventListener('click' , slideNext)
previous.addEventListener('click' , slidePrev)

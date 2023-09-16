const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const mainSlide = document.querySelector('.main-slide')
const sidebar = document.querySelector('.sidebar')

const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

const changeSlide = direction => {
  if (direction === 'up') {
    activeSlideIndex = (activeSlideIndex + 1) % slidesCount
  } else if (direction === 'down') {
    activeSlideIndex = !activeSlideIndex ? slidesCount - 1 : activeSlideIndex - 1
  }

  mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`
  sidebar.style.transform = `translateY(${activeSlideIndex * 100}vh)`
}

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))
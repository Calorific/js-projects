const screens = document.querySelectorAll('.screen')
const timeList = document.getElementById('time-list')
const startBtn = document.getElementById('start')
const board = document.getElementById('board')
const timeEl = document.getElementById('time')
const { width, height } = board.getBoundingClientRect()
const colors = [
  '#f97316',
  '#22c55e',
  '#14b8a6',
  '#3b82f6',
  '#64748b'
]

let score = 0
let time = 0

document.addEventListener('keydown', e => {
  if (e.code === 'Tab')
    e.preventDefault()
})

board.addEventListener('click', e => {
  if (e.target.classList.contains('circle')) {
    score++
    e.target.remove()
    createRandomCircle()
  } else if (e.target.classList.contains('start')) {
    e.preventDefault()
    screens[1].classList.remove('up')
  }
})

const getRandomNumber = (min, max) => {
  return ~~(Math.random() * (max - min)) + min
}

const createRandomCircle = () => {
  const circle = document.createElement('div')
  circle.classList.add('circle')

  const size = getRandomNumber(10, 60)
  circle.style.width = circle.style.height = `${size}px`
  circle.style.left = getRandomNumber(30, width - size - 30) + 'px'
  circle.style.top = getRandomNumber(30, height - size - 30) + 'px'
  circle.style.backgroundColor = colors[getRandomNumber(0, colors.length - 1)]

  board.append(circle)
}

const setTime = value => {
  const leadingZero = value < 10 ? '0' : ''
  timeEl.innerHTML = `00:${leadingZero}${value}`
}

const finishGame = () => {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `
    <div id="result" class="result">
      <h1>Your score: <span class="primary">${score}</span></h1>
      <a href="#" class="start">Restart</a>
    </div>  
  `
}

const startGame = () => {
  score = 0
  timeEl.parentNode.classList.remove('hide')
  board.querySelector('#result')?.remove()
  createRandomCircle()
  setTime(time)
  const interval = setInterval(() => {
    setTime(--time)
    if (!time) {
      clearInterval(interval)
      finishGame()
    }
  }, 1000)
}

startBtn.addEventListener('click', e => {
  e.preventDefault()
  screens[0].classList.add('up')
  screens[1].style.top = '0'
})

timeList.addEventListener('click', e => {
  if (e.target.classList.contains('time-btn')) {
    time = +e.target.dataset.time
    screens[1].classList.add('up')
    startGame()
  }
})
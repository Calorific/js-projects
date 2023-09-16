const board = document.getElementById('board')
const count = document.getElementById('count')
const colors = [
  '#f97316',
  '#22c55e',
  '#14b8a6',
  '#3b82f6',
  '#64748b'
]
const SQUARES_NUMBER = 500


const getRandomColor = () => {
  return colors[~~(Math.random() * colors.length)]
}

const setColor = target => {
  const color = getRandomColor()
  count.innerText = (+count.innerText + 1).toString()
  target.style.backgroundColor = color
  target.style.boxShadow = `0 0 4px ${color}, 0 0 15px ${color}`
}

const removeColor = target => {
  setTimeout(() => count.innerText = (+count.innerText - 1).toString(), 2000)
  target.style.backgroundColor = '#1d1d1d'
  target.style.boxShadow = '0 0 2px #000'
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseleave', e => {
    removeColor(e.target)
  })
  board.append(square)
}

board.addEventListener('mouseover', e => {
  if (e.target.classList.contains('square')) {
    setColor(e.target)
  }
})


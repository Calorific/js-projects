const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

const dragOver = e => {
  e.preventDefault()
}

const dragEnter = e => {
  e.target.classList.add('hovered')
}

const dragLeave = e => {
  e.target.classList.remove('hovered')
}

const dragDrop = e => {
  e.target.classList.remove('hovered')
  e.target.append(item)
}

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragenter', dragEnter)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)
}

const dragStart = e => {
  e.target.classList.add('hold')
  setTimeout(() => e.target.classList.add('hide'), 0)
}

const dragEnd = e => {
  e.target.classList.remove('hold', 'hide')
}

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)


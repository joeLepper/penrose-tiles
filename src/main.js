import { animate } from './animate'
import { shuffleFills, shuffleStrokes } from './utils'

const canvas = document.getElementById('stage')
canvas.width = window.screen.availWidth
canvas.height = window.screen.availHeight

let ascending = true
let depth = 4
const goDeeper = () => {
  if (depth === 10) ascending = false
  else if (depth === 4) ascending = true
  shuffleFills()
  shuffleStrokes()
  setTimeout(() => {
    if (ascending) animate(depth++, goDeeper)
    else animate(depth--, goDeeper)
  }, 2500)
}
animate(depth, goDeeper)

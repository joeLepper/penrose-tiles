import { app } from './app'
import { shuffleFills, shuffleStrokes } from './utils'

const canvas = document.getElementById('stage')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let ascending = true
let depth = 4
const goDeeper = () => {
  if (depth === 10) ascending = false
  else if (depth === 4) ascending = true

  shuffleFills()
  shuffleStrokes()

  setTimeout(() => {
    if (ascending) app(depth++, goDeeper)
    else app(depth--, goDeeper)
  }, 2500)
}
app(depth, goDeeper)

import { render } from 'react-dom'
import { App } from './App'
const canvas = document.getElementById('stage')
const invisibleMirror = document.getElementById('invisible-mirror')
canvas.width = window.screen.availWidth
canvas.height = window.screen.availHeight

const sizeInvisibleMirror = () => {
  invisibleMirror.width = window.innerWidth
  invisibleMirror.height = window.innerHeight
}

window.onresize = () => sizeInvisibleMirror
sizeInvisibleMirror()

const appProps = { canvas, invisibleMirror }
const root = document.getElementById('root')
render(<App {...appProps} />, root)

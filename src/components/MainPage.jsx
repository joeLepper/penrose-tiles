import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { animate } from '../animate'
import { shuffleFills, shuffleStrokes } from '../utils'

const animationDelayMs = 2000
let ascending = true
const minDepth = 5
const maxDepth = 10
let depth = minDepth
let play = true // stashing this globally in the module because useState and setTimeout seem to disagree sometimes in the future

export const MainPage = ({ canvas, invisibleMirror }) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [showExplainerButton, setShowExplainerButton] = useState(false)
  const [showSaveButton, setShowSaveButton] = useState(false)
  const timeout = useRef()
  const blob = useRef()
  const prepareSaveButton = () => {
    const mirrorContext = invisibleMirror.getContext('2d')
    mirrorContext.drawImage(canvas, 0, 0, window.innerWidth, window.innerHeight)
    invisibleMirror.toBlob((freshBlob) => {
      const objectUrl = URL.createObjectURL(freshBlob)
      blob.current = objectUrl
      setShowSaveButton(true)
    })
  }
  const continueAnimation = () => {
    if (depth === maxDepth) ascending = false
    else if (depth === minDepth) ascending = true
    if (play) {
      shuffleFills()
      shuffleStrokes()
      if (ascending) animate(depth++, continueAnimation, timeout, animationDelayMs)
      else animate(depth--, continueAnimation, timeout, animationDelayMs)
    }
    else prepareSaveButton()
  }

  useEffect(() => {
    setTimeout(() => setShowExplainerButton(true), 15000)
  })

  useEffect(() => {
    if (isPlaying) {
      blob.current = undefined
      setShowSaveButton(false)
      continueAnimation()
    }
    else {
      setTimeout(prepareSaveButton, 5000)
      clearTimeout(timeout.current)
    }
    return () => {
      clearTimeout(timeout.current)
    }
  }, [isPlaying])
  return <>
    <button
      className="play-button"
      onClick={() => {
        const playValue = !isPlaying
        play = playValue
        setIsPlaying(play)
      }}>
      {isPlaying ? 'pause' : 'play'}
    </button>
    {!isPlaying && showExplainerButton ? <Link to="/explainer/intro"><button>what is happening?</button></Link> : null}
    {showSaveButton ? <a download="penrose.png" href={blob.current}>
      <button>save</button>
    </a> : null}
  </>
}
import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { clearCanvas } from "../../utils"
import { kite } from "../../shapes/kite"
import { dart } from "../../shapes/dart"
import { polygon } from "../../shapes/polygon"

export const Halfs = ({ canvas }) => {
  const timeout = useRef()
  const [showKite, setShowKite] = useState(false)
  const [showDart, setShowDart] = useState(false)
  useEffect(() => {
    clearCanvas(canvas)
    return () => clearTimeout(timeout.current)
  }, [])

  const handleDartDrawClick = () => {
    clearInterval(timeout.current)
    setShowDart(true)
    setShowKite(false)
    clearCanvas(canvas)
    let dartProps = dart({
      depth: 0,
      point: [window.innerWidth / 2, window.innerHeight / 3],
      vector: [0, window.innerHeight / 4],
    })
    dartProps.flat(Infinity)
      .forEach((dartProps) => {
        dartProps.fill = '#ccc'
        dartProps.stroke = '#ccc'
        polygon(dartProps)
      })
    timeout.current = setTimeout(() => {
      dartProps = dart({
        depth: 0,
        point: [window.innerWidth / 2, window.innerHeight / 3],
        vector: [0, window.innerHeight / 4],
      })
      dartProps.flat(Infinity)
        .forEach((dartProps, i) => {
          dartProps.fill = i ? '#ccc' : '#f09'
          dartProps.stroke = '#ccc'
          polygon(dartProps)
        })
      timeout.current = setTimeout(() => {
        dartProps = dart({
          depth: 0,
          point: [window.innerWidth / 2, window.innerHeight / 3],
          vector: [0, window.innerHeight / 4],
        })
        dartProps.flat(Infinity)
          .forEach((dartProps, i) => {
            dartProps.fill = i ? '#f09' : '#ccc'
            dartProps.stroke = '#ccc'
            polygon(dartProps)
          })
      }, 1000)
    }, 1000)
  }
  const handleKiteDrawClick = () => {
    clearInterval(timeout.current)
    setShowDart(false)
    setShowKite(true)
    clearCanvas(canvas)
    let kiteProps = kite({
      depth: 0,
      point: [window.innerWidth / 2, window.innerHeight / 3],
      vector: [0, window.innerHeight / 2],
    })
    kiteProps.flat(Infinity)
      .forEach((kiteProps) => {
        kiteProps.fill = '#ccc'
        kiteProps.stroke = '#ccc'
        polygon(kiteProps)
      })
    timeout.current = setTimeout(() => {
      kiteProps = kite({
        depth: 0,
        point: [window.innerWidth / 2, window.innerHeight / 3],
        vector: [0, window.innerHeight / 2],
      })
      kiteProps.flat(Infinity)
        .forEach((kiteProps, i) => {
          kiteProps.fill = i ? '#ccc' : '#f09'
          kiteProps.stroke = '#ccc'
          polygon(kiteProps)
        })
      timeout.current = setTimeout(() => {
        kiteProps = kite({
          depth: 0,
          point: [window.innerWidth / 2, window.innerHeight / 3],
          vector: [0, window.innerHeight / 2],
        })
        kiteProps.flat(Infinity)
          .forEach((kiteProps, i) => {
            kiteProps.fill = i ? '#f09' : '#ccc'
            kiteProps.stroke = '#ccc'
            polygon(kiteProps)
          })
      }, 1000)
    }, 1000)
  }
  return (
    <>
      <h1>Let's cut them in half</h1>
      <article>
        Each of our shapes can themselves be made up of two identical but mirrored triangles. {/**/}
        Click below to check see.
      </article>

      <Link to="/explainer/shapes"><button>back</button></Link>
      <button onClick={handleKiteDrawClick}>kite</button>
      <button onClick={handleDartDrawClick}>dart</button>
      <Link to="/explainer/subdivisions"><button>next</button></Link>

      {showKite && <article>
        A half kite is a triangle with two corners of 72° and one of 36°.
      </article>}
      {showDart && <article>
        A half dart is a triangle with two corners of 36 and one of 108°.
      </article>}
    </>
  )
}

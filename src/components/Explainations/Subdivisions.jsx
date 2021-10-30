import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { clearCanvas } from "../../utils"
import { halfKite } from "../../shapes/half-kite"
import { halfDart } from "../../shapes/half-dart"
import { polygon } from "../../shapes/polygon"
import { RIGHT } from "../../constants"

export const Subdivisions = ({ canvas }) => {
  const [showKite, setShowKite] = useState(false)
  const [showDart, setShowDart] = useState(false)
  useEffect(() => {
    clearCanvas(canvas)
    return () => clearTimeout(timeout.current)
  }, [])

  const handleDartDrawClick = () => {
    clearCanvas(canvas)
    setShowDart(true)
    setShowKite(false)
    let dartProps = halfDart({
      depth: 1,
      point: [window.innerWidth / 2, window.innerHeight / 3],
      vector: [0, window.innerHeight / 4],
      side: RIGHT,
    })
    dartProps.flat(Infinity)
      .forEach((dartProps) => {
        polygon(dartProps)
      })
  }
  const handleKiteDrawClick = () => {
    clearCanvas(canvas)
    setShowDart(false)
    setShowKite(true)
    let kiteProps = halfKite({
      depth: 1,
      point: [window.innerWidth / 2, window.innerHeight / 3],
      vector: [0, window.innerHeight / 2],
      side: RIGHT,
    })
    kiteProps.flat(Infinity)
      .forEach((kiteProps) => {
        polygon(kiteProps)
      })
  }
  return (
    <>
      <h1>What if we were to subdivide further?</h1>
      <article>
        The genius of Penrose tiles is that each half kite and half dart can themselves {/**/}
        be subdivided into kites and dart.
      </article>

      <Link to="/explainer/halfs"><button>back</button></Link>
      <button onClick={handleKiteDrawClick}>kite</button>
      <button onClick={handleDartDrawClick}>dart</button>
      <Link to="/explainer/demo/1"><button>next</button></Link>

      {showKite && <article>
        A half kite can itself be composed of two half kites (a full kite) and one half dart.
      </article>}
      {showDart && <article>
        A half dart is made from a half kite and a half dart.
      </article>}
    </>
  )
}

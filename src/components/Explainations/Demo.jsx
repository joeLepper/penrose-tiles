import { useEffect } from "react"
import { Link } from "react-router-dom"
import { clearCanvas, rotateVector } from "../../utils"
import { dart } from "../../shapes/dart"
import { polygon } from "../../shapes/polygon"

export const Demo = ({ canvas, match }) => {
  const depth = +match.params.depth
  useEffect(() => {
    clearCanvas(canvas)
    const origin = [window.innerWidth / 2, window.innerHeight / 2]
    const vector = [window.innerHeight / 6, window.innerWidth / 6]
    let rotation = 5
    const graph = []
    while (rotation) {
      graph.push(dart({
        point: origin,
        vector: rotateVector(vector, 360 / 5 * rotation),
        depth: depth - 1,
      }))
      rotation--
    }
    graph.flat(Infinity).forEach(polygon)
  }, [depth])

  const backPath = depth === 1 ? '/explainer/subdivisions' : `/explainer/demo/${depth - 1}`
  const nextPath = `/explainer/demo/${depth + 1}`

  return (
    <>
      <h1>Our starting position</h1>
      <article>
        To begin our tiling, we simply arrange five darts into a star shape. {/**/}
        And from there we subdivide each shape once.
      </article>

      <Link to={backPath}><button>back</button></Link>
      {depth === 10 ? <Link to="/"><button>home</button></Link> : <Link to={nextPath}><button>next</button></Link>}

      {depth === 10 && <>
        <article>
          This could go on indefinitely! {/**/}
          Unfortunately our browser won't take much more. Why not go back to the original animation? {/**/}
        </article>
        <article>
          Or you could check out the <a href="https://github.com/joeLepper/penrose-tiles">source code</a> {/**/}
          for this demonstration.
        </article>
      </>}
    </>
  )
}

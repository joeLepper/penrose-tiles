import { Link } from "react-router-dom"
export const Intro = () => {
  return (
    <>
      <h1>This is a browser-based implementation of Penrose Tiles</h1>
      <article>
        For more on what Penrose Tiles are and how they were discovered, check out {/**/}
        <a href="https://en.wikipedia.org/wiki/Penrose_tiling">Wikipedia</a>.
        This page demonstrates one way to create a Penrose tiling – via subdivision.
      </article>

      <Link to="/explainer/shapes"><button>start</button></Link>
    </>
  )
}

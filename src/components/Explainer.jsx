import { useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import { clearCanvas } from "../utils/clear-canvas"
import { Intro } from './Explainations/Intro'
import { Shapes } from './Explainations/Shapes'
import { Halfs } from './Explainations/Halfs'
import { Subdivisions } from './Explainations/Subdivisions'
import { Demo } from './Explainations/Demo'

export const Explainer = ({ canvas }) => {
  useEffect(() => {
    clearCanvas(canvas)
  }, [])
  return (
    <div id="explainer-container">
      <Switch>
        <Route path="/explainer/intro"><Intro canvas={canvas} /></Route>
        <Route path="/explainer/shapes"><Shapes canvas={canvas} /></Route>
        <Route path="/explainer/halfs"><Halfs canvas={canvas} /></Route>
        <Route path="/explainer/subdivisions"><Subdivisions canvas={canvas} /></Route>
        <Route path="/explainer/demo/:depth" render={({ match }) => (
          <Demo canvas={canvas} match={match} />
        )} />
      </Switch>
    </div>
  )
}
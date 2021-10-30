import { Switch, Route, Redirect } from 'react-router-dom'
import { MainPage } from './components/MainPage'
import { Explainer } from './components/Explainer'

export const App = (props) => {
  return (
    <Switch>
      <Route path="/explainer">
        <Explainer {...props} />
      </Route>
      <Route path="/">
        <MainPage {...props} />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
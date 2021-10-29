import { Kite } from './Kite'

function App() {
  const origin = [0, 0]
  const vector = [window.innerWidth * 2, window.innerHeight * 2]
  const depth = 11
  return (
    <svg height={window.innerHeight} width={window.innerWidth}>
      <Kite point={origin} vector={vector} depth={depth} />
    </svg>
  )
}

export default App

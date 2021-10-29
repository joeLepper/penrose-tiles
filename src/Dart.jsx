import { LEFT, RIGHT } from './constants'
import { HalfDart } from './HalfDart'

export const Dart = (props) => {
  return <g className="Dart">
    <HalfDart {...props} side={LEFT} label={4} />
    <HalfDart {...props} side={RIGHT} label={5} />
  </g>
}

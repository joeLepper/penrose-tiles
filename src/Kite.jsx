import { LEFT, RIGHT } from './constants'
import { HalfKite } from './HalfKite'

export const Kite = (props) => {
  return <g className="Kite">
    <HalfKite {...props} side={LEFT} label={1} />
    <HalfKite {...props} side={RIGHT} label={2} />
  </g>
}

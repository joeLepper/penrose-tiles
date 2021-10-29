import { Triangle } from './Triangle'
import { SubdividedHalfKite } from './SubdividedHalfKite'
import { calculateVectorEnd, calculateKiteApex } from './utils'

export const HalfKite = ({ depth, point, vector, side, label }) => {
  const tail = calculateVectorEnd(point, vector)
  const apex = calculateKiteApex({ side, tail, vector })
  if (depth) return <g className="SubdividedHalfKite">
    <SubdividedHalfKite
      depth={depth - 1}
      point={point}
      vector={vector}
      tail={tail}
      apex={apex}
      side={side} />
  </g>
  return <Triangle label={label} className="HalfKite" points={[point, tail, apex]} />
}

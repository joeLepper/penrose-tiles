import { triangle } from './triangle'
import { subdividedHalfKite } from './subdivided-half-kite'
import { calculateVectorEnd, calculateKiteApex } from '../utils'

export const halfKite = ({ depth, point, vector, side, label }) => {
  const tail = calculateVectorEnd(point, vector)
  const apex = calculateKiteApex({ side, tail, vector })
  if (depth) return [
    subdividedHalfKite({
      depth: depth - 1,
      point: point,
      vector: vector,
      tail: tail,
      apex: apex,
      side: side,
    })
  ]
  return [
    triangle({
      label: label,
      points: [point, tail, apex],
    })
  ]
}

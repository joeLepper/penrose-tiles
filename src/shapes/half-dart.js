import { subdividedHalfDart } from './subdivided-half-dart'
import { triangle } from './triangle'
import { calculateVectorEnd, calculateDartApex } from '../utils'

export const halfDart = ({ point, vector, side, depth, label }) => {
  const tail = calculateVectorEnd(point, vector)
  const apex = calculateDartApex({ side, tail, vector })

  if (depth) return (
    subdividedHalfDart({
      point: point,
      vector: vector,
      side: side,
      depth: depth - 1,
      apex: apex,
    })
  )
  return triangle({
    label: label,
    points: [point, tail, apex],
  })
}

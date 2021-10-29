import { kite } from './kite'
import { halfDart } from './half-dart'
import { oppositeSide, calculateVectorEnd, calculateKiteApex, vectorBetween, interpolate } from "./utils"
import { ratio } from "./constants"

export const subdividedHalfKite = ({ depth, point, side, apex: parentKiteApex, tail: parentKiteTail }) => {
  const parentKiteCenter = interpolate(parentKiteTail, point, ratio)
  const childKiteVector = vectorBetween(parentKiteCenter, parentKiteApex)
  const childKiteTail = calculateVectorEnd(parentKiteCenter, childKiteVector)
  const childKiteApex = calculateKiteApex({ side: oppositeSide(side), tail: childKiteTail, vector: childKiteVector })
  const childDartVector = vectorBetween(parentKiteCenter, childKiteApex)

  return [
    kite({
      depth: depth,
      point: parentKiteCenter,
      vector: childKiteVector,
    }),
    halfDart({
      label: 3,
      depth: depth,
      point: parentKiteCenter,
      vector: childDartVector,
      side: side,
    })
  ]
}

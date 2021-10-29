import { halfDart } from "./half-dart"
import { halfKite } from "./half-kite"
import { calculateVectorEnd, vectorBetween, calculateKiteApex } from "../utils"

export const subdividedHalfDart = ({ point, vector: parentDartVector, side, depth, apex: parentDartApex }) => {
  const parentDartTail = calculateVectorEnd(point, parentDartVector)
  const childKiteVector = parentDartVector.map((coord) => coord * -1)
  const childKiteTail = calculateVectorEnd(parentDartTail, childKiteVector)
  const childKiteApex = calculateKiteApex({ side, tail: childKiteTail, vector: childKiteVector })
  const childDartVector = vectorBetween(parentDartApex, childKiteApex)

  return [
    halfKite({
      point: parentDartTail,
      vector: childKiteVector,
      side: side,
      depth: depth,
      label: 4
    }),
    halfDart({
      point: parentDartApex,
      vector: childDartVector,
      side: side,
      depth: depth,
      label: 5
    })
  ]
}
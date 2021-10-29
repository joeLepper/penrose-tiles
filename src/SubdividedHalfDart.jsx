// subdivide() {
//   const parentDart = this.dart;
//   const parentDartApex = parentDart.pointFromSide(this.side);
//   const babyKite = new Kite(parentDart.tail, p5.Vector.mult(parentDart.vector, -1))
//   const babyDart = new Dart(parentDartApex, vectorBetween(parentDartApex, babyKite.pointFromSide(this.side)));
//   return [new HalfKite(babyKite, this.side, 4), new HalfDart(babyDart, this.side, 5)]
// }
import { HalfDart } from "./HalfDart"
import { HalfKite } from "./HalfKite"
import { calculateVectorEnd, vectorBetween, calculateKiteApex } from "./utils"

// { depth, point, side, apex: parentKiteApex, tail: parentKiteTail }
export const SubdividedHalfDart = ({ point, vector: parentDartVector, side, depth, apex: parentDartApex }) => {
  const parentDartTail = calculateVectorEnd(point, parentDartVector)
  const childKiteVector = parentDartVector.map((coord) => coord * -1)
  const childKiteTail = calculateVectorEnd(parentDartTail, childKiteVector)
  const childKiteApex = calculateKiteApex({ side, tail: childKiteTail, vector: childKiteVector })
  const childDartVector = vectorBetween(parentDartApex, childKiteApex)

  return <g>
    <HalfKite point={parentDartTail} vector={childKiteVector} side={side} depth={depth} label={4} />
    <HalfDart point={parentDartApex} vector={childDartVector} side={side} depth={depth} label={5} />
  </g>
}
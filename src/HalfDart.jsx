import { SubdividedHalfDart } from './SubdividedHalfDart'
import { Triangle } from './Triangle'
import { calculateVectorEnd, calculateDartApex } from './utils'

export const HalfDart = ({ point, vector, side, depth, label }) => {
  const tail = calculateVectorEnd(point, vector)
  const apex = calculateDartApex({ side, tail, vector })

  if (depth) return (
    <SubdividedHalfDart point={point} vector={vector} side={side} depth={depth - 1} apex={apex} />
  )
  return <Triangle label={label} className="HalfDart" points={[point, tail, apex]} />
}

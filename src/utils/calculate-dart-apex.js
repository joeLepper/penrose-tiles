import { calculateVectorEnd } from './calculate-vector-end'
import { rotateVector } from './rotate-vector'
import { RIGHT } from '../constants'

export const calculateDartApex = ({ side, tail, vector }) => {
  const rotated = side === RIGHT ? rotateVector(vector, 72) : rotateVector(vector, -72)
  return calculateVectorEnd(rotated, tail)
}
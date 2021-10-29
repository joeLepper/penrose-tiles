import { calculateVectorEnd } from './calculate-vector-end'
import { rotateVector } from './rotate-vector'
import { RIGHT } from '../constants'

export const calculateKiteApex = ({ side, tail, vector }) => {
  const rotated = side === RIGHT ? rotateVector(vector, 216) : rotateVector(vector, -216)
  return calculateVectorEnd(rotated, tail)
}

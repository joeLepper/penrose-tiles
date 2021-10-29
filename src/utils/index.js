import { RIGHT } from '../constants'
export { generatePointString } from './generate-point-string'
export { oppositeSide } from './opposite-side'
export const calculateVectorEnd = (point, vector) => [point[0] + vector[0], point[1] + vector[1]]

const rotateVector = (vector, angleInDegrees) => {
  const angleInRadians = -angleInDegrees * (Math.PI / 180)
  const cos = Math.cos(angleInRadians)
  const sin = Math.sin(angleInRadians)
  const rotated = [
    Math.round(10000 * (vector[0] * cos - vector[1] * sin)) / 10000,
    Math.round(10000 * (vector[0] * sin + vector[1] * cos)) / 10000,
  ]
  return rotated
};
export const calculateKiteApex = ({ side, tail, vector }) => {
  const rotated = side === RIGHT ? rotateVector(vector, 216) : rotateVector(vector, -216)
  return calculateVectorEnd(rotated, tail)
}
export const calculateDartApex = ({ side, tail, vector }) => {
  const rotated = side === RIGHT ? rotateVector(vector, 72) : rotateVector(vector, -72)
  return calculateVectorEnd(rotated, tail)
}
export const vectorBetween = (a, b) => {
  return [b[0] - a[0], b[1] - a[1]]
}
export const calculateCenter = () => {
  calculateVectorEnd(parentTail, point).map((coord) => coord * ratio)
}
export const interpolate = (a, b, ratio) => {
  return [
    a[0] + (b[0] - a[0]) * ratio,
    a[1] + (b[1] - a[1]) * ratio,
  ]
}
export const fills = [
  '#999',
  '#666',
  '#eee',
  '#aaa',
  '#000',
]

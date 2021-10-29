import { LEFT, RIGHT } from "../constants"
export const oppositeSide = (side) => {
  if (side === LEFT) return RIGHT
  else return LEFT
}
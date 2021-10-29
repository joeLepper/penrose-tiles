import { fills, strokes } from './utils'

export const triangle = ({ points, label }) => {
  return { points: points, fill: fills[label - 1], stroke: strokes[label - 1] }
}

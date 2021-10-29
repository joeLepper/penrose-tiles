import { LEFT, RIGHT } from '../constants'
import { halfKite } from './half-kite'

export const kite = (props) => {
  return [
    halfKite({
      ...props,
      side: LEFT,
      label: 1,
    }),
    halfKite({
      ...props,
      side: RIGHT,
      label: 2,
    }),
  ]
}

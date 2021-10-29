import { LEFT, RIGHT } from './constants'
import { halfDart } from './half-dart'

export const dart = (props) => {
  return [
    halfDart({
      ...props,
      side: LEFT,
      label: 4,
    }),
    halfDart({
      ...props,
      side: RIGHT,
      label: 5,
    })
  ]
}

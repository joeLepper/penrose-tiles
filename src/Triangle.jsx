import { generatePointString, fills } from './utils'

export const Triangle = ({ points, className, label }) => {
  const style = {
    fill: fills[label - 1],
  }

  return <polygon className={className} points={generatePointString(points)} style={style} />
}

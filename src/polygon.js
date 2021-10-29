const canvas = document.getElementById('stage')
const ctx = canvas.getContext('2d')

const moveTo = ([x, y]) => ctx.moveTo(x, y)
const lineTo = ([x, y]) => ctx.lineTo(x, y)

export const polygon = ({ points, fill, stroke }) => {
  ctx.beginPath()
  ctx.fillStyle = fill
  ctx.strokeStyle = stroke
  moveTo(points[0])
  for (let i = 1; i < points.length; i++) lineTo(points[i])
  lineTo(points[0])
  ctx.fill()
  ctx.stroke()
  return { points, fill }
}

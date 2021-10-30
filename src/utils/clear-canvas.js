export const clearCanvas = (canvas) => {
  const ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.fillStyle = '#333'
  ctx.moveTo(0, 0)
  ctx.lineTo(window.innerWidth, 0)
  ctx.lineTo(window.innerWidth, window.innerHeight)
  ctx.lineTo(0, window.innerHeight)
  ctx.lineTo(0, 0)
  ctx.fill()
}
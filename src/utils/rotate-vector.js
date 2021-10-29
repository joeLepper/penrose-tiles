export const rotateVector = (vector, angleInDegrees) => {
  const angleInRadians = -angleInDegrees * (Math.PI / 180)
  const cos = Math.cos(angleInRadians)
  const sin = Math.sin(angleInRadians)
  const rotated = [
    Math.round(10000 * (vector[0] * cos - vector[1] * sin)) / 10000,
    Math.round(10000 * (vector[0] * sin + vector[1] * cos)) / 10000,
  ]
  return rotated
};

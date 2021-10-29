export const generatePointString = (points) => {
  return points.map((numArr) => numArr.map((num) => Math.round(num)).join(',')).join(' ')
}
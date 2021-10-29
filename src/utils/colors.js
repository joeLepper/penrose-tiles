export let fills = [
  '#111',
  '#333',
  '#666',
  '#aaa',
  '#ccc',
  '#111',
  '#f09',
  '#f90',
  '#9f0',
  '#90f',
]

export let strokes = [
  '#999',
  '#eee',
  '#666',
  '#aaa',
  '#ccc',
  '#90f',
  '#f09',
  '#f90',
  '#9f0',
]

const shuffle = (arr) => {
  let currentIndex = arr.length
  let randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]]
  }
  return arr;
}

export const shuffleFills = () => {
  fills = shuffle(fills)
}

export const shuffleStrokes = () => {
  strokes = shuffle(strokes)
}
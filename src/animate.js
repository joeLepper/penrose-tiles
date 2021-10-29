import { dart } from './shapes/dart'
import { polygon } from './shapes/polygon'
import { rotateVector } from './utils/rotate-vector'

const frames = 60
const draw = (graph, pageSize, goDeeper) => {
  requestAnimationFrame(() => {
    let pageSize = 100
    let nodes = []
    while (pageSize) {
      const idx = Math.round(Math.random() * graph.length)
      nodes.push(graph.splice(idx, 1).shift())
      pageSize--
    }
    nodes.forEach((node) => {
      if (node !== undefined) polygon(node)
    })
    if (graph.length) draw(graph, pageSize, goDeeper)
    else goDeeper()
  })
}

const buildGraph = (depth) => {
  const origin = [
    window.innerWidth / 2,
    window.innerHeight / 2,
  ]
  const vector = [window.innerWidth, 0]

  let rotation = 5
  const graph = []
  while (rotation) {
    graph.push(dart({
      point: origin,
      vector: rotateVector(vector, 360 / 5 * rotation),
      depth: depth,
    }))
    rotation--
  }
  return graph.flat(Infinity)
}

export const animate = (depth, goDeeper) => {
  const graph = buildGraph(depth)
  const pageSize = Math.round(graph / frames) < 100
  draw(graph, pageSize, goDeeper)
}

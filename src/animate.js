import { dart } from './shapes/dart'
import { polygon } from './shapes/polygon'
import { rotateVector } from './utils/rotate-vector'

const frames = 120
const draw = (graph, pageSize, goDeeper, timeout, animationDelayMs) => {
  requestAnimationFrame(() => {
    let paging = pageSize
    let nodes = []
    while (paging) {
      const idx = Math.round(Math.random() * graph.length)
      nodes.push(graph.splice(idx, 1).shift())
      paging--
    }
    nodes.forEach((node) => {
      if (node !== undefined) polygon(node)
    })
    if (graph.length) draw(graph, pageSize, goDeeper, timeout, animationDelayMs)
    else timeout.current = setTimeout(goDeeper, 2000)
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

export const animate = (depth, goDeeper, timeout, animationDelayMs) => {
  const graph = buildGraph(depth)
  const pageSize = Math.round(graph.length / frames)
  draw(graph, pageSize, goDeeper, timeout, animationDelayMs)
}

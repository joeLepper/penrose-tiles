import { kite } from './kite'
import { polygon } from './polygon'

const frames = 60
const animate = (graph, pageSize, goDeeper) => {
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
    if (graph.length) animate(graph, pageSize, goDeeper)
    else goDeeper()
  })
}

export const app = (depth, goDeeper) => {
  const origin = [0, 0]
  const vector = [window.innerWidth * 2, window.innerHeight * 2]

  const graph = kite({
    point: origin,
    vector: vector,
    depth: depth,
  }).flat(Infinity)
  const pageSize = Math.round(graph / frames) < 100
  animate(graph, pageSize, goDeeper)
}
// import * as fsPromises from "node:fs/promises";

// try {
//   const result = await fsPromises.readFile(
//     "./src/index.html", { encoding: "utf-8" });

//   console.log(result);
// } catch (err) {
//   console.error(err);
// }


const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
}

const dfs = (graph, target) => {
  const res = []
  const visited = new Set()
  function recursive(node) {
    if(visited.has(node)) return
    res.push(node)    
    visited.add(node)
    for(let i = 0; i<graph[node].length; i++) {
      recursive(graph[node][i])
    }
  }
  recursive(target)
  return res
}

console.log('Tikhonov R.E.', dfs(graph, "A"));
// ["A", "B", "D", "E", "F", "C"]

const graphBfs = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
}

function bfs(graph, start) {
  const queue = [start]
  const prev = {}
  const visited = new Set()

  while (queue.length > 0) {
    const node = queue.shift()

    for (const neighbor of graph[node]) {
      if(!visited.has(neighbor)){
        visited.add(neighbor)
        prev[neighbor] = node
        queue.push(neighbor)
      }
    }
  }
  
  console.log('Tikhonov R.E.', prev);
  const path = []
  let curr = Array.from(visited).pop()
  while(curr!==undefined){
    path.push(curr)
    curr = prev[curr]

  }
}

bfs(graph, "A")
// ["A", "B", "C", "D", "E", "F"]



console.log('Tikhonov R.E.', bfs(graph, "A"));


import {Stack} from "./stack.mjs";

//dfs():DFS탐색(DFS는 노드한놈만 조지는 탐색으로 원하는값이 깊숙한곳에 있는 노드일때 유용함)
Graph.prototype.dfs = function(startVertex){
    this._dfsLoopVisit(startVertex);
};

//_dfsLoopVisit():재귀를 이용한 dfs탐색
Graph.prototype._dfsLoopVisit = function(vertex){
    let stack = new Stack();//스택만들어서
    stack.push(vertex);//노드 넣고
    
    while (!stack.isEmpty())//스택 빌때까지
    {
        let vertex = stack.pop();//맨 위에 있는 노드부터 꺼내서 탐색
        if(this.visited[vertex] ){//근데 이 노드가 방문했던 노드면
            continue;//패스
        }
        this.visited[vertex] = true;//첨 방문하는 노드면
        console.log(`visit "${vertex}"`);//방명록

        let neighbors = this.edge[vertex];//이웃한 노드 전부 파악해서
        for(let i=neighbors.length -1; i>=0;i--){
            stack.push(neighbors[i]);//stack에 밀어넣기
        }
    }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
  }
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("A", "D");
  graph.addEdge("C", "G");
  graph.addEdge("D", "G");
  graph.addEdge("D", "H");
  graph.addEdge("B", "E");
  graph.addEdge("B", "F");
  graph.addEdge("E", "I");
  graph.print();
  console.log("");
  
  graph.dfs("A");
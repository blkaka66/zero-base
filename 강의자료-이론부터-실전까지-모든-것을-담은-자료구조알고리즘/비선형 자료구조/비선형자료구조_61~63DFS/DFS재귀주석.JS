
//value: list형태로 연결된 vertex를 표현해 edge연결 관계 표현
function Graph(){
    this.edge={};//리스트를만들어서 노드를만듬
    this.visited={};
};

//addVertex():정점(노드) (vertex)추가
Graph.prototype.addVertex = function (v){
    this.edge[v] =[];//밑에 vertices 배열이 우리가 만들 노드고 각 노드마다 배열(edge 담을 배열)을 만들어줌
    this.visited[v] = false;
};

//addEdge():간선(edge) 추가
Graph.prototype.addEdge = function (v1 , v2){//노드 두개 받아서 서로 간선 추가
    this.edge[v1].push(v2);
};


//print(): 현재 그래프 연결 상태 출력
Graph.prototype.print = function (){
    for(let vertex in this.edge){//전체 노드 순회하면서
        let neighbors = this.edge[vertex];//노드와 연결돼있는 간선 배열을 neighbors라 칭하고
        if(neighbors.length == 0){//간선이 0개면
            continue;//다음 노드 탐색
        }
        else{//간선이 있으면
            process.stdout.write(`${vertex} ->`);//출력
            for(let j = 0; j< neighbors.length; j++){
                process.stdout.write(`${neighbors[j]}`);//간선 배열 출력
            }
        }
       
       console.log("");
    }
};

//dfs():DFS탐색(DFS는 노드한놈만 조지는 탐색으로 원하는값이 깊숙한곳에 있는 노드일때 유용함)
Graph.prototype.dfs = function(startVertex){
    this._dfsRecursiveVisit(startVertex);
};

//_dfsRecursiveVisit():재귀를 이용한 dfs탐색
Graph.prototype._dfsRecursiveVisit = function(vertex){
    if(this.visited[vertex]){//만약 방문했던 노드면
        return;//그노드는 탐색 ㄴㄴ
    }
    //방문 안했던 노드면
    this.visited[vertex] = true;//방문했다고 체크
    console.log(`visit "${vertex}"`);//노드 방명록 남기기

    let neighbors = this.edge[vertex];//노드랑 연결돼있는 다른노드는 neighbors

    for(let i=0; i<neighbors.length;i++){
        this._dfsRecursiveVisit(neighbors[i]);//이웃한 노드부터 바로 탐색
    }
};






let graph = new Graph();
let vertices = ["A","B","C","D","E","F","G","H","I"];

for(let i=0; i<vertices.length;i++){
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



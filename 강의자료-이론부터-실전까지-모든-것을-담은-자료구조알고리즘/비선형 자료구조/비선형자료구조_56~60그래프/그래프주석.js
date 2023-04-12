//방향그래프
//graph():edge object 객체 저장을 위한 생성자
//key:vertex

//value: list형태로 연결된 vertex를 표현해 edge연결 관계 표현
function Graph(){
    this.edge={};//리스트를만들어서 노드를만듬
};

//addVertex():정점(노드) (vertex)추가
Graph.prototype.addVertex = function (v){
    this.edge[v] =[];//밑에 vertices 배열이 우리가 만들 노드고 각 노드마다 배열(edge 담을 배열)을 만들어줌
};

//addEdge():간선(edge) 추가
Graph.prototype.addEdge = function (v1 , v2){//노드 두개 받아서 서로 간선 추가
    this.edge[v1].push(v2);
};

//removeEdge():간선(edge) 삭제
Graph.prototype.removeEdge = function (v1 , v2){//노드 두개받아서
    if(this.edge[v1]){//만약 v1 노드가 존재하면
        let idx = this.edge[v1].indexOf(v2);//v1이랑 v2연결돼있는지 찾아보기
        
        if(idx != -1){//만약 간선이 있으면
            this.edge[v1].splice(idx , 1);//그 간선 삭제
        }
        
        if(this.edge[v1].length === 0){//만약 v1에 연결된 간선이 더이상 없다면
            delete this.edge[v1];//v1노드 자체를 삭제
        }
    }
};


//removeVertex():노드(vertex) 삭제
Graph.prototype.removeVertex = function (v){
    if(this.edge[v] === undefined){//만약 v노드 자체가 없으면
        console.log(v+"노드는 없음");
       return;//그냥 실패
    }
    else{//v노드가 존재하면
        let length = this.edge[v].length;//v노드에 연결된 간선 갯수를 length라 놓고
        let connectedVertex = [...this.edge[v]];//v노드랑 연결된 노드 리스트 복사해서
        for(let i =0; i<length; i ++){
            this.removeEdge(v, connectedVertex[i]);//걔네랑 연결 다 끊기(연결 다끊겨서 만약 v1에 연결된 간선이 더이상 없다면 v1노드 자체가 삭제됨) 
        }
    }
};

//sizeVertex(): 노드 개수 반환
Graph.prototype.sizeVertex = function (){
    return Object.keys(this.edge).length;//edge에 있는 노드 개수 반환
};

//sizeEdge(): 간선 개수 반환
Graph.prototype.sizeEdge = function (vertex){
    return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;//vertex에 있는 있는 간선 갯수반환(노드 자체가 없으면 0반환)
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


let graph = new Graph();
let vertices = ["A","B","C","D","E"];

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

graph.removeEdge("B", "F");
graph.removeEdge("B", "E");
graph.print();
console.log("");

graph.removeVertex("B");
graph.print();
console.log("");

graph.removeVertex("D");
graph.print();
console.log("");

console.log(graph.sizeVertex());
console.log(graph.sizeEdge("C"));
console.log(graph.sizeEdge("J"));


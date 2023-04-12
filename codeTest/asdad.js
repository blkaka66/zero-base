function solution(A) {
    var answer = 0;


    let target=[];
    let count=0;
    let res=0;
    for(let i=0;i<A.length;i++){
        for(let k=A[i].length-1;k>=0;k--){
            target.push(A[i][k]);
        }
        
        console.log(target);
        for(let a=0;a<A.length;a++){
            for(let z=0;z<A[a].length;z++){
                if(target[z] === A[a][z]){
                    count++;
               }
            }
            if(count === 2){
                res++;
                console.log("^^^")
            }
            count=0;
           
        }
        target=[];
        
    }
    answer= res/2;
    console.log(answer)
    return answer;
}

solution([["철수", "영희"],["진수", "영희"] ,["영희", "진수"], ["진수", "동수"], ["진수", "진호"],["영희", "철수"]]);//0
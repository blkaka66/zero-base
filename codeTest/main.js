function solution(grid) {

    const arr1 = Array.from(Array(grid.length*grid[0].length), () => Array(2).fill(-1))

    let index=0;

    for(let i=0;i<grid.length;i++){
        for(let a= 0;a<grid[i].length;a++){
            if(grid[i][a] === "1"){
                arr1[index][0]=i;
                arr1[index][1]=a;
                index++;
            }
        }
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i][0] === -1){
            arr1.splice(i);
            break;
        }
        
    }
    measure(arr1);
   
}

function measure(arr){
    
    for(let i=0;i<arr.length;i++){
        for(let a=0;a<arr[i].length;a++){
            if(arr[i][a])
        }
    }
}



grid = 
[["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","0"],
["0","0","0","0","0"]];
solution(grid);
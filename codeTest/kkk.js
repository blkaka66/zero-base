function solution(S) {
    let list =["(","{","[","<",")","}","]",">"];
        //      0   1   2   3   4   5   6   7
    let arr = [...S];

    let num  =makeArr(list,arr);
    
    search(num,list);
    //isGood(res);
}
function search(num,list){
    let arr=[];
    let startIndex=0;
    for(let i=0;i<num.length;i++)
    {
        if(num[i] >= 4 && num[i]<= 7){
            if(i === 1)
            {
                return 0; //처음부터 닫힌경우일 경우
            }
            else{
            let index = cut(i,num,arr,startIndex);
            
            i=index;
            startIndex=index;
            // for(let i=0;i<arr.length;i++){
            //     console.log(list[arr[i]]);
            // }
            // console.log("mmmmmmm");
            }
            search(arr);
        }
        arr=[];
    }
}

function isGood(res){
   
    let right = res.length-1;
    for(let left=0;i<res.length/2;a++){
        console.log(res[left]+res[right]);
    }
}

function cut(i,num,arr,startIndex){

    for(let a=startIndex;a<i;a++){
        arr.push(num[a]);
    }
    while(i<num.length){
        if(num[i]>=0 && num[i]<=3 || i ===num.length){
            return i;
        }
        else{
            arr.push(num[i]);
            i++;
        }
    }
    
}
function makeArr(list,arr){
    let num=[];
    for(let i=0;i<arr.length;i++){
        for(let a =0;a<list.length;a++){
            if(arr[i] === list[a] ){
                num.push(a);
            }
        }
    }
    return num;
}

 solution("(()){[<>]}");
// solution("({}<>})");

// solution("<<>>>>>>");
// solution("((((("); 예외
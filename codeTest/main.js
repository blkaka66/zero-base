function solution(S) {

    let list =["(","{","[","<",">","]","}",")"];
        //      0   1   2   3   4   5   6   7
    let arr = [...S];

    let num  =makeArr(list,arr);
    
    let good =search(num,list);
   console.log(good);
}
function search(num){
    let arr=[];
    let startIndex=0;
    let good = 1;
    for(let i=0;i<num.length;i++)
    {
        if(num[0] >= 0 && num[3]<=3)
        {
            return 0;
        }
        if(num[i] >= 4 && num[i]<= 7){
            if(i === 0)
            {
                return 0; //처음부터 닫힌경우일 경우
            }
            
            else{
         
            let index = cut(i,num,arr,startIndex);
            good= isGood(arr);
            if(good === 1)
            {i=index;
                startIndex=index;
            }
            else{
                return 0;
            }
            
            

            
            
            
            }
            
        }
        arr=[];
    }
    return good;
}

function isGood(arr){
    let good = 1;
    let right = arr.length-1;
    for(let left=0;left<arr.length/2;left++){
        if((arr[left]+arr[right]) !== 7 ){
            good=0;
        }
        right--;
    }
    return good;
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
 solution("({}<>})");

solution("<<>>>>>>");
solution("((((("); 
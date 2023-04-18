function solution(A) {
    let length = A.length;

    A.sort(function(a,b){return a-b;});

    let arr=[];

    for(let i=0;i<length;i++){
        arr.push(0);
    }

    let count=0;
    let Arrindex=length-1;
    let Aindex=length-1;
    let isHol=true;
    if(length>=3){
        while(count<length){

        
            if(isHol === true){        
                arr[Arrindex]=A[Aindex];
                Arrindex-=2;
            }
            else if(isHol === false){
                arr[Arrindex]=A[Aindex];
                Arrindex+=2;
            }
    
            if(Arrindex<0){
                isHol=false;
                Arrindex=1;
            }
            Aindex-=1
            count++;
        }
    }
    else{
        arr =A.sort(function(a,b){return b-a;});
    }
    console.log(arr)
    calculate(arr)

}

function calculate(arr){
    let sum =0;
    
    for(let i=0;i<arr.length;i++){
        if(i %2 ===0){
            
           
            sum+=arr[i]*(i+1);
        }
        else{
            console.log(arr[i])
            sum+=arr[i]*-(i+1);
        }
    }
    console.log(sum+"^^^")
}

solution([1,2]); //32
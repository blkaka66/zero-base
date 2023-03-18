function solution(s) {
    let arr=[...s];
    let word=  divide(arr);
    let res =  reverse(word);
    return res;
}
function reverse (word){
    let arr=[];
    let res=[];
   
    for(let i=0;i<word.length;i++)
    {
       
        for(let a =word[i].length-1; a>=0;a--)
        {
            arr.push(word[i][a]);
        }
        
        arr= arr.join("");
        res.push(arr);
        arr=[];
    }
   
    return res;
}

function divide(arr){
    let word=[];
    let a=[];
    for(let i=0;i<arr.length;i++)
    {
        
        
                if(arr[i]==="," || arr[i] === "." ||arr[i] === " "||arr[i]==="!"|| arr[i] ==="?"||i===(arr.length-1))
                {
                    
                    
                    if(a.length>0){ 
                        word.push(a);
                        
                        a=[];
                    }
                   
                }
                
                else{
                   
                    { a.push(arr[i]);}
                   
                }
            }
            return word;
    }

   


function solution(s) {
    const arr=[...s];
    let res=[];
    for(let i=0;i<26;i++)
    {
        res[i]=0;
    }

   makeArr(s,arr,res);

   var answer = true;
   answer = isAll(res,answer);

   console.log(answer);
   return answer;
}

function isAll(res,answer)
{
    
    for(let i=0;i<res.length;i++)
    {
        if(res[i] === 0)
        {
            answer =false;
        }
    }
    return answer;
}

function makeArr(s,arr,res)
{
    let num=0;
    for(let i=0;i<arr.length;i++)
    {
        num=s.charCodeAt(i);
        res[num-97]++;
    }
    console.log(res);
}

s="abcdefghijklmnopqrstuvvwxyz";
solution(s);
function solution(s) {
    let arr = [];
    arr=[...s];
   let countArr= setCount(arr);
   let result = organize(countArr,arr);
   console.log(result);

}
function organize(countArr,arr){
    let res =[];
    for(let i=0;i<countArr.length;i++)
    {
        if(countArr[i] === 1)
        {
            res.push(arr[i]);
        }
    }
    let result  = res.join("");
    return result;
}
function setCount(arr){
    let count=0;
    let countArr=[];

    for(let i=0;i<arr.length;i++)
    {
        for(let a =0;a<arr.length;a++)
        {
            if(arr[i] === arr[a])
            {
                count++;
            }
        }
        countArr.push(count);
        count=0;
    }
    return countArr;
}
solution("abbc");

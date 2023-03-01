function solution(num) {
    let res1 = true;
    let res2 = true;
    let res3 = true;
    res1=a(num,0,1,res1);
    console.log("$$$$$$");
   res2= a(num,0,2,res2);
   console.log("$$$$$$");
   res3= a(num,0,3,res3);
   console.log("$$$$$$");
   console.log(res1 ||res2 ||res3);

}
//0이 흥민
//1이 누나
function a(sand,turn,kg,res)
{
    
    if(sand <=0  )
    {
        if(turn === 0)
        {
            res= false;
        }
        else if(turn === 1)
        {
            res= true;
        }
        return res;
    }  
    
    console.log(turn+"의 턴 "+sand);
    sand = sand-kg;


    if(turn === 0)
    {
        turn =1;
    }
    else if(turn === 1)
    {
        turn =0;
    }
    a(sand,turn,1,res);
    a(sand,turn,2,res);
    a(sand,turn,3,res);
}
solution(5);
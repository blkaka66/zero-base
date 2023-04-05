import React,{useState} from 'react'


export default function Counter  ()  {
    // const [count, setCount] = useState(0);
    // const [show , setShow] = useState(true);
    // const operators = ["+","-","*"];
    const [operator ,setOpearotr] = useState(operators[0]);
    const [info , setInfo] = useState({
        count:0,
        show:true,
        operator:operators[0],
    })
  return <div>
    <button onClick={() => {
        let result;
        if(info.operator === "+"){
            result=info.count+1;
        }
        else if(info.operator === "-"){
            result=info.count-1;
        }
        else if(info.operator === "*"){
            result=info.count*1;
        }
        setInfo({...info,operator:operators})
        //setCount(result);
    }}> {info.operator}1 </button>
    <button onClick={() => setInfo({...info , show : !info.show})}> show and hiie </button>
    <button onClick={() => {
        const idx = Math.floor(Math.random() * operators.length);
        setOpearotr(operators[idx]);
    }}> change </button>
    <br/>
    {info.show && ` Counter : ${info.count}`}
    </div>;
  
}

import React from 'react'
import { useLocation } from 'react-router-dom';

interface Post {
    title: string;
    content: string;
    createdBy: string;
    docId:string;
}

function Content() :JSX.Element{
    const data = useLocation().state;
    console.log(data);
  return (
    <>
    <div>{data.title}</div>
    <div>
    {data.content}
    </div>
    <div>
        <button>{data.like}</button>
        <button>{data.disLike}</button>
    </div>
    </>
  )
}

export default Content;
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
    </>
  )
}

export default Content;
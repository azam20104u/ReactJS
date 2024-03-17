import React,{useState} from 'react'

export default function HooksDemo() {
    let[count,setCount]=useState(0);
  return (
    <div>
        <h4>{count}</h4>
        <button onClick={()=>setCount(count+1)}>click here</button>
    </div>
  )
}

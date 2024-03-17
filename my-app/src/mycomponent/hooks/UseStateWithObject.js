import React,{useState} from 'react'

export default function UseStateWithObject() {
    let [names,setNames] = useState({fn:"", ln:""});
  return (
    <div>
        <input type="text" onChange={(e)=>setNames({...names,fn: e.target.value})}/>
        <input type="text" onChange={(e)=>setNames({...names,ln: e.target.value})}/>
        <br />
        <h2>First Name: {names.fn}</h2>
        <h2>Last Name: {names.ln}</h2>
    </div>
  )
}

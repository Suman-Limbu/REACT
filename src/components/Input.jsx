import React, { useState } from 'react'

const Input = ({list,setList}) => {
    const [todos,setTodos]=useState("");
    
    const handleChange=(e)=>{
e.preventDefault();
setList([...list,todos]);
setTodos("");
    }
  return (
    <>
    <form>
        <input type="text" placeholder="Add item"value={todos} onChange={(e)=>setTodos(e.target.value)}/>
        <button onClick={handleChange} >Add</button>
    </form>
    
    </>
  )
}

export default Input;
import React, { useState } from 'react'

const Input = () => {
    const [todos,setTodos]=useState("");
  return (
    <>
    <form>
        <input type="text" placeholder="Add item"value={todos} onChange={(e)=>setTodos(e.target.value)}/>
        <button >Add</button>
    </form>
    
    </>
  )
}

export default Input;
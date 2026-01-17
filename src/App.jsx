import React, { useState } from 'react'
import Input from './components/input';

const App = () => {
  const [list,setList]=useState([]);
  return (
    <div>To-Do List
      <Input list={list} setList={setList}/>
    </div>
  )
}

export default App;
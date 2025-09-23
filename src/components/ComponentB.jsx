import ComponentC from "./ComponentC";
const ComponentB = () => {
  return (
    <div style={{border:"1px solid ", padding:"1rem"}}>
        <h1 >ComponentB</h1>
    <ComponentC  />
    </div>
    
  )
}

export default ComponentB;
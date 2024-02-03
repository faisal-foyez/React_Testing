import { useState } from "react";

const Counter = () =>{
  const [count, setCount] = useState(0);
  return (
    <div>
      <div role="display_count" className="message">{`Current count: ${count}`}</div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>
    </div>
  )
}

export default Counter;
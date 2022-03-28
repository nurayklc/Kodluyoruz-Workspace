import React from 'react'
import { useEffect, useState } from 'react';

function Counter() {
    
  const [name, setName] = useState("Veli")
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("Name render edildi.")
  }, [name])

  useEffect(()=>{
    const interval = setInterval(()=>{
        setCount((count) => count + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [count])

  return (
    <div>
      
    <h2>{count}</h2>
    
    <button>Click</button>
    <br></br>
    <h2>{name}</h2>
    <button onClick={() => setName("Ali")}>Click</button>
  </div>
  )
}

export default Counter
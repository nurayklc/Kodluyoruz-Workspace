import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Veli")
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("Name render edildi.")
  }, [name])

  useEffect(()=>{
    console.log("Count render edildi.")
  }, [count])

  return (
    <div className="App">
      
      <br></br>
      {count}
      <button onClick={() => setCount("1")}>Click</button>
      <br></br>
      {name}
      <button onClick={() => setName("Ali")}>Click</button>
    </div>
  );
}

export default App;

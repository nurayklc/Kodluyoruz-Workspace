import { useState } from "react";

function App() {
  const [name, setName] = useState("Nuray ");
  const [age, setAge] = useState(23);
  // Array States Example
  const [friends, setFriends] = useState(["Ayşe", "Fatma"]);
  // Object States Example
  const [address, setAdress] = useState({title:"Erzurum", zip:"06456"})

  return (
    <div className="App">
      <h1>Merhaba! {name} </h1>
      <h3> Age : {age} </h3>
      <button onClick={() => setName("Ali")}> Click Name</button>
      <button onClick={() => setAge(19)}>Click Age</button>

      <br></br>
      <h3>Friends</h3>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      {/* spread operator (...) */}
      <button onClick={() => setFriends([...friends, "Ali"])}>
        Add New Friends
      </button>

      <br></br>
      <h3>Adress</h3>
      <div>{address.title} {address.zip}</div>
      {/* spread operator (...) */}
      <button onClick={() => setAdress({...address, title :"Ankara"})}>
        Change The Adress
      </button>
    </div>
  );
}

export default App;

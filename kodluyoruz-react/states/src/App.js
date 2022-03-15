import { useState } from "react";

function App() {
  const [name, setName] = useState("Nuray ");
  const [age, setAge] = useState(23);
  const [friends, setFriends] = useState(["Ayşe", "Fatma"]);

  return (
    <div className="App">
      <h1>Merhaba! {name} </h1>
      <h3> Age : {age} </h3>
      <button onClick={() => setName("Ali")}> Click Name</button>
      <button onClick={() => setAge(19)}>Click Age</button>

      <br></br>
      <h3>Friends</h3>
      <br></br>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      {/* spread operator (...) */}
      <button onClick={() => setFriends([...friends, "Ali"])}>
        Add New Friends
      </button>
    </div>
  );
}

export default App;

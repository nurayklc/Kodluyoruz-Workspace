import Header from "./components/Header";
import User from "./components/User";

const name = "World";
const isLoggedIn = true;
const friends = [
  {
    id: 1,
    name: "Ali",
  },
  {
    id: 2,
    name: "Ayşe",
  },
  {
    id: 3,
    name: "Fatma",
  },
  {
    id: 4,
    name: "Veli",
  },
];

function App() {
  return (
    <div>
      <User name="Nuray" surname="Kılıç" isLoggedIn={true} friends={friends} age="23"/>
      <h1>Hello {name}!</h1>
      <Header />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      {isLoggedIn ? (
        <label htmlFor="myinput">
          Name:
          <input id="myinput"></input>
        </label>
      ) : (
        "You are not Log in"
      )}
    </div>
  );
}

export default App;

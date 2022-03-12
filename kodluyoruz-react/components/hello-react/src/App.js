import Header from "./components/Header";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Header />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. 
      </p>
      <label htmlFor="myinput">
        Name:
        <input id="myinput"></input>
        </label>
    </div>
  );
}

export default App;

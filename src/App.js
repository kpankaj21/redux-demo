import "./App.css";
import Counter from "./components/Counter";
import Simple from "./components/Simple";
import UpdateField from "./components/UpdateField";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Simple />
      <hr />
      <UpdateField />
      <hr />
      <Form />
      {/* 
       <h1>hello Official React Hooks</h1>
       <p>
        <a href="https://react-redux.js.org/next/api/hooks">right here!</a>
         
       </p> */}
    </div>
  );
}

export default App;

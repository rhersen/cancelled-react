import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Learn React");
  useEffect(() => {
    async function fetchAsync() {
      const response = await fetch("/.netlify/functions/announcements");
      const data = await response.json();
      console.log("useEffect", data);
      setMsg(data.msg);
    }

    fetchAsync();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {msg}
        </a>
      </header>
    </div>
  );
}

export default App;

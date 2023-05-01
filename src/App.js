import "./App.css";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// import { useEffect, useState } from "react";
// import userEvent from "@testing-library/user-event";

function App() {

  /* Fetching data from an API */
  // const [users, setUsers] = useState();
  // useEffect(() => {
  //   const getUsers = async () => {
  //     await fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data));
  //   };
  //   getUsers();
  // }, []);


  return (
    <div className="App">

      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App; 
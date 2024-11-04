import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    let response = await fetch(
      '/api/users',
      {
        method: 'get'
      }
    );
    let response_json = await response.json();
    setUsers(response_json);
    console.log(response_json);
    // console.log(users);
  }

  return (
    <div className="App">
      <button onClick={getUsers}>Get users</button>
      {/* <ul>
        {
          users.map((user) => {
            <li key={user.Id}> {user.Name}</li>
          })
        }
      </ul> */}

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  let [users, setUsers] = useState([]);

  const getUsers = async () => {
    let response = await fetch(
      // 'http://localhost:5092/api/users',
      '/api/users',
      {
        method: 'get'
      }
    );
    let response_json = await response.json();
    console.log(response_json);
    setUsers(response_json);
  }
  return (
    <div className="App">
      <button onClick={getUsers}>Get users</button>
      <ul>
         { users.length>0 &&
             users.map((user) =>( 
            <li style={{textAlign:"start"}} key={user.id}> {user.name}</li>
          ))
          }
      </ul>

    </div>
  );
}

export default App;

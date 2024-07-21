import { useState } from 'react';
import './App.css';
import Hobby from './Hobby/Hobby';
import TodoList from './TodoList/TodoList';
import TodoApp from './TodoApp/TodoApp';

function App() {
  // const arr = [1, 2, 3, 4, 5];
  // let newArray = arr.map(item => {return item * 3});
  // console.log(newArray);

  // newArray = newArray.filter(item => { return item % 2 == 0 });
  // console.log(newArray);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => {return !prev});
  }

  // let button  = null;
  // console.log(isLoggedIn);
  // if (isLoggedIn) {
  //   button = <button onClick={() => setIsLoggedIn(false)}>Logout</button>
  // } else {
  //   button = <button onClick={() => setIsLoggedIn(true)}>Login</button>
  // }

  return (
    <div>
      <h1>Lesson 07</h1>
      <TodoList />
      <Hobby />

      {/* { isLoggedIn
        ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        : <button onClick={() => setIsLoggedIn(true)}>Login</button>
      } */}
      
      {/* <button style={{backgroundColor: isLoggedIn ? 'Yellow' : 'Red', color:  isLoggedIn ? 'Red' : 'Yellow'}}
        onClick={toggleLogin}
        className={isLoggedIn ? 'loggin' : 'logout'}>
          {isLoggedIn ? 'Logout' : 'Login'}
      </button> */}

      {!isLoggedIn && <button>Login</button>}

      <TodoApp />
    </div>
  );
}

export default App;

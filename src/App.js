
import {useState} from 'react';
import './App.css';
import {Login} from './components/Login';
import TodoPlanner from './components/TodoPlanner';
import ResponsiveDrawer from './components/drawer'

function App() {
  localStorage.setItem('username', "david");
  localStorage.setItem('password', 123);
  const [logIn, setLogIn]= useState( localStorage.getItem('isLoggedIn')==='true');

  const logInFalse=()=>{
    setLogIn(false);
  }

  const logInTrue=()=>{
    setLogIn(true);
  }

  if(!logIn ){
    return (
      <div className="App">
        <Login goLogIn={logInTrue}/>
      </div>
    );
  }else{
    return (
      <div className="App">
          <ResponsiveDrawer goLogOut={logInFalse}/> 
          <TodoPlanner/>
      </div>
    );
  }
  
}





export default App;

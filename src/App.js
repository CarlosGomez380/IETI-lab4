
import './App.css';
import {Login} from './components/Login';
import TodoPlanner from './components/TodoPlanner';
import ResponsiveDrawer from './components/drawer'

function App() {
  localStorage.setItem('username', "david");
  localStorage.setItem('password', 123);

  if(localStorage.getItem('isLoggedIn') != "true"){
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }else{
    return (
      <div className="App">
          <ResponsiveDrawer/> 
          <TodoPlanner/>
      </div>
    );
  }
  
}





export default App;

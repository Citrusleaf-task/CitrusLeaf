
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./Component/User/Register";
import Login from "./Component/User/Login";
import Home from "./Component/Home/Home";
import AllTask from './Component/Home/AllTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path ='/home' element={<Home/>}></Route>
      <Route path ='/login' element={<Login/>}></Route>
      <Route path ='/register' element={<Register/>}></Route>
      <Route path ='/alltask' element={<AllTask/>}></Route>



      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

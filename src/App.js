import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import Home from './Components/Pages/Home';
import Add from './Components/Pages/Add';
import Show from './Components/Pages/Show';
import Edit from './Components/Pages/Edit';
import Demo from './Components/Pages/Demo';





function App() {
  
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/Show' element={<Show/>}/>
      <Route path='/Edit' element={<Edit/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
    {/* <Demo/> */}
    
    </>
  );
}

export default App;

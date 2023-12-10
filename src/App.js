import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Chats from './Pages/Chats';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
     <Routes>
      <Route path='/'   element={<Home/>} />
      <Route path='/chats' element={<Chats/>} />
      <Route path='/signup' element={<Signup/>} /> 
      <Route path='/login' element={<Login/>}/>
     </Routes>
  
   </>
  );
}

export default App;

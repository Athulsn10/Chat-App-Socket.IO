import './App.css';
import Auth from './components/Auth';
import Home from './components/Home';
import Chats from './Pages/Chats';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/chats' element={<Chats/>} />


   </Routes>
  
   </>
  );
}

export default App;

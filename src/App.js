import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import EmployeForm from './components/EmployeForm';


function App() {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<EmployeForm />} />
      </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;

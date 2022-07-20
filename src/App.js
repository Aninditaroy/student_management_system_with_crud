import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AddStudent from './Pages/Students/AddStudent';
import Students from './Pages/Students/Students';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addstudent' element={<AddStudent />} />
        <Route path='/students' element={<Students />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

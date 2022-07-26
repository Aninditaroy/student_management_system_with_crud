import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AddStudent from './Pages/Students/AddStudent';
import Students from './Pages/Students/Students';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentDetails from './Pages/Students/StudentDetails';
import Navbar from './Pages/Navbar/Navbar';
import EditStudents from './Pages/Students/EditStudents';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/students' element={<Students />} />
        <Route path='/' element={<Home />} />
        <Route path='/addstudent' element={<AddStudent />} />
        <Route path='/editstudent/:studentID' element={<EditStudents />} />
        <Route path='/students/:studentID' element={<StudentDetails />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

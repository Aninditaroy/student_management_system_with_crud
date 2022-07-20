import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Students from '../Students/Students';
import icon from "../../images/icon-student.png";
const Home = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setStudents(data));
    }, []);
    return (
        <section className='bg-blue-100  flex justify-center items-center h-screen'>
            <div class="hero-content mx-auto">
                <div class="">
                    <div className='flex justify-center items-center mb-10 bg-blue-200 w-100 p-3 rounded-xl shadow-lg'>
                        <img src={icon} alt="" className='w-11' />
                        <h1 class=" text-5xl text-blue-500 font-bold ml-3"> Student Management System</h1>
                    </div>
                    <div>
                        <Link to='/addstudent' class="btn bg-blue-600 mb-5 hover:bg-blue-500 flex justify-center mx-auto w-48">Add Student</Link>
                    </div>
                    <div class="overflow-x-auto bg-none shadow-xl">
                        <table class="table w-full bg-none">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Profile Image</th>
                                    <th>Full Name</th>
                                    <th>Student ID</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Gender</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map((student, index) => <Students student={student} key={student.id} index={index}></Students>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Home;
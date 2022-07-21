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
        <>
            <section class="bg-blue-100 lg:h-screen">
                <div class="overflow-x-auto pt-16">
                    <Link to='/addstudent' class="btn bg-blue-500 mb-5 hover:bg-blue-400 flex justify-center mx-auto w-48 border-none"><i class="uil uil-user-plus text-lg mr-2"></i> Add Student</Link>
                </div>

                <div class="overflow-x-auto mt-10">
                    <table class="table w-4/6 mx-auto">
                        <thead>
                            <tr>
                                <th>No.</th>
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
            </section>
        </ >

    );
};

export default Home;
import React, { useState } from 'react';
import DeleteStudentModal from './DeleteStudentModal';
import { Link } from 'react-router-dom';
import StudentsRow from './StudentsRow';
import { useQuery } from 'react-query';


const Students = () => {

    // const [students, setStudents] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/students')
    //         .then(res => res.json())
    //         .then(data => setStudents(data));
    // }, []);

    const { data: students, isLoading, refetch } = useQuery('students', () => fetch('http://localhost:5000/students', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()));

    const [deletingStudent, setDeletingStudent] = useState(null);
    // console.log(students)
    return (
        <div>
            <>
                <section class="bg-blue-100 h-screen" >
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
                                    students?.map((student, index) => <StudentsRow
                                        key={student._id}
                                        student={student}
                                        refetch={refetch}
                                        setDeletingStudent={setDeletingStudent}
                                        index={index}
                                    />)
                                }
                            </tbody>
                        </table>
                    </div>
                    {
                        deletingStudent && <DeleteStudentModal
                            deletingStudent={deletingStudent}
                            refetch={refetch}
                            setDeletingStudent={setDeletingStudent}
                        />
                    }
                </section>

            </>
        </div>
    );
};

export default Students;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const StudentsRow = ({ student, index, refetch, deletingStudent, setDeletingStudent }) => {
    const { _id, firstName, lastName, birthDate, gender, email, phoneNumber, grade, studentId, semester, address, imgUrl } = student;
    const navigate = useNavigate();
    const navigateToStudentDetails = (id) => {
        navigate(`/students/${id}`)
    }
    const navigateToEditStudentDetails = (id) => {
        navigate(`/editstudent/${id}`);
    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <th>
                    <div class="avatar">
                        <div class="w-16 rounded-full">
                            <img src={imgUrl} />
                        </div>
                    </div></th>
                <td>{firstName} {lastName}</td>
                <td>{studentId}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>{gender}</td>
                <td class="p-2">
                    <div class="flex justify-center">
                        <button title='View' onClick={() => navigateToStudentDetails(_id)} className='w-8 h-8 bg-blue-200 rounded-full p-5 flex items-center justify-center mr-2'>
                            <i class="uil uil-eye text-2xl hover:text-blue-500"></i>
                        </button>
                        <button title='Edit' onClick={() => navigateToEditStudentDetails(_id)} className='w-8 h-8 bg-blue-200 rounded-full p-5 flex items-center justify-center mr-2'>
                            <i class="uil uil-edit text-2xl hover:text-blue-500"></i>
                        </button>
                        <button title='Delete' className='w-8 h-8 bg-blue-200 rounded-full p-5 flex items-center justify-center mr-2'>
                            <label onClick={() => setDeletingStudent(student)} for="delete-manage-student-modal" >
                                <i class="uil uil-trash-alt text-2xl hover:text-blue-500"></i>
                            </label>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default StudentsRow;
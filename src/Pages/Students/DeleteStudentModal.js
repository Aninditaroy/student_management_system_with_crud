import React from 'react';
import { toast } from 'react-toastify';

const DeleteStudentModal = ({ deletingStudent, setDeletingStudent, refetch }) => {
    const { firstName, lastName } = deletingStudent;
    const handleDelete = id => {
        fetch(`https://blooming-citadel-98536.herokuapp.com/students/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${firstName} ${lastName} is deleted`)
                    setDeletingStudent(null)
                    refetch();
                }
            })
    }
    return (
        <div>
            <div>
                <input type="checkbox" id="delete-manage-student-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">

                        <div className="text-center p-5 flex-auto justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                            <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
                            <p className="text-sm text-gray-500 px-8">Do you really want to delete  <span className='text-sm font-bold text-red-600'> {firstName} {lastName}</span> ?
                            </p>
                            <p className='text-sm text-gray-500 px-8'>Deleted Student Data can not be undone!</p>
                        </div>



                        <div className="modal-action text-center space-x-4 md:block">
                            <div className="p-3  mt-2 text-center space-x-4 md:block">
                                <label for="delete-manage-student-modal" className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 ">
                                    Cancel
                                </label>


                                <button onClick={() => handleDelete(deletingStudent._id)} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteStudentModal;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const EditStudents = () => {
    const { register, handleSubmit, reset } = useForm();
    const { studentID } = useParams();
    const [studentDetails, setStudentDetails] = useState({});
    useEffect(() => {
        const url = `https://blooming-citadel-98536.herokuapp.com/students/${studentID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setStudentDetails(data))
    }, [studentDetails])

    const { _id, firstName, lastName, birthDate, gender, email, phoneNumber, grade, studentId, semester, address, imgUrl } = studentDetails;
    let student;
    // console.log(studentImage);
    const imageStorageKey = '897f17e2399bad4621116b5130fd571a';
    const onSubmit = (data, e) => {
        // const formData = new FormData();
        // const image = data.image[0];
        // console.log(data)
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        //send to imagebb
        // console.log(image)
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => {
        // if (result.success) {
        // if (data.firstName)
        student = {
            firstName: data.studentfirstName,
            lastName: data.studentlastName,
            birthDate: data.studentbirthDate,
            gender: data.studentgender,
            email: data.studentemail,
            phoneNumber: data.studentphoneNumber,
            grade: data.studentgrade,
            studentId: data.studentstudentId,
            semester: data.studentsemester,
            address: data.studentaddress,
        }
        console.log(student)
        //send to my database
        fetch(`https://blooming-citadel-98536.herokuapp.com/students/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(added => {
                console.log("Student added", added)
                if (added) {
                    toast.success("Student data updated!")
                    // reset();
                }
                else {
                    toast.error("Failed to update student data!")
                }
            })
        // }
        // })

    }

    return (
        <>

            <section className='bg-blue-100  flex justify-center items-center h-full'>
                <div>
                    <span className='bg-blue-100  flex mx-10'><Link to='/' class="btn bg-blue-500 text-white mt-2"><i class="uil uil-backward text-lg mr-2"></i> Back To Home</Link></span>
                    <div className='flex justify-center items-center'>
                        <div class="card w-96 md:w-1/2 lg:w-1/2 xl:w-1/3 mt-5 mb-16 glass mx-auto ">
                            <figure><img src="https://www.academyfront.com/images/blog/manage-school2.png" alt="" /></figure>
                            {/*  <div class="card-body">
                        <h2 class="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn now!</button>
                        </div>
                    </div> */}
                            <div class="card-body">
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">
                                    <div class="flex flex-wrap -mx-3">
                                        <div class="w-full md:w-1/2 px-3">
                                            <label className="ml-1 font-medium">First Name</label>
                                            <input class="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" type="text" defaultValue={firstName} {...register("studentfirstName")} />
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <label className="ml-1 font-medium">Last Name</label>
                                            <input class="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" type="text" defaultValue={lastName} {...register("studentlastName")} />
                                        </div>
                                    </div>


                                    <div class="flex flex-wrap -mx-3 mt-2">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="ml-1 font-medium">Birth Date</label>
                                            <input type="date" className="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" defaultValue={birthDate} {...register("studentbirthDate")} />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="ml-1 font-medium">Gender</label>
                                            <select class='w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none font-medium' defaultValue={gender}  {...register("studentstudentgender")}>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap -mx-3 mt-2">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="ml-1 font-medium">Email</label>
                                            <input type="email" className="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" defaultValue={email} {...register("studentstudentemail")} />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="ml-1 font-medium">Phone Number</label>
                                            <input type="text" className="ww-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" defaultValue={phoneNumber} {...register("studentstudentphoneNumber")} />
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap -mx-3 mt-2">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="ml-1 font-medium">Grade</label>
                                            <input type="text" className="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" defaultValue={grade} {...register("studentstudentgrade")} />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="ml-1 font-medium">Student ID</label>
                                            <input type="text" className="ww-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" defaultValue={studentId} {...register("studentstudentstudentId")} />
                                        </div>
                                    </div>

                                    <div className="flex flex-col mt-2">
                                        <label className="ml-1 font-medium">Semester</label>
                                        <select class='w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none font-medium' defaultValue={semester} {...register("studentsemester")}>
                                            <option value="Fall">Fall</option>
                                            <option value="Spring">Spring</option>
                                            <option value="Summer">Summer</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label className="ml-1 font-medium">Address</label>
                                        <textarea type='text' className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary focus:outline-none" defaultValue={address} {...register("studentaddress")} />
                                    </div>

                                    <input className='btn w-full bg-blue-500  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-white hover:border-black flex justify-center mx-auto hover:text-black transition ease-in-out duration-300' type="submit"
                                        value='Edit Student' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default EditStudents;
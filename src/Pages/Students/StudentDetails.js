import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
const StudentDetails = () => {
    const { studentID } = useParams();
    const [studentDetails, setStudentDetails] = useState({});
    useEffect(() => {
        const url = `https://blooming-citadel-98536.herokuapp.com/students/${studentID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setStudentDetails(data))
    }, [studentDetails])

    const { _id, firstName, lastName, birthDate, gender, email, phoneNumber, grade, studentId, semester, address, imgUrl } = studentDetails;
    console.log(studentDetails)
    return (
        <section class="h-screen bg-gradient-to-bl from-blue-500 to-blue-200">
            <span className='flex mb-10'><Link to='/' class="btn bg-blue-500 text-white m-10"><i class="uil uil-backward text-lg mr-2"></i> Back To Home</Link></span>
            <div className='flex items-center justify-center mt-24'>
                <div class="p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">

                    <div class="-mb-20 -translate-y-20 transform">
                        <img src={imgUrl} alt="" title={firstName} class="mx-auto w-24 h-24 rounded-full" />
                    </div>
                    <div class="text-center mt-5">
                        <span class="text-sm font-semibold text-blue-600">Student ID: {studentId}</span>
                        <h3 class="text-center text-2xl my-2 font-bold"><i class="uil uil-user-circle"></i> {firstName} {lastName}</h3>
                        <h3 class="my-1 text-center text-sm font-medium"><i class="uil uil-envelope"></i> {email}</h3>
                        <h3 class="my-1 text-center text-sm font-medium"><i class="uil uil-phone"></i> {phoneNumber}</h3>

                    </div>
                    <div class="text-center text-black">
                        <h3 class="text-sm font-medium">Gender: {gender}</h3>
                        <span class="text-sm font-medium"><i class="uil uil-location-point"></i> Address: {address}</span>
                    </div>
                    <ul class="mt-3 mb-5 flex justify-center text-center text-md">
                        <li class="flex flex-col"><span class="font-bold">Date of Birth</span> {birthDate}</li>
                        <li class="mx-6 flex flex-col"><span class="font-bold">Grade</span> {grade}</li>
                        <li class="flex flex-col"><span class="font-bold">Semester</span> {semester}</li>
                    </ul>
                    <div class="text-center text-black">

                    </div>

                </div>
            </div>
        </section>
    );
};

export default StudentDetails;
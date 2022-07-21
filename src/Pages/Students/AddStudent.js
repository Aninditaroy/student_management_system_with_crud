import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AddStudent = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const imageStorageKey = '897f17e2399bad4621116b5130fd571a';
    const onSubmit = (data, e) => {
        const formData = new FormData();
        console.log(data)
        const image = data.image[0];

        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        //send to imagebb
        console.log(image)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const student = {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        imgUrl: img,
                        gender: data.gender,
                        email: data.email,
                        birthDate: data.birthDate,
                        phoneNumber: data.phoneNumber,
                        grade: data.grade,
                        studentId: data.studentId,
                        semester: data.semester,
                        address: data.address,
                    }
                    console.log(student)
                    //send to my database
                    fetch('https://blooming-citadel-98536.herokuapp.com/students', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(student)
                    })
                        .then(res => res.json())
                        .then(added => {
                            if (added) {
                                toast.success("New student successfully added!")
                                reset();
                            }
                            else {
                                toast.error("Failed to add new student!")
                            }
                        })
                }
            })

    }
    return (
        <>

            <section className='bg-blue-100  flex justify-center items-center h-full'>
                <div>
                    <span className='flex mx-10'><Link to='/' class="btn bg-blue-500 text-white mt-2 hover:bg-blue-600 border-none"><i class="uil uil-backward text-lg mr-2"></i> Back To Home</Link></span>
                    <div className='flex justify-center items-center'>
                        <div class="card w-96 md:w-1/2 lg:w-1/2 xl:w-1/3 mt-5 mb-16 glass mx-auto ">
                            <figure><img src="https://img.freepik.com/premium-vector/students-sitting-book_118813-3188.jpg?w=2000" alt="" /></figure>
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
                                            <label for="firstName" className="ml-1 font-medium">First Name</label>
                                            <input class="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="John" {...register("firstName", {
                                                required: {
                                                    value: true,
                                                    message: "First Name is required"
                                                }
                                            })} />
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <label for="lastName" className="ml-1 font-medium">Last Name</label>
                                            <input class="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none " id="grid-last-name" type="text" placeholder="Doe" {...register("lastName", {
                                                required: {
                                                    value: true,
                                                    message: "Last Name is required"
                                                }
                                            })} />
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <label className="label">
                                            {errors.firstName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.firstName.message}</span>}
                                        </label>
                                        <label className="label">
                                            {errors.lastName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastName.message}</span>}
                                        </label>
                                    </div>
                                    <div class="flex flex-col mt-2">
                                        <div class="w-full">
                                            <label for="img" className="ml-1 font-medium">Student Profile Photo</label>
                                            <input class="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" type="file" id="image" {...register("image", {
                                                required: {
                                                    value: true,
                                                    message: "Please select an image"
                                                }
                                            })} />
                                        </div>
                                    </div>
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                    </label>

                                    <div class="flex flex-wrap -mx-3 mt-2">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label for="birthDate" className="ml-1 font-medium">Birth Date</label>
                                            <input type="date" name="birthDate" id="birthDate" placeholder="Birth Date" className="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" {...register("birthDate", {
                                                required: {
                                                    value: true,
                                                    message: "Birth Date is required"
                                                }
                                            })} />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label for="gender" className="ml-1 font-medium">Gender</label>
                                            <select class='w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none font-medium' {...register("gender", {
                                                required: {
                                                    value: true,
                                                    message: "Gender is required"
                                                }
                                            })}>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <label className="label">
                                            {errors.birthDate?.type === 'required' && <span className="label-text-alt text-red-500">{errors.birthDate.message}</span>}
                                        </label>
                                        <label className="label">
                                            {errors.gender?.type === 'required' && <span className="label-text-alt text-red-500">{errors.gender.message}</span>}
                                        </label>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mt-2">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label for="email" className="ml-1 font-medium">Email</label>
                                            <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email is required"
                                                }
                                            })} />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label for="phoneNumber" className="ml-1 font-medium">Phone Number</label>
                                            <input type="number" name="phoneNumber" id="phoneNumber" placeholder="(000) 000-0000" className="ww-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" {...register("phoneNumber", {
                                                required: {
                                                    value: true,
                                                    message: "Phone Number is required"
                                                }
                                            })} />
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                        <label className="label">
                                            {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
                                        </label>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mt-2">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label for="grade" className="ml-1 font-medium">Grade</label>
                                            <input type="text" name="grade" id="grade" placeholder="Grade" className="w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" {...register("grade", {
                                                required: {
                                                    value: true,
                                                    message: "Grade is required"
                                                }
                                            })} />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label for="studentId" className="ml-1 font-medium">Student ID</label>
                                            <input type="number" name="studentId" id="studentId" placeholder="Ex.6282547" className="ww-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none" {...register("studentId", {
                                                required: {
                                                    value: true,
                                                    message: "Student ID is required"
                                                }
                                            })} />
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <label className="label">
                                            {errors.grade?.type === 'required' && <span className="label-text-alt text-red-500">{errors.grade.message}</span>}
                                        </label>
                                        <label className="label">
                                            {errors.studentId?.type === 'required' && <span className="label-text-alt text-red-500">{errors.studentId.message}</span>}
                                        </label>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label for="Semester" className="ml-1 font-medium">Semester</label>
                                        <select class='w-100 mt-2  bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-primary appearance-none block w-full  rounded-lg py-3 px-4 leading-tight focus:outline-none font-medium' {...register("semester", {
                                            required: {
                                                value: true,
                                                message: "Semester is required"
                                            }
                                        })}>
                                            <option value="Fall">Fall</option>
                                            <option value="Spring">Spring</option>
                                            <option value="Summer">Summer</option>
                                        </select>
                                        <label className="label">
                                            {errors.semester?.type === 'required' && <span className="label-text-alt text-red-500">{errors.semester.message}</span>}
                                        </label>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label for="address" className="ml-1 font-medium">Address</label>
                                        <textarea name="address" type='text' id="address" placeholder="Address" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary focus:outline-none" {...register("address", {
                                            required: {
                                                value: true,
                                                message: "Address is required"
                                            }
                                        })} />
                                    </div>
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                    </label>

                                    <input className='btn w-full bg-blue-500  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-white hover:border-black flex justify-center mx-auto hover:text-black transition ease-in-out duration-300' type="submit"
                                        value='Add New Student' />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddStudent;
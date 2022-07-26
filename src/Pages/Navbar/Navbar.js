import React from 'react';
import icon from "../../images/icon-student.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div class="navbar bg-blue-200">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-200 rounded-box w-52">
                        <Link to='/addstudent' className='btn normal-case btn-ghost hover:bg-blue-400'><span><i class="uil uil-user-plus text-2xl mr-2"></i>Add Student</span></Link>
                        <Link to='/' className='btn btn-ghost  normal-case hover:bg-blue-400'><span><i class="uil uil-users-alt text-2xl mr-2"></i>All Students</span></Link>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <Link to='/' class="btn btn-ghost normal-case text-xl font-bold"> <img src={icon} alt="" className='w-10 mr-2' /><span className='text-lg md:text-xl lg:text-2xl'>Student Management System</span></Link>
            </div>
            <div class="navbar-end">

            </div>
        </div>
    );
};

export default Navbar;
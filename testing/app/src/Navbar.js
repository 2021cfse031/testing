import React from "react";
import { FaUser } from 'react-icons/fa'
 
const Navbar = () => {
    return ( 
        <div className='navbar justify-end'>
            <a href="/home">Home</a> &nbsp;&nbsp;
            <a href="/studentdetails">Student Details</a>&nbsp;&nbsp;
            <a href="/reports">Generate Reports</a>&nbsp;&nbsp;
            <a href='/managedrive'>Manage Vaccination Drive</a><br/>
            <span> <FaUser /> User : Student Co-Ordinator</span>
        </div>
     );
}

export default Navbar;
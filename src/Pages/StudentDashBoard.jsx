import React from 'react';
import Sidebar from '../Global/Sidebar2';
import { Outlet } from 'react-router-dom';

import StudentNav from '../Global/Navbar';

const StudentDashBoard = () => {
    return (
<>
        <StudentNav />
        <div style={{display:'flex'}} >
            <Sidebar />

            <Outlet />
        </div>
</>
    );
};

export default StudentDashBoard;

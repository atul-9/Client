import React from 'react';
import Sidebar3 from '../Global/Sidebar3';
import { Outlet } from 'react-router-dom';
import Navbar from '../Global/Navbar';
import { ThemeProvider } from '@emotion/react';
const AdminDashboard = () => {
    return (
       
        <div>
            <Navbar />
            {/* <div style={{display:"flex"}}> */}
            <Sidebar3 />
            <Outlet />
            {/* </div> */}
        </div>
        
    );
};

export default AdminDashboard;

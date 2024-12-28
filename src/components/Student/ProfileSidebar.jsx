import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import PostGraduateIcon from '@mui/icons-material/School';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const profileSidebar = () => {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
        <Sidebar collapsed={collapsed}  style={{ height: "100vh" }}>
        <Menu iconShape="square">
        <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={toggleCollapsed}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2> Profile   </h2>
          </MenuItem>
                <MenuItem icon={<PersonIcon />} component={<Link to="personal" />}>Personal</MenuItem>
            
            <SubMenu title="Test" label="Education" icon={<SchoolIcon />}>
                <MenuItem icon={<BookIcon />} component={<Link to="ssc" />}>SSC/ 10th</MenuItem>
                <MenuItem icon={<BookIcon />} component={<Link to="hsc" />}>HSC/ 12th</MenuItem>
                <MenuItem icon={<SchoolIcon />} component={<Link to="graduation" />}>Graduation</MenuItem>
                <MenuItem icon={<PostGraduateIcon />} component={<Link to="post-graduation" />}>Post Graduation</MenuItem>
            </SubMenu>
            
           
                <MenuItem icon={<AccountBoxIcon />} component={<Link to="account" />}>Account</MenuItem>
                
            
           
        </Menu>
        </Sidebar>
        </>
    );
}

export default profileSidebar;
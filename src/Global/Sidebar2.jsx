import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';
const profileonClick = () => {
    console.log("profile");
}

const studentSidebar = () => {
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
            <h2>    </h2>
          </MenuItem>
            <SubMenu title="Home" label="Home" icon={<HomeOutlinedIcon />}>
                <MenuItem component={<Link to="" />} icon={<DashboardCustomizeOutlinedIcon/>}>Dashboard</MenuItem>
            </SubMenu>
            <SubMenu title="Test" label="Test" icon={<AssignmentOutlinedIcon />}>
                <MenuItem component={<Link to="take-test" />} icon={<PlayCircleFilledWhiteOutlinedIcon />}>Take Test</MenuItem>
                <MenuItem component={<Link to="all-test" />} icon={<AssignmentTurnedInOutlinedIcon />}>View Allocated Test</MenuItem>
                <MenuItem component={<Link to="past-test" />} icon={<HistoryOutlinedIcon />}>View Past Test</MenuItem>
            </SubMenu>
            
           <SubMenu title="Account " label="Account" icon={<AccountBoxOutlinedIcon />}>
                <MenuItem component={<Link to="profile" />} icon={<PermIdentityOutlinedIcon />} onClick={() =>{
                    setCollapsed(true);
                }}>Profile</MenuItem>
                <MenuItem component={<Link to="logout" />} icon={<LogoutOutlinedIcon />}>Logout </MenuItem>
            </SubMenu>
            
           
        </Menu>
        </Sidebar>
        </>
    );
    };  
    export default studentSidebar;
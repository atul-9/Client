// Sidebar.jsx
import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  Dashboard,
  PersonAddAltOutlined,
  ManageAccountsOutlined,
  NoteAltOutlined,
  DescriptionOutlined,
  AccountCircle,
  ExitToApp,
  Home,
  Person,
  Assignment,
  LibraryBooks,
  AccountBalance,
  AddCircleOutline,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const SidebarMenuItem = ({ component, icon, label, children }) => (
  <MenuItem component={component} icon={icon}>
    {label}
    {children}
  </MenuItem>
);

const SidebarSubMenu = ({ icon, label, children }) => (
  <SubMenu icon={icon} label={label}>
    {children}
  </SubMenu>
);

const toggleCollapseLogic = (setCollapse) => {
  setCollapse((prevCollapse) => !prevCollapse);
};

export const StudentSidebar = () => {
  const [isCollapsebar, setCollapse] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth <= 1000) {
        setCollapse(true);
      } else {
        setCollapse(false);
      }
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  const toggleCollapse = () => {
    if (window.innerWidth > 1000) {
      setCollapse((prevCollapse) => !prevCollapse);
    }
  };
  const iconStyles = {
    zIndex: 2000, // Adjust the z-index as needed
    // Add other styles if required
  };

  return (
    <>
      <style>
        {`
          .sidebar-container {
            background-color: #ffffff !important;
          }
        `}
      </style>
      <Sidebar
        backgroundColor="white"
        collapsed={isCollapsebar}
        className={`sidebar-container ${isCollapsebar ? "collapsed" : ""}`}
      >
        <Menu iconShape="square">
          <MenuItem icon={<MenuIcon />} onClick={""}></MenuItem>
          <MenuItem icon={<MenuIcon />} onClick={toggleCollapse}></MenuItem>

          <SidebarSubMenu icon={<Home />} label="Home">
            <SidebarMenuItem icon={<Dashboard />}>Dashboard</SidebarMenuItem>
          </SidebarSubMenu>
          <SidebarSubMenu icon={<Person />} label="Student">
            <SidebarSubMenu icon={<AddCircleOutline />} label="Add Student">
              <SidebarMenuItem
                component={<Link to="student/add-single" />}
                icon={<PersonAddAltOutlined />}
              >
                Single Student
              </SidebarMenuItem>
              <SidebarMenuItem
                component={<Link to="student/add-multiple" />}
                icon={<PersonAddAltOutlined />}
              >
                Multiple Student
              </SidebarMenuItem>
            </SidebarSubMenu>
            <SidebarMenuItem
              component={<Link to="student/manage-student" />}
              icon={<ManageAccountsOutlined />}
            >
              Manage Student
            </SidebarMenuItem>
          </SidebarSubMenu>
          <SidebarSubMenu icon={<Assignment />} label="Test">
            <SidebarMenuItem
              component={<Link to="test/create-test" />}
              icon={<NoteAltOutlined />}
            >
              Create Test
            </SidebarMenuItem>
            <SidebarMenuItem
              component={<Link to="test/manage-test" />}
              icon={<DescriptionOutlined />}
            >
              Manage Test
            </SidebarMenuItem>
            <SidebarMenuItem
              component={<Link to="test/allocate-test" />}
              icon={<DescriptionOutlined />}
            >
              Allocate Test
            </SidebarMenuItem>
            <SidebarMenuItem
              component={<Link to="test/results" />}
              icon={<ManageAccountsOutlined />}
            >
              Results
            </SidebarMenuItem>
          </SidebarSubMenu>
          <SidebarSubMenu icon={<LibraryBooks />} label="Question Bank">
            <SidebarSubMenu
              icon={<AddCircleOutline />}
              label="Add Question Bank"
            >
              <SidebarMenuItem
                component={<Link to="question/add-single" />}
                icon={<DescriptionOutlined />}
              >
                Single Question
              </SidebarMenuItem>
              <SidebarMenuItem
                component={<Link to="question/add-multiple" />}
                icon={<DescriptionOutlined />}
              >
                Multiple Question
              </SidebarMenuItem>
            </SidebarSubMenu>
            <SidebarMenuItem
              component={<Link to="question/manage-question" />}
              icon={<DescriptionOutlined />}
            >
              Manage Question
            </SidebarMenuItem>
          </SidebarSubMenu>

          <SidebarSubMenu
            title="Account"
            icon={<AccountBalance />}
            label="Account"
          >
            <SidebarMenuItem
              component={<Link to="profile" />}
              icon={<AccountCircle />}
            >
              Profile
            </SidebarMenuItem>
            <SidebarMenuItem
              component={<Link to="logout" />}
              icon={<ExitToApp />}
            >
              Logout
            </SidebarMenuItem>
          </SidebarSubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export const handleToggleCollapse = () => {
  toggleCollapseLogic(setCollapse);
};

export default StudentSidebar;

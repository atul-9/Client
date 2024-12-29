
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RegistrationForm from "./components/Registration";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import AdminDashboard from "./Pages/AdminDashboard";

import StudentDashBoard from "./Pages/StudentDashBoard";
import StudenProfile from "./components/Student/Profile";
import TakeTest from "./components/Student/TakeTest";
import AllocatedTest from "./components/Student/AllocatedTest";
import PastTest from "./components/Student/PastTest";
import AddSingleQuestion from "./components/Admin/Question/Addsingle";
import AddManyQuestion from "./components/Admin/Question/AddMany";
import ManageQuestion from "./components/Admin/Question/ManageQuestion";
import AddMultipleStudent from "./components/Admin/Student/AddMultipleStudent";
import AddSingleStudent from "./components/Admin/Student/AddSingle";
import ManageStudent from "./components/Admin/Student/Manage";
import Profile from "./components/Admin/Profile";
import CreateTest from "./components/Admin/Test/CreateTest";
import AllocateTest from "./components/Admin/Test/AllocateTest";
import ManageTest from "./components/Admin/Test/ManageTest";
import Results from "./components/Admin/Test/Results";
import { Outlet } from "react-router-dom";
import TestPage from './Pages/TestPage';
import {TestProvider}  from './Context/testContext';


const QuestionPlaceholder = () => <div>Question Home (Placeholder)</div>;

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path='/test' element={<TestProvider><TestPage/></TestProvider>} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/student" element={<StudentDashBoard />}>
          <Route index element={<div>Welcome to Student Dashboard</div>} />
          <Route path="profile" element={<StudenProfile />} />
          <Route path="logout" element={<div>Logout</div>} />
          <Route path="take-test" element={<TestProvider><TestPage/></TestProvider>} />
          <Route path="all-test" element={<AllocatedTest />} />
          <Route path="past-test" element={<PastTest/>} />
          <Route path="addsinglestudent" element={<div>Hello</div>} />
        </Route>
        <Route path="/admin" element={<AdminDashboard />}>
          {/*  /> */}
          <Route index element={<div>Welcome to Admin Dashboard</div>} />
          <Route path="question" >
            <Route path="add-single" element={<AddSingleQuestion />} />
            <Route path="add-multiple" element={<AddManyQuestion />} />
            <Route path="manage-question" element={<ManageQuestion />} />
          </Route> 
          <Route path="student" element={<><div>student Dashboard</div> <Outlet/> </>}>
            <Route index element={<div>Welcome to Student Dashboard</div>} />
             <Route path="add-single" element={<AddSingleStudent />} />
            <Route path="add-multiple" element={<AddMultipleStudent />} /> 
            <Route path="manage-student" element={<ManageStudent/>} />
          </Route>

          <Route path="test" element={<><div>Test Section <Outlet/></div></>}>
            <Route path="create-test" element={<CreateTest />} />
            <Route path="manage-test" element={<ManageTest />} />
            <Route path="allocate-test" element={<AllocateTest />} />
            <Route path="results" element={<Results />} />
          </Route>

          <Route path="profile" element={<Profile />} />
          {/* //<Route path="logout" element={<Logout />} /> */}
        </Route>

        <Route path="*" element={<div>No Such Page</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
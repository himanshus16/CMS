import Layout from "./Layout";
import Home from "./Home";
import Form from "./SignIn";
import Feedback from "./Feedback";
import SignUp from "./SignUp";
import StuDashboard from "./stuDashboard";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import ContentPage from "./stuContent";
import Complaint from "./Complaint";
import AdminDash from "./AdminDash";
import AdminContent from "./AdminContent";
import Complaintspg from "./Complaintspg";
import Replypg from "./Replypg";
import Responsepg from "./Responsepg";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Feed-Back" element={<Feedback/>}>
          <Route index element={<SignUp/>}/>
          <Route path="sign-in" element={<Form/>}/>
          <Route path="sign-up" element={<SignUp/>}/>
        </Route>
        <Route path="Studash" element={<StuDashboard/>}>
          <Route index element={<ContentPage/>}/> 
          <Route path="student-dash" element={<ContentPage/>}/> 
          <Route path="Complaint" element={<Complaint/>}/> 
          <Route path="Complaint-response" element={<Responsepg/>}/> 
        </Route>
        <Route path="AdminDash" element={<AdminDash/>}>
          <Route index element={<AdminContent/>}/>
          <Route path="admin-dash" element={<AdminContent/>}/>
          <Route path="registered-complaint's" element={<Complaintspg/>}/>
          <Route path="replydash" element={<Replypg/>}/>
        </Route>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import img from "./images/th.jpeg";
// import { Link, Outlet } from "react-router-dom";

const Home=()=>{
    return(
        <>
        <div className="main-container">
            <div className="landing">
                <h2>Welcome to Complaint management System</h2>
                <p>We are lisning your feedback consistantly for improving our services</p>
            </div>
            <div className="img-container">
                <img src={img}></img>
            </div>
        </div>
        </>
    )
}

export default Home;
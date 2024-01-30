import img from "./images/th.jpeg";
// import { Link, Outlet } from "react-router-dom";
import { selectUser } from "./Redux/StuSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const Home=()=>{

    const status = useSelector(selectUser)
    const myNav=useNavigate();

    return(
        <>
        <div className="main-container">
            <div className="landing">
                <h2>Welcome to Complaint management System</h2>
                <p>We are lisning your feedback consistantly for improving our services</p>
                {
                    status=="" ? <p className="home-btn" onClick={()=>{
                        swal({title: "Login Required",
                        text: "Plase Login to Acess Dashboard",
                        icon: "warning",
                    })
                    myNav("/Feed-Back/sign-in")
                    }}>Acess DashBoard</p> : 
                    <p className="home-btn" onClick={()=>{myNav("/Studash")}}>Acess DashBoard</p>  
                }
            </div>
            <div className="img-container">
                <img src={img}></img>
            </div>

        </div>
        </>
    )
}

export default Home;
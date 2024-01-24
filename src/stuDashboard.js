import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { selectStuid, selectUser } from "./Redux/StuSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import LoaderDash from "./Loader";

const stuDashboard = () => {
    const myDispatch = useDispatch();

    let name = useSelector(selectUser)
    let id = useSelector(selectStuid)

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1000)


    const myLoginNav = useNavigate();

    return (

        <>
                <div className="Dashboard-nav">
                {loading ? (
                    <div className="loader-container"><LoaderDash /></div>
                ) :
                        <h2>Username: {name} | Student Id: {id} </h2>
                }
            </div>
            <div className="studash-container">
                <div id="sidebar">
                    <Link to="student-dash">Dashboard</Link>
                    <Link to="Complaint">Complaint</Link>
                    <Link to="Complaint-response">Admin Response</Link>
                    <Link>Profile</Link>
                </div>
                    <Outlet />
            </div>

        </>
    )
}

export default stuDashboard;
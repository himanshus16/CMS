import { Link, Outlet } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logout, selectStuid, selectUser } from "./Redux/StuSlice";
import { useNavigate } from "react-router-dom";
import LoaderDash from './Loader';


const AdminDash = () => {

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
            <>
                <div className="Dashboard-nav">
                    {loading ? (
                        <div className="loader-container"><LoaderDash /></div>
                    ) :
                        <h2>Username: {name} </h2>
                    }
                </div>
                <div className="studash-container">
                    <div id="sidebar">
                        <Link to="admin-dash">Dashboard</Link>
                        <Link to="registered-complaint's">Registered Complaint's</Link>
                        <Link>Profile</Link>
                        <Link>Registration request's(Admin)</Link>
                    </div>
                    <Outlet />
                </div>

            </>
        </>
    )
}

export default AdminDash
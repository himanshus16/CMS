import { useState, useEffect } from "react";
import { selectUser } from "./Redux/StuSlice";
import { useSelector } from "react-redux";


const ContentPage = () => {

    const name = useSelector(selectUser)

    return (
        <>

            <div id="content">
                    <div>
                        <h1>Welcome to the Student Dashboard</h1>
                        <p>This is where you can access your courses, assignments, grades, and update your profile.
                        </p>
                        <p>And can write your Complaint for better Solution.</p>
                    </div>
            </div>

        </>
    )
}

export default ContentPage;
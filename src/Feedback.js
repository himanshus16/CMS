import { Link, Outlet } from "react-router-dom";

const Feedback = () => {
    return (
        <>
            <div className="forms-main-container">
                <div className="button-container">
                    <div className="signin-container">
                        <label>
                            <Link to="sign-in"><a>Sign-in</a></Link>
                        </label>
                    </div>
                    <div className="registration-container">
                        <label>
                        <Link to="sign-up"><a>New Registration</a></Link>
                        </label>
                    </div>
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Feedback;
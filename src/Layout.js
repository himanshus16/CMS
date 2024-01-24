import { Link, Outlet } from "react-router-dom";
import lg from "./images/cybrom.png"
import { login, logout } from "./Redux/StuSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./Redux/StuSlice";

const Layout = () => {

    const status = useSelector(selectUser)
    let myDispatch = useDispatch(logout())


    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <header>
                <div className="nav-bar">
                    <div className="cards"><img src={lg} /></div>
                    <Link to="Home" className="cards">Home</Link>
                    <Link to="Services" className="cards">Our Services</Link>
                    {
                        status == "" ? <Link to="Feed-Back" className="cards">LogIn</Link> :
                            <Link to="Feed-Back" className="cards"
                                onClick={() => myDispatch(logout())}>
                                LogOut
                            </Link>
                    }

                </div>
            </header>
            <div>
                <Outlet />
            </div>

            <footer className="footer">
                <div>

                </div>
            </footer>
        </>
    )
}

export default Layout;
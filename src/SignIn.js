import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "./Redux/StuSlice";
import swal from 'sweetalert';




const Form = () => {
    const myDispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signinAs, setSigninAs] = useState("");

    const myNav = useNavigate();

    const submitLogin = (e) => {

        e.preventDefault();

        let url = `http://localhost:4000/usersInfo?email=${email}`;


        axios.get(url).then((res) => {
            // console.log(signinAs)
            // console.log(res.data[0].registerAs)
            if (signinAs != "") {
                if (res.data.length == 1 && res.data[0].email == email) {

                    let obj = {}
                        if (res.data[0].password == password) {
                            obj = {
                                "name": res.data[0].name,
                                "idd": res.data[0].stuid
                            }
                            if (res.data[0].registerAs != signinAs) {
                                swal({
                                    title: "Not Admin!",
                                    text: "This email not registered as admin...",
                                    icon: "warning",
                                  });
                            }
                            else{
                                swal({
                                    title: "Sucessfully login!",
                                    text: "",
                                    icon: "success",
                                  });
                                myDispatch(login(obj))
                                if (res.data[0].registerAs == "Student") {
                                    myNav("/Studash")
                                }
                                else if (res.data[0].registerAs == "Admin") {
                                    myNav("/AdminDash")
                                }
                            }
                        }
                        else {
                            document.getElementById("password-label").style.color = "red"
                            document.getElementById("password-input").value = ""
                            document.getElementById("password-input").placeholder = "Invalid Password"
                        }
                }
                else {
                    document.getElementById("email-label").style.color = "red"
                    document.getElementById("email-input").value = ""
                    document.getElementById("email-input").placeholder = "Invalid Email!"
                }
            }
            else {
                alert("please select 'Sign-in As' field");
            }

        })
            .catch((error) => console.log(error))
    };



    return (
        <>
            <div className="Form-container">
                <div className="form">
                    <h2>Sign-in</h2>
                    <label id="email-label">Enter Email:</label><input type="email" placeholder="Email" value={email}
                        onChange={(e) => { setEmail(e.target.value) }} id="email-input" />
                    <label id="password-label">Enter Password:</label><input type="password" placeholder="Password" value={password}
                        onChange={(e) => { setPassword(e.target.value) }} id="password-input" />
                    <label>Sign-in As:</label>
                    <select onChange={(e) => setSigninAs(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Student">Student</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <div className="form-button-container">
                        <button onClick={submitLogin}>Submit</button>
                        <button onClick={() => { myNav("/Feed-Back") }}>Register Now</button>
                    </div>
                    <a href="#">Forgot password</a>
                </div>
                {/* } */}
            </div>
        </>
    )
}

export default Form;
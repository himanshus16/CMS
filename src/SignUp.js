import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const mynav=useNavigate()

    const [input , setInput]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;        

        setInput(values=>({...values,[name]: value}));
        // console.log(input)
        
    }
    
    const saveData=()=>{

        if(input==""){
            alert("Fill the required Information") 
        }
        else{
            let url="http://localhost:4000/usersInfo";
            axios.post(url, input).then((res)=>{
                alert("registration successfull..!!");
                mynav("/Feed-Back/sign-in")
            })
        }

    }


    return (
        <>
            <div className="Form-container">
                <div className="form">
                    <h2>New Registration</h2>
                    <label>Enter ID :</label><input type="text" name="stuid" value={input.stid} placeholder="Student ID" onChange={handleInput}/>
                    <label>Enter Name:</label><input type="text" name="name" value={input.name}  placeholder="Full Name" onChange={handleInput}/>
                    <label>Enter Email:</label><input type="email" name="email" value={input.email}  placeholder="Email" onChange={handleInput}/>
                    <label>Create Password:</label><input type="password" name="password" value={input.password}  placeholder="Create Password" onChange={handleInput}/>
                    <label>Sign Up As:</label>
                    <select onChange={handleInput} value={input.registerAs} name="registerAs">
                        <option value="">Select</option>
                        <option value="Student">Student</option>
                        <option value="Admin">Admin</option>
                    </select>

                    <button onClick={saveData}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default SignUp;
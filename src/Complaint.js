import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectStuid, selectUser } from "./Redux/StuSlice";


const Complaint = () => {

    const [complaint, setComplaint] = useState("");
    const stuid = useSelector(selectStuid)
    const sname = useSelector(selectUser)
    

    const resgisterComplaint = () => {
        let url = "http://localhost:4000/Complaints";
        axios.post(url, {
            "query": complaint,
            "stuid": stuid,
            "name": sname,
            "response": ""
        }).then((res) => {
            let text=`Your complaint registered sucessfully!`
            document.getElementById("para-line").innerHTML=text;
            document.getElementById("complaint-input").value = "";
            document.getElementById("para-line").style.color="green";
        })
    }
    

    const alertUser = () => {
        document.getElementById("complaint-input").style.border = "thin dotted red";
    }


    return (
        <>
            <div className="complaint-main-container">
                <div className="complaint-heading">
                    <h3>Sorry for inconvenience : </h3>
                    <p id="para-line">We are eager to hear your problems</p>
                </div>
                <div className="complaint-input">
                    <textarea placeholder="Write here..." name="complaint" value={complaint} rows="10" cols="50"
                        onChange={(e) => { setComplaint(e.target.value) }} id="complaint-input"></textarea>
                    <button onClick={resgisterComplaint}>Submit</button>
                </div>
            </div>
        </>
    )

}

export default Complaint
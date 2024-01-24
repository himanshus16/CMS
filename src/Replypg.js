
import { useEffect, useState } from 'react'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getComId, getStuCom, getStuUser, getStuid , getData } from './Redux/AdminSlice';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Replypg = () => {

  
  let Sname = useSelector(getStuUser);
  let Sid = useSelector(getStuid);
  let Squery = useSelector(getStuCom);
  let comId = useSelector(getComId);
  const myNav = useNavigate();
  const myDispatch=useDispatch();

  const [reply, setReply] = useState({
    response:'',
  });


  const saveReply=(event)=>{
    event.preventDefault()

    axios.patch(`http://localhost:4000/Complaints/${comId}`,reply)
    .then((res)=>{ 

      myNav("/AdminDash/registered-complaint's")
      
      myDispatch(getData({"response":res.data.response}))
      }
    
    )
  }

  const Handleinput=(e)=>{
    setReply({...reply,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className='reply-main-container'>
        <div className='reply-content-box'>
          <h4>Please help the student with best solution :</h4>
          <div className='Complaint-info'>
            <ul>
              <label>Student Name  </label><li>{Sname}</li>
              <label>Student Id  </label><li>{Sid}</li>
              <label>Student Complaint  </label><li>{Squery}</li>
            </ul>
          </div>
        </div>
        <div className='reply-box'>
          <textarea cols="60" rows="12" placeholder='reply here...' name='response'
            onChange={Handleinput}></textarea>
          <button onClick={saveReply} >Send Reply</button>
        </div>
      </div>
    </>
  )

}


export default Replypg
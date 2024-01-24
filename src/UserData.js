
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getData } from './Redux/AdminSlice';

const UserData = ({users}) => {

  const myNav=useNavigate();
  const myDispatch=useDispatch();
  const [Stuid,setStuid]= useState("");

  // const [responseVal, setResponseVal]=useState(false)


  const replyBtnHit=(e)=>{
    e.preventDefault()
    let stid=e.target.value;
    setStuid(stid);

    let url = `http://localhost:4000/Complaints?stuid=${stid}`;

    axios.get(url).then((res)=>{
      // if(res.data[0].response!=""){
      //   setResponseVal(true);
      // }
      // console.log(responseVal)
      if ( res.data[0].stuid == Stuid) {
        
        let obj={
          "name":res.data[0].name,
          "Sid":res.data[0].stuid,
          "com":res.data[0].query,
          "comId":res.data[0].id
        };
        myDispatch(getData(obj));
        myNav("/AdminDash/replydash");

      }
    })

  }

  return (
    <>
    {
        users.map((item,index)=>{

            return(
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.query}</td>
                    <td>{item.stuid}</td>
                    <td>{item.name}</td>
                    <td>
                      <button className='reply-btn' onClick={replyBtnHit} 
                      value={item.stuid}>Reply
                      </button>
                      </td>
                </tr>
            )
        })
    }
    </>
  )
}

export default UserData
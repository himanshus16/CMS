import { selectStuid, selectUser } from './Redux/StuSlice'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import React from 'react'
import axios from 'axios'

const Responsepg = () => {

  const [response, setResponse]=useState("")
  const [yourComplaint, setYourComplaint]=useState("")
  const [comId, setComId]=useState()

  let stid = useSelector(selectStuid)

  let url=`http://localhost:4000/Complaints?stuid=${stid}`;

  axios.get(url).then((res)=>{
    // console.log(res.data[0])
    if(res.data.length==1){
      if(res.data[0].response!=""){
        let r=res.data[0].response;
        setResponse(r);
      }
      else{
        let r="Wait for admin response";
        setResponse(r);
      }
      let c=res.data[0].query;
      let id=res.data[0].id;
      
      setYourComplaint(c)
      setComId(id)
    }
    else{
      console.log(res.data.length)
    }
  })

  return (
    <>
    <div className='response-main-container'>
        <div className='response-data-container'>
            <div>
              <label id='comNo'>
              Complaint No. {comId} :
              </label>
              <h5>
                {yourComplaint}
              </h5>
            </div >
            <div id='res'>
              <label>
                Admin Response :
              </label>
              <h4>
                {response}
              </h4>
            </div>
        </div>
    </div>
    </>
  )
}

export default Responsepg
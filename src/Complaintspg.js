
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import UserData from './UserData';
// import { useDispatch } from 'react-redux';
import LoaderDash from './Loader';

const Complaintspg = () => {

    const [tableData, setData] = useState([])
    const [loading, setLoading] = useState(true)

    let url = `http://localhost:4000/Complaints`


    const fetchData = async () => {
        try {
            const response = await axios.get(url)
            return response.data
        } catch {
            console.error("Error in fetching data :", error)
        }
    }

    useEffect(()=>{
    const fetchAndSetData = async () => {
        try {
            const fetchedData = await fetchData();
            setData(fetchedData);
        }
        catch (error) {
            console.error("error fetching data:", error)
        }
        finally {
            setLoading(false)
        }
    }
    fetchAndSetData()
    },[]);

    return (
        <>
            <div className='table-container'>
                {loading? <div className='loading-container'><LoaderDash/></div>:
                <table>
                    <thead>
                    <tr>
                        <th>Complaint No.</th>
                        <th>Registered Complaint</th>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Reply To Complaint</th>
                    </tr>
                    </thead>
                    <tbody>
                    <UserData users={tableData}/>
                    </tbody>
                </table>
                }
            </div>
        </>
    )
}

export default Complaintspg;

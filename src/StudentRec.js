

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StudentRec = () => {

    const [record, setRecord] = useState([])

    let url = `http://localhost:4000/usersInfo`



    useEffect(() => {
        axios.get(url).then((res) => {
            setRecord(res.data)
        })
    }, [])
    const data = record.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.stuid}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
            </tr>
        )
    })


    return (
        <>
            <div className='Student-record-container'>
                <table>
                    <tr>
                        <th>S No.</th>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Student Email</th>
                    </tr>
                    {data}
                </table>
            </div>
        </>
    )
}

export default StudentRec
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AttendaceTable = () => {
    const attendanceInfo = useLoaderData()
    return (
        <div className='container mx-auto my-10' >
            <div className='flex justify-center' >
            <button className='text-2xl font-inter font-bold  my-7 bg-[#1678CB] p-5 rounded-lg text-white' >Attendance Information</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full font-inter">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Employee Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                       {
                        attendanceInfo.map((info, i)=>  <tr key={info._id}>
                        <td> {i+1} </td>
                        <td> {info.date} </td>
                        <td> {info.E_name} </td>
                        <td> {info.status} </td>
                    </tr>
                    )
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttendaceTable;
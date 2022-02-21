import React, { useState } from 'react';

const DataTable = () => {

const initialData =[{id:1,firstName:"Maria",lastName:"Svensson",age:54,birthDate:"1967-11-07",country:"Sweden",city:"Karlskrona"},

{id:3,firstName:"Jaime",lastName:"Torrealba",age:57,birthDate:"1965-01-08",country:"Sweden",city:"Jönköping"},
{id:4,firstName:"Abbe",lastName:"Mohamud",age:77,birthDate:"1940-01-08",country:"Sweden",city:"Stockholm"},
{id:5,firstName:"Laurita",lastName:"Owanta",age:31,birthDate:"1990-09-14",country:"Sweden",city:"Växjö"}];

// initial variable created
const  [studentList, setStudentList]= useState(initialData);
const [showDetails, setShowDetails]=useState(false);
const [student, setStudent]= useState({id:0,firstName:"",lastName:"",age:0,birthDate:"",country:"",city:""});

const TableHeader=()=>{
    return(
                <thead>
                    
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    
                </thead>

    );
};

const TableRow=(props)=>{
    return(
        <tbody>
        {
props.list.map((student)=>(<tr key={student.id}>
    <td>{student.id}</td>
    <td>{student.firstName}</td>
    <td>{student.lastName}</td>
    <td>{student.age}</td>
    <td><TableAction student={student}/></td>
</tr>))
        }
               
        </tbody>
    );
};
const TableAction=(props)=>{
const showData=()=>{
    setShowDetails(true);
    console.log("SHOW DATA",props.student);
    setStudent(props.student);
};
    

    return(
<button type='button' className='btn btn-primary'onClick={showData}>

 Details</button>
    );
};
const ShowStudentDetails =()=>{

    if (showDetails){
        return(
             <div className='container'>
             <div className='col-9'>
             <div className='card'>
         <div className='card-header bg-info text-white'>
                    STUDENT INFORMATION
         </div>
    <div className='card-body'>
        <h6 className='card-title'>Country and City: {student.country}  {student.city}</h6>
        <p className='text'>ID: {student.id}</p>
        <p className='text'>FullName: {student.firstName}  {student.lastName}</p>
        <p className='text'>BirthDate: {student.birthDate}</p>
    </div>
    
    <div className='card-footer'>
        <button type='button' className='btn btn-outline-info' onClick={()=>setShowDetails(false)}>Close</button>
         </div>
         </div>
         </div>
         </div>
        );
        }else{
           return ("");
        }
};

   

return (
    <div className='container'>  
    <table className='table .table-striped'>   
       <TableHeader/>
      <TableRow list={studentList}/>
       </table>
       <ShowStudentDetails/>
        </div>
    );
};

export default DataTable;
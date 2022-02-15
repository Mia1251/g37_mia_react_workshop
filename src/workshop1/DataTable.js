import React, { useState, props } from 'react';

const DataTable = () => { 

    const initialData = [
        {id: 1, firstName: "Maria", lastName: "Svensson", age: 54, birthDate: "1967-11-07", country: "Sweden", city: "Karlskrona"},
        {id: 2, firstName: "Andreas", lastName: "Svensson", age: 25, birthDate: "1996-11-16", country: "Sweden", city: "Karlskrona"},
        {id: 3, firstName: "Emma", lastName: "Holgersson", age: 32, birthDate: "1989-08-31", country: "Norway", city: "Oslo"}
    ];
    
    const [studentList, setStudentList] = useState(initialData);
    const [showDetails, setShowDetails] = useState(false);
    const studentDefaultData = {id: 0, firstName: "", lastName: "", age: 0, birthDate: "", country: "", city: ""}
    const [student, setStudent] = useState(studentDefaultData);
    
const TableHeader = () => {
    return (
    <thead>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>            
        <th>Age</th>           
        <th>Action</th>     
    </thead>
    );
};

const TableAction = (props) => {

    const showData = () => {
        setShowDetails(true);
        console.log("SHOW DATA", props.student);
        setStudent(props.student);
    };
        return (<button type="button" className="btn btn-primary" onClick={showData}>Details</button>);
};

const ShowStudentDetails = () => {

    if(showDetails){
        return(
            <div className="card">
                <div className="card-header bg-info text-white">
                    STUDENT INFORMATION
                </div>
                <div className="card-body">
                    <h5 className='card-title'>{student.country} {student.city} </h5>
                    <p className="card-text">ID: {student.id}</p>
                    <p className="card-text">Name: {student.firstName} {student.lastName}</p>
                    <p className="card-text">BirthDate: {student.birthDate}</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-danger" onClick={() => {setShowDetails(false); setStudent(studentDefaultData)}}>Close</button>
                </div>
            </div>
        );
    } else {
        return ("");
    }
};

const TableRow = (props) => {
    return(
        <tbody>
            {
                props.list.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                        <td><TableAction student={student} /></td>
                    </tr>
                ))
            }
        </tbody>
    );
};
    return (
        <div className="container">
            <table className="table table-striped table-hover">
                <TableHeader />
                <TableRow list={studentList} />                
            </table>
            <br/>
            <ShowStudentDetails />
        </div>
    );
};

export default DataTable;
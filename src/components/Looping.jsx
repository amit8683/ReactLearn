import React from "react";
import Table from 'react-bootstrap/Table';
const Looping = () => {
  const students = [
    { name: "John Doe", class: "10th", rollNo: "1" },
    { name: "Jane Smith", class: "10th", rollNo: "2" },
    { name: "Sam Wilson", class: "9th", rollNo: "3" },
    { name: "Lucy Brown", class: "11th", rollNo: "4" },
  ];
 
  return (
    <div>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>RollNo</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) =>{
            return (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.rollNo}</td>
                </tr>
              )
          })}
        </tbody>
      </Table>
      
    </div>
  );
};

export default Looping;

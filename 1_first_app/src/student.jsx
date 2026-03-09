// Student.jsx
import React from 'react';

function Student(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "8px" }}>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Status: {props.isStudent ? "Active" : "Inactive"}</p>
    </div>
  );
}

export default Student;
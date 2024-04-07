import { useState } from "react";

function Employee() {
  let rn = 1;
  const employee = {
    name: "Arun",
    age: 36,
    salary: 100000,
    dept: "IT",
    address: { street: 123, city: "Blr" },
  };

  const [emp, setEmp] = useState(employee);
  const [rowNum, setRowNum] = useState(rn);

  function incrementAge() {
    setRowNum(rowNum + 1);
    setEmp({ ...emp, age: (emp.age += 1) });
  }

  function incrementSalary() {
    setEmp({ ...emp, salary: emp.salary + 100000 });
  }

  return (
    <>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={incrementSalary}>Increment Salary</button>
      <h2>The name of the employee is {emp.name}</h2>
      <h3>
        The age of the employee is {emp.age} and salary is {emp.salary}
      </h3>
      <h4>The rownum is {rowNum}</h4>
    </>
  );
}

export default Employee;

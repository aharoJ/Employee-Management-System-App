// import React from "react";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "Beto",
      lastName: "Humberto",
      email: "Beto@gmail.com",
    },
    {
      id: 2,
      firstName: "Alberto",
      lastName: "Cedillo",
      email: "Kun@gmail.com",
    },
    {
      id: 3,
      firstName: "Anthony",
      lastName: "Humberto",
      email: "Tony@gmail.com",
    },
  ];
  return (
    <>
      <div>
        <h2>List of Employees</h2>
        <table>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListEmployeeComponent;

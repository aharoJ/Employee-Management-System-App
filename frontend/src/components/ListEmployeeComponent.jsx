import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService"

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
        <h2 className="text-xl font-semibold mb-4">List of Employees</h2>
        <table className="table-auto  border-spacing-2  w-full text-left whitespace-no-wrap">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-slate-600 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Employee Id
              </th>
              <th className="px-4 py-2 border border-slate-600 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Employee First Name
              </th>
              <th className="px-4 py-2 border border-slate-600 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Employee Last Name
              </th>
              <th className="px-4 py-2 border border-slate-600 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                Employee Email
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((employee) => (
              <tr
                key={employee.id}
                className="border-b odd:bg-white even:bg-gray-50"
              >
                <td className="px-4 border border-slate-600 py-3">
                  {employee.id}
                </td>
                <td className="px-4 border border-slate-600 py-3">
                  {employee.firstName}
                </td>
                <td className="px-4 border border-slate-600 py-3">
                  {employee.lastName}
                </td>
                <td className="px-4 border border-slate-600 py-3">
                  {employee.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListEmployeeComponent;

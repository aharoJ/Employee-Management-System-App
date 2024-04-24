import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  return (
    <>
      <div>
        <h2 className="text-xl font-semibold mb-4">List of Employees</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addEmployee}
        >
          Add Employee
        </button>
        <table className="table-auto  border-spacing-2  w-full text-left whitespace-no-wrap justify-center self-center items-center"> 
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
                Employee Email Id
              </th>
              <th className="px-4 py-2 border border-slate-600 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                Actions
              </th>

            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
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
                <td className="px-4 border border-slate-600 py-3">
                  <button
                    type="button"
                    className="px-3 py-2 border border-transparent text-base font-medium rounded-md text-white 
                    bg-blue-600 hover:bg-blue-700 "
                    onClick={()=> updateEmployee(employee.id)}
                  >
                    Update
                  </button>
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

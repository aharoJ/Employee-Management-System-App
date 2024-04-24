import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  function saveEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee); // print employee Obj

      createEmployee(employee).then((response) => {
        console.log(response.data);
        navigator("/employees");
      });
    }
  }

  function validateForm() {
    let valid = true;
    // coppying erros object into errorCopy
    const errorCopy = { ...errors };
    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "Last name is requiered";
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Email is required";
      valid = false;
    }

    setErrors(errorCopy);

    return valid;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold mb-8">Add Employee</h2>
        <form className="w-full max-w-lg" onSubmit={saveEmployee}>
          <div className="flex flex-wrap -mx-3 mb-6 border border-red-500">
            <div className="w-full px-3 my-3 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="first-name"
              >
                First Name:
              </label>
              <input
                className={`appearance-none block w-full px-4 py-3 mb-3 leading-tight
                  ${errors.firstName ? "border border-red-500 text-gray-500" : "bg-gray-200 text-gray-700 border-gray-200"}
                  rounded focus:outline-none focus:bg-white`}
                id="first-name"
                type="text"
                placeholder="Enter Employee First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs italic">
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="w-full px-3 my-3 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name:
              </label>
              <input
                className={`appearance-none block w-full px-4 py-3 mb-3 leading-tight
                  ${errors.lastName ? "border border-red-500 text-gray-500" : "bg-gray-200 text-gray-700 border-gray-200"}
                  rounded focus:outline-none focus:bg-white`}
                id="first-name"
                type="text"
                placeholder="Enter Employee First Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs italic">{errors.lastName}</p>
              )}
            </div>
            <div className="w-full px-3 my-3 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className={`appearance-none block w-full px-4 py-3 mb-3 leading-tight
                  ${errors.email ? "border border-red-500 text-gray-500" : "bg-gray-200 text-gray-700 border-gray-200"}
                  rounded focus:outline-none focus:bg-white`}
                id="first-name"
                type="text"
                placeholder="Enter Employee First Name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
            <div className="w-full p-3 mb-3">
              <button
                className="bg-green-500 hover:bg-green-700 text-white 
                  font-bold py-2 px-4 text-xl rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default EmployeeComponent;

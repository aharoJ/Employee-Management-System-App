import React, { useState } from "react";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function saveEmployee(e) {
    e.preventDefault();

    const employee = { firstName, lastName, email };
    console.log(employee); // print employee Obj
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 
                  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="first-name"
                type="text"
                placeholder="Enter Employee First Name"
                value={firstName}
                onChange={handleFirstName}
              />
            </div>

            <div className="w-full px-3 my-3 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 
                  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="last-name"
                type="text"
                placeholder="Enter Employee Last Name"
                value={lastName}
                onChange={handleLastName}
              />
            </div>
            <div className="w-full px-3 my-3 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 
                  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Enter Employee Email"
                value={email}
                onChange={handleEmail}
              />
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

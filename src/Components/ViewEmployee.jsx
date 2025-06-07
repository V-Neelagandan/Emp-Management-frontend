import React, { useEffect } from "react";
import { useContext } from "react";
import Header from "./Main/Header";
import { Link } from "react-router-dom";
import CallApi from "./CallApi";
import ApiContext from "./ApiContext";
import '../CSS/View.css'
// import Parent from './HOC/Parent'
// import Child from './HOC/Parent'

const ViewEmployee = () => {
  // const url = useContext(ApiContext)

  const { url } = useContext(ApiContext);
  const { data, fetchData } = CallApi();
  //   const Count = Parent(Child)

  useEffect(() => {
    // const url = `http://localhost:3000/Employee_Data`
    fetchData(url);
  }, [data]);

  // const url = "http://localhost:3000/Employee_Data"
  // const {data: temp} = callApi(url)
  return (
    <>
      <Header />
      <section id="ViewEmployee">
        <center>
          <h1>Employee Details</h1>
          {/* <Count/> */}
        </center>
        <table class="table table-stripped text-center table-hover" id="api">
          <thead>
            <tr class="table-warning">
              <th>Emp_ID</th>
              <th>Emp_First_Name</th>
              <th>Emp_Last_Name</th>
              <th>Department</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile_Num</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((fetchData) => {
              return (
                <tr key={fetchData.id}>
                  <td>{fetchData.id}</td>
                  <td>{fetchData.employee_firstName}</td>
                  <td>{fetchData.employee_lastName}</td>
                  <td>{fetchData.employee_department}</td>
                  <td>{fetchData.employee_username}</td>
                  <td>{fetchData.employee_email}</td>
                  <td>{fetchData.employee_contact}</td>
                  <td>
                    <Link to={`/edit/${fetchData.id}`}>
                      <i class="fa fa-edit"></i>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/delete/${fetchData.id}`}>
                      <i class="fa fa-trash"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ViewEmployee;

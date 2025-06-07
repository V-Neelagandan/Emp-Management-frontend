import React, { useContext, useRef, useState } from "react";
import Header from "./Main/Header";
// import axios from "axios"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CallApi from "./CallApi";
import ApiContext from "./ApiContext";

const AddEmployee = () => {
  const { url } = useContext(ApiContext);
  const { data, fetchData } = CallApi();
  // const url = `http://localhost:3000/Employee_Data`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const lastName = useRef(null)
  // console.log("text", lastName.current.value)
  const [department, setDepartment] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    // console.log("details",firstName,lastName,department,username,password,confirmPassword,email,contact)

    const employee_details = {
      employee_firstName: firstName,
      employee_lastName: lastName,
      employee_department: department,
      employee_username: username,
      employee_password: password,
      employee_confirmPassword: confirmPassword,
      employee_email: email,
      employee_contact: contact,
    };

    try {
      fetchData(url, "post", employee_details);
      // const response = await axios.post("http://localhost:3000/Employee_Data", employee_details)
      // .then(()=>{alert("data added successfully")})
      // .catch(()=>{alert("failed to add data")})
      // const url = "http://localhost:3000/Employee_Data"
      // await CallApi({url : url, method : 'post', body : employee_details})
      new Swal("Success", "Employee Data Added Successfully", "success");
      navigate("/View");
    } catch {
      new Swal("Error", "Failed to Add Employee Data", "error");
      navigate("/View");
    }
  };

  return (
    <>
      <Header />
      <section id="register">
        <div className="container mt-5">
          <div className="card mx-auto" style={{ maxWidth: "600px" }}>
            <div className="card-header text-center bg-light">
              <h3>Registration Form</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">
                    <i className="fas fa-user"></i> First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">
                    <i className="fas fa-user"></i> Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="department">
                    <i className="fas fa-building"></i> Department/Office
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="department"
                    name="department"
                    placeholder="Department/Office"
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">
                    <i className="fas fa-user"></i> Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="fas fa-lock"></i> Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    <i className="fas fa-lock"></i> Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i> E-Mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="E-Mail Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactNo">
                    <i className="fas fa-phone"></i> Contact No.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNo"
                    name="contact"
                    placeholder="(+91)"
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-warning btn-block"
                  onClick={handleForm}
                >
                  <i className="fas fa-paper-plane"></i> Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddEmployee;

import { useEffect, useRef, useState } from "react";
import Header from "./Main/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CallApi from "./CallApi";

const EditEmployee = () => {
  const { data, fetchData } = CallApi();
  const url = "https://emp-manage-server.onrender.com/Employee_Data/";
  const navigate = useNavigate();
  const { id } = useParams();

  const initialState = {
    firstName: "",
    lastName: "",
    department: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    contact: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FIRST_NAME":
        return { ...state, firstName: action.payload };
        break;
      case "SET_LAST_NAME":
        return { ...state, lastName: action.payload };
        break;
      case "SET_DEPARTMENT":
        return { ...state, department: action.payload };
        break;
      case "SET_USERNAME":
        return { ...state, username: action.payload };
        break;
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
        break;
      case "SET_CONFIRM_PASSWORD":
        return { ...state, confirmPassword: action.payload };
        break;
      case "SET_EMAIL":
        return { ...state, email: action.payload };
        break;
      case "SET_CONTACT":
        return { ...state, contact: action.payload };
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    firstName,
    lastName,
    department,
    username,
    password,
    confirmPassword,
    email,
    contact,
  } = state;

  const getData = async () => {
    const response = await axios.get(`${url}${id}`);
    // fetchData(url, 'get', null, id)

    // Whenever we want to update the state, we will use dispatch

    dispatch({
      type: "SET_FIRST_NAME",
      payload: response.data.employee_firstName,
    });
    dispatch({
      type: "SET_LAST_NAME",
      payload: response.data.employee_lastName,
    });
    dispatch({
      type: "SET_DEPARTMENT",
      payload: response.data.employee_department,
    });
    dispatch({
      type: "SET_USERNAME",
      payload: response.data.employee_username,
    });
    dispatch({
      type: "SET_PASSWORD",
      payload: response.data.employee_password,
    });
    dispatch({
      type: "SET_CONFIRM_PASSWORD",
      payload: response.data.employee_confirmPassword,
    });
    dispatch({ type: "SET_EMAIL", payload: response.data.employee_email });
    dispatch({ type: "SET_CONTACT", payload: response.data.employee_contact });
  };

  useEffect(() => {
    getData();
  }, [id]);
  // const [firstName, setFirstNa}}me] = useState('')
  // // const [lastName, setLastName] = useState('')
  // const lastName = useRef('')
  // console.log("text", lastName.current.value)
  // const [department, setDepartment] = useState('')
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [email, setEmail] = useState('')
  // const [contact, setContact] = useState('')

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
    fetchData(url, "put", employee_details, id);
    new Swal(
      "Success",
      `Employee ${employee_details.employee_firstName} Data Updated Successfully`,
      "success"
    );
    navigate("/View");
    // const response = await axios.put(`http://localhost:3000/Employee_Data/${id}`, employee_details)
    // .then(()=>{alert("data added successfully")})
    // .catch(()=>{alert("failed to add data")})
    // navigate('/ViewEmployee')
  };

  const getValues = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "firstName") {
      dispatch({ type: "SET_FIRST_NAME", payload: value });
    } else if (name === "lastName") {
      dispatch({ type: "SET_LAST_NAME", payload: value });
    } else if (name === "department") {
      dispatch({ type: "SET_DEPARTMENT", payload: value });
    } else if (name === "username") {
      dispatch({ type: "SET_USERNAME", payload: value });
    } else if (name === "password") {
      dispatch({ type: "SET_PASSWORD", payload: value });
    } else if (name === "confirmPassword") {
      dispatch({ type: "SET_CONFIRM_PASSWORD", payload: value });
    } else if (name === "email") {
      dispatch({ type: "SET_EMAIL", payload: value });
    } else if (name === "contact") {
      dispatch({ type: "SET_CONTACT", payload: value });
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
                    name="firstName"
                    placeholder="First Name"
                    onChange={getValues}
                    value={firstName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">
                    <i className="fas fa-user"></i> Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={getValues}
                    value={lastName}
                  />
                  {/* onChange={(e)=>setLastName(e.target.value)}  */}
                </div>
                <div className="form-group">
                  <label htmlFor="department">
                    <i className="fas fa-building"></i> Department/Office
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="department"
                    placeholder="Department/Office"
                    onChange={getValues}
                    value={department}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">
                    <i className="fas fa-user"></i> Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    onChange={getValues}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="fas fa-lock"></i> Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={getValues}
                    value={password}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    <i className="fas fa-lock"></i> Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={getValues}
                    value={confirmPassword}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i> E-Mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="E-Mail Address"
                    onChange={getValues}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactNo">
                    <i className="fas fa-phone"></i> Contact No.
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="contact"
                    placeholder="(+91)"
                    onChange={getValues}
                    value={contact}
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

export default EditEmployee;

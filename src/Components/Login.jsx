import Header from "./Main/Header";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "../CSS/Login.css";
import Footer from "./Main/Footer";

const Login = () => {
  const username = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://emp-manage-server.onrender.com/Admin_Data");
      console.log(response.data[0]);
      if (
        response.data[0].username == username.current.value &&
        response.data[0].password == password.current.value
      ) {
        sessionStorage.setItem("username", username.current.value);
        sessionStorage.setItem("password", password.current.value);
        Swal.fire({
          title: "Login Successful",
          text: "Welcome to Employee Management Portal",
          icon: "success",
          timer: 2000,
        });
        navigate("/");
      } else {
        Swal.fire({
          title: "Authentication error",
          text: "Invalid Username or Password",
          icon: "error",
          timer: 2000,
        });
      }
    } catch {
      new Swal("Error", "Login Failed", "error");
      navigate("/");
    }
  };
  return (
    <>
      <Header />

      <div class="container-login mt-5 mx-auto bg-light">
        <i class="bi bi-person-circle h1"></i>
        <h2>Sign In</h2>
        <form action="#">
          <div class="input-field">
            <input
              type="text"
              placeholder="username"
              class="form-control"
              ref={username}
              required
            />
          </div>
          <div class="input-field">
            <input
              type="text"
              placeholder="password"
              class="form-control"
              ref={password}
              required
            />
          </div>
          <button class="btn btn-primary" onClick={submit}>
            Login
          </button>
          <div class="forget">
            <a
              href="#"
              class="link-offset-2 link-underline link-underline-opacity-0"
            >
              <input type="checkbox" id="remember" /> Remember Me
            </a>
            <a
              href="#"
              class="link-offset-2 link-underline link-underline-opacity-0"
            >
              Forgot Password
            </a>
          </div>
        </form>
      </div>
        <Footer/>
    </>
  );
};

export default Login;

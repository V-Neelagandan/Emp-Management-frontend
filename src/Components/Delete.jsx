// import axios from 'axios'
import React, { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import CallApi from "./CallApi";
import ApiContext from "./ApiContext";

const Delete = () => {
  const { url } = useContext(ApiContext);
  const { data, fetchData } = CallApi();
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteData = async () => {
    try {
      await fetchData(url, "delete", null, id);
      // const response = await axios.delete(`http://localhost:3000/Employee_Data/${id}`)
      new Swal("Success", "Employee Data Deleted Successfully", "success");
      navigate("/View");
      // .then(()=>{alert("data added successfully")})
      // .catch(()=>{alert("failed to add data")})
    } catch {
      new Swal("Error", "Failed to delete Employee Data", "error");
      navigate("/View");
    }
    // const response = await axios.delete(`http://localhost:3000/Employee_Data/${id}`)
    // .then(() => {
    //   alert("Deleted")
    //   navigate(`/ViewEmployee`)
    // })
    // .catch(()=>{alert("Not deleted")})
  };
  useEffect(() => {
    deleteData();
  }, []);

  return <></>;
};

export default Delete;

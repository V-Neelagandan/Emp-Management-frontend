// import React, { useState } from "react";
// import CallApi from "../CallApi";
// // import ApiContext from '../ApiContext'
// // import {useContext} from 'react'

// const Parent = (Wrapped) => {
//   // const {url} = useContext(ApiContext)
//   const url = "http://localhost:5000/Employee_Data";
//   const { data, fetchData } = CallApi();

//   const [employeeCount, setEmployeeCount] = useState(0);

//   const Child = () => {
//     const getCount = () => {
//       fetchData(url);
//       setEmployeeCount(data.length);
//     };
//     getCount();
//     return <Wrapped getCount={employeeCount} />;
//   };

//   return Child;
// };

// export default Parent;

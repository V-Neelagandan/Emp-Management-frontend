import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddEmployee from "./Components/AddEmployee";
import ViewEmployee from "./Components/ViewEmployee";
import Delete from "./Components/Delete";
import EditEmployee from "./Components/EditEmployee";
import Login from "./Components/Login";
import PageNotFound from "./Components/Main/PageNotFound";
import ApiContext from "./Components/ApiContext";

const App = () => {
  const url = "https://emp-manage-server.onrender.com/Employee_Data";
  return (
    <>
      <ApiContext.Provider value={{ url }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Add" element={<AddEmployee />}></Route>
          <Route path="View" element={<ViewEmployee />}></Route>
          <Route path="delete/:id" element={<Delete />}></Route>
          <Route path="edit/:id" element={<EditEmployee />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </ApiContext.Provider>
    </>
  );
};

export default App;

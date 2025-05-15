import { useState } from "react";
import Model from "./Model/Model";
import UserList from "./UserList/UserList";
import { staticData } from "../Data/data";

function App() {
  const [userData, setUserData] = useState(staticData);
  const [show, setShow] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  //add model open:
  const handleAdd = () => {
    setEdit(false);
    handleShow();
  };

  //edit model open:
  const handleEdit = (data) => {
    setEdit(true);
    console.log(data);
    handleShow();
  };

  const handleDelete = (id) => {
    const updatedList = userData.filter((item) => item.id !== id && item);
    setUserData(updatedList);
  };

  const addUserData = (data) => {
    console.log("===userData", data);
  };

  return (
    <>
      <Model
        show={show}
        handleClose={handleClose}
        isEdit={isEdit}
        addUserData={addUserData}
      />
      <UserList
        userData={userData}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;

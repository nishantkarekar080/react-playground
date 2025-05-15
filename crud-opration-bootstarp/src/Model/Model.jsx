import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Model({ show, handleClose, isEdit, addUserData }) {
  const [formData, setformData] = useState({
    name: "",
    lastName: "",
    email: "",
    gender: "",
    hobby: [
      {
        id: 1,
        hobbyName: "cricket",
        checked: false,
      },
      {
        id: 2,
        hobbyName: "reading",
        checked: false,
      },
      {
        id: 3,
        hobbyName: "coding",
        checked: false,
      },
    ],
    description: "",
  });

  const handleSave = () => {};

  const handleAddData = () => {
    // addUserData(formData);
    handleClose();
  };

  const handleChange = (e) => {
    const { type, name, value, checked, id } = e.target;

    if (type === "radio") {
      let selectedGender = "";
      if (id === "Male") selectedGender = "Male";
      else if (id === "Female") selectedGender = "Female";

      setformData((prev) => ({ ...prev, gender: selectedGender }));
    } else if (type === "checkbox") {
      const updatedBox = formData.hobby.map((hobby) =>
        hobby.hobbyName === name ? { ...hobby, checked: checked } : hobby
      );
      setformData((prev) => ({ ...prev, hobby: updatedBox }));
    } else {
      setformData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? "Edit User Data" : "Add User Data"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Enter Name"
                value={formData.lastName}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="name"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                id="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />

              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                id="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {formData.hobby.map((item) => (
                <Form.Check
                  key={item.id}
                  type="checkbox"
                  label={item.hobbyName}
                  name={item.hobbyName}
                  id={item.id}
                  // checked={item.checked}
                />
              ))}
            </Form.Group>

            <Form.Group
              className="mb-3"
              name="name"
              controlId="exampleForm.ControlTextarea1"
              value={formData.description}
              onChange={handleChange}
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={isEdit ? handleSave : handleAddData}
          >
            {isEdit ? "Edit" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;

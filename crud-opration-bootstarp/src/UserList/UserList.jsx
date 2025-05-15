import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function UserList({ handleAdd, handleEdit, handleDelete, userData }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {/* {Array.from(
            new Set(userData.flatMap((item) => Object.keys(item)))
          ).map((item) => (
            <th key={item}>{item}</th>
          ))} */}
          <th>name</th>
          <th>lastname</th>
          <th>email</th>
          <th>gender</th>
          <th>gender</th>
          <th>hobby</th>
          <th>description</th>
          <th>
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {userData.length ? (
          <>
            {userData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>

                <td>
                  {item.hobby.map((item) => (
                    <div key={item.id}>
                      {item.checked && <li>{item.hobbyName}</li>}
                    </div>
                  ))}
                </td>
                <td>{item.description}</td>
                <td>
                  <Button variant="success" onClick={() => handleEdit(item)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </>
        ) : (
          <p style={{ color: "black", textWrap: "nowrap" }}>
            Data Not founded!!
          </p>
        )}
      </tbody>
    </Table>
  );
}

export default UserList;

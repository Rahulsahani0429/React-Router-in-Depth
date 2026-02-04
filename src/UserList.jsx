import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Aman", email: "aman@gmail.com" },
    { id: 3, name: "Neha", email: "neha@gmail.com" },
  ]);

  return (
    <div>
      <h2>User List</h2>

      {users.map((item) => (
        <div key={item.id}>
          <p>
            {" "}
            {/* <Link to={"/users/" + item.id}>{item.name}</Link> */}
            // this is best way to define id in link
            <Link to={`/users/"${item.id}`}>{item.name}</Link>
          </p>
          <p> {item.email}</p>
        </div>
      ))}

      <h2>User List with name and URL</h2>

      {users.map((item) => (
        <div key={item.id}>
          <p>
            {" "}
            <Link to={"/users/" + item.id + "/" + item.name}>{item.name}</Link>
          </p>
          <p> {item.email}</p>
        </div>
      ))}
    </div>
  );
}

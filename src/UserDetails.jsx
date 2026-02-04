import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UserDetails() {
  const userid = useParams();
  return (
    <div>
      <h1>user Details:{userid.id}</h1>
      <h1>
        <Link to="/users">back</Link>
      </h1>
    </div>
  );
}

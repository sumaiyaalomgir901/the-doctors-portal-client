import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState();
  const handleAdminEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://desolate-harbor-16717.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.preventDefault();
  };

  return (
    <div>
      <h4>Make an admin</h4>
      <form onSubmit={handleAdminSubmit} className="form">
        <input
          onBlur={handleAdminEmail}
          className="w-50 py-2 ps-3 me-2 rounded border-bottom-0 border-top-0 border-end-0"
          style={{
            backgroundColor: "#EEEEEF",
            borderLeft: "2px solid #12d0d5",
          }}
          placeholder="admin email"
          type="email"
          name="email"
        />
        <Button
          type="submit"
          className="exception-btn w-25 px-0 fw-bold rounded"
        >
          Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;

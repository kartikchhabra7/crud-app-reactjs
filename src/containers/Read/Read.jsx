import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Read.css";
import Button from "../../components/common/Button/Button";

function Read() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setProfile(localStorage.getItem("profile"));
  }, [id]);


  return (
    <>
      <div className="read-main">
        <h1 className="text-center">Read Form</h1>
        <div className="container create-container">
          <div className="row mb-4">
            <div className="col">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  readOnly
                  className="form-control"
                  type="text"
                  placeholder="Enter name"
                />
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  readOnly
                  className="form-control"
                  type="text"
                  placeholder="Enter email"
                />
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <div className="form-group">
                <label htmlFor="profile">Profile</label>
                <input
                  id="profile"
                  name="profile"
                  value={profile}
                  readOnly
                  className="form-control"
                  type="text"
                  placeholder="Enter Your Profile"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Button text="Back" onClick={() => navigate("/show")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Read;

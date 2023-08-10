import React, { useEffect, useState } from "react";
import "./Edit.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { validateschema } from "../../utils/helper/validation";
import { editApiData } from "../../services/api/editApiData";
import Button from "../../components/common/Button/Button";

function Edit() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
    setConfirmPassword(localStorage.getItem("confirmPassword"));
    setProfile(localStorage.getItem("profile"));
  }, []);

  async function dataSubmit(values) {
    try {
      await editApiData(
        id,
        values.name,
        values.email,
        values.password,
        values.confirmPassword,
        values.profile
      );
      navigate("/show");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="edit-main">
        <Formik
          initialValues={{
            name,
            email,
            password,
            confirmPassword,
            profile,
          }}
          validationSchema={validateschema}
          onSubmit={dataSubmit}
        >
          <Form>
            <h1 className="text-center">Update Form</h1>
            <div className="container create-container">
              <div className="row mb-4">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                      id="name"
                      name="name"
                      className="form-control"
                      type="text"
                      placeholder="Enter name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      id="email"
                      name="email"
                      className="form-control"
                      type="text"
                      placeholder="Enter email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      id="password"
                      name="password"
                      className="form-control"
                      type="password"
                      placeholder="Enter Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control"
                      type="password"
                      placeholder="Enter Confirm Password"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="profile">Profile</label>
                    <Field
                      id="profile"
                      name="profile"
                      className="form-control"
                      type="text"
                      placeholder="Enter Your Profile"
                    />
                    <ErrorMessage
                      name="profile"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <Button text="UPDATE" type="submit" />

                  <span className="mx-5">
                  <Button
                    text="BACK"
                    type="button"
                    onClick={() => navigate(-1)}
                  />
                  </span>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Edit;

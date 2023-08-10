import React, { useState } from "react";
import "./Create.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { postApiData } from "../../services/api/postApiData";
import { useNavigate } from "react-router-dom";
import { validateschema } from "../../utils/helper/validation";
import Button from "../../components/common/Button/Button";

function Create() {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState("");
  async function dataSubmit(values) {
    try {
      const { name, email, password, confirmPassword, profile } = values;
      const data = await postApiData(
        name,
        email,
        password,
        confirmPassword,
        profile
      );
      if (data) {
        console.log(data);
        navigate("/show");
      } else {
        throw new Error("failed");
      }
    } catch (error) {
      console.log(error);
      setHasError(error);
    }
  }
  if (hasError) {
    return (
      <div>
        <h1 className="text-center">
          {hasError.name}: Failed to fetch check apiEndPoints
        </h1>
        <div className="reload-button">
          <Button text="RELOAD" onClick={() => window.location.reload(true)} />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="create-main">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            profile: "",
          }}
          validationSchema={validateschema}
          onSubmit={dataSubmit}
        >
          <Form>
            <h1 className="text-center">Create Form</h1>
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
                  <Button text="SUBMIT" type="submit" />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Create;

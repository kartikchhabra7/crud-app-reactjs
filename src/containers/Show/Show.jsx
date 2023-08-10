import React, { useState, useEffect } from "react";
import "./Show.css";
import { getApiData } from "../../services/api/getApiData";
import { deleteApiData } from "../../services/api/deleteApiData";
import { Link } from "react-router-dom";
import { EDIT, READ } from "../../utils/constants/routes";
import DeleteModal from "../../components/modal/DeleteModal/DeleteModal";
// import { showErrorNotification } from "../../components/notification/NotificationService";
import Toaster from "../../components/notification/Toaster";
import Loading from "../../components/loader/Loading";

function Show() {
  const [apiData, setApiData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasModal, setHasModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const data = await getApiData();
      setApiData(data);
    } catch (error) {
      setIsError(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1 * 1000);
    }
  }

  if (isError) {
    return (
      <div>
        <h1>
          {isError.name} {isError.message} -- failed to fetching
        </h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  async function deleteData(id) {
    try {
      await deleteApiData(id);
      setApiData((prevData) => prevData.filter((item) => item.id !== id));
      modalClose();

      // showErrorNotification("data deleted"); // called this function in the DeleteModal file, and we can also call Toaster in this function; both will work.
    } catch (error) {
      console.log(error);
    }
  }

  function setDataToLocalStorage(
    id,
    name,
    email,
    password,
    confirmPassword,
    profile
  ) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
    localStorage.setItem("profile", profile);
  }

  function modalOpen(id) {
    setDeleteItemId(id);
    setHasModal(true);
  }

  function modalClose() {
    setHasModal(false);
  }

  return (
    <>
      <div className="row mt-4 show-main">
        <div className="col-md-12">
          <table className="table table-border text-center table-striped table-hover table-dark border-light">
            <thead className="table table-dark">
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">USER-ID</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PASSWORD</th>
                <th scope="col">CONFIRMPASSWORD</th>
                <th scope="col">PROFILE</th>
                <th scope="col" colSpan={3}>
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody className="table-dark">
              {apiData.map((value, index) => (
                <tr key={value.id}>
                  <td>{index + 1}</td>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.password}</td>
                  <td>{value.confirmPassword}</td>
                  <td>{value.profile}</td>
                  <td>
                    <Link to={READ}>
                      <button
                        className="btn btn-secondary"
                        onClick={() =>
                          setDataToLocalStorage(
                            value.id,
                            value.name,
                            value.email,
                            value.password,
                            value.confirmPassword,
                            value.profile
                          )
                        }
                      >
                        <i className="fa-regular fa-eye fa-beat-fade"></i>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link to={EDIT}>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          setDataToLocalStorage(
                            value.id,
                            value.name,
                            value.email,
                            value.password,
                            value.confirmPassword,
                            value.profile
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => modalOpen(value.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {hasModal && (
        <DeleteModal
          modalClose={modalClose}
          deleteData={() => deleteData(deleteItemId)}
        />
      )}
      <Toaster />
    </>
  );
}

export default Show;

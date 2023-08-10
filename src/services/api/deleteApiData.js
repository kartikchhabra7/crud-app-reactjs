import { FAILED_TO_DELETE_DATA_FROM_API } from "../../utils/constants/apiErrorMessage";

export async function deleteApiData(id) {
  try {
    const API_URL = `https://${process.env.REACT_APP_SECRET_KEY}.mockapi.io/crud-app/${id}`;
    const response = await fetch(API_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(FAILED_TO_DELETE_DATA_FROM_API);
    }
  } catch (error) {
    console.log(error);
    throw new Error(FAILED_TO_DELETE_DATA_FROM_API);
  }
}

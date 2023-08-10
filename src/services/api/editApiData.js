import { FAILED_TO_EDIT_DATA_FROM_API } from "../../utils/constants/apiErrorMessage";
export async function editApiData(
  id,
  name,
  email,
  password,
  confirmPassword,
  profile
) {
  try {
    const API_URL = `https://${process.env.REACT_APP_SECRET_KEY}.mockapi.io/crud-app/${id}`;
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
        profile,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(FAILED_TO_EDIT_DATA_FROM_API);
    }
  } catch (error) {
    console.log(error);
    throw new Error(FAILED_TO_EDIT_DATA_FROM_API);
  }
}

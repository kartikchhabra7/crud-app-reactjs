import { ERROR_MESSAGE_NETWORK } from "../../utils/constants/apiErrorMessage";

export async function getApiData() {
  try {
    const API_URL = `https://${process.env.REACT_APP_SECRET_KEY}.mockapi.io/crud-app`;
    const response = await fetch(API_URL);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(ERROR_MESSAGE_NETWORK, response.status);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

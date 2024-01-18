import axios from "axios";
import Swal from "sweetalert2";

const apiRequest = async (method, endpoint, data = null) => {
  try {
    const baseURL = "https://hr.lamptechs.com/api/v1";

    const sessionUser = JSON.parse(sessionStorage.getItem("user"));
    const headers = {
      Authorization: `Bearer ${sessionUser?.access_token}`,
    };
    method = method.toLowerCase();
    const response = await axios({
      method,
      url: `${baseURL}${endpoint}`,
      data: data,
      headers,
    });

    return response.data;
  } catch (error) {
    // Swal.fire(
    //   "Error!",
    //   error?.response?.data?.message || error?.message,
    //   "error"
    // );
    throw new Error(error);
  }
};

export default apiRequest;

import axios from "axios";
import Swal from "sweetalert2";

const DeleteData = (row, url, callBack = null, obj = {}) => {
  const sessionUser = JSON.parse(sessionStorage.getItem("user"));
  const URL = "https://hr.lamptechs.com/api/v1" + url;

  Swal.fire({
    title: "Are you sure to delete?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .post(
          URL,
          {
            uuid: row.uuid,
            ...obj,
          },
          {
            headers: {
              Authorization: `Bearer ${sessionUser?.access_token}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            if (callBack) callBack();
            Swal.fire(
              "Successful",
              `Data is Deleted Successfully..!`,
              "success"
            );
          }
        })
        .catch((err) => {
          Swal.fire("Error!", err?.response?.data.message, "error");
        });
    }
  });
};

export default DeleteData;

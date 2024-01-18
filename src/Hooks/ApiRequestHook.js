import { useState } from "react";
import axios from "axios";

const useApiRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const HandleRequest = async (urlsAndMethods) => {
    setIsLoading(true);
    setError(null);

    urlsAndMethods.map(
      ({
        url,
        method = "GET",
        body = null,
        onSuccess = null,
        onError = null,
      }) => {
        if (!url) return;
        axios({
          method,
          url: "https://yaabi.lamptechs.com/api/v1" + url,
          data: body,
        })
          .then((response) => {
            if (onSuccess) onSuccess(response);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            if (onError) onError(err);

            setError(
              err?.response?.data?.message ||
                err?.response?.data?.error[0] ||
                err.message + " - Something went wrong!"
            );
          });
      }
    );
  };

  return { isLoading, error, HandleRequest };
};

export default useApiRequest;

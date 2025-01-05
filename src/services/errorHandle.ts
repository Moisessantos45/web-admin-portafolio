import showToastNotification from "./toastify";
import axios from "axios";

const ErrorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response && error.response.data && error.response.data.msg) {
      const msg = error.response.data.msg;
      showToastNotification(msg, false);
      return;
    } else if (error.message) {
      showToastNotification(error.message, false);
      return;
    }
    showToastNotification("Error desconocido", false);
  }
};

export default ErrorHandler;

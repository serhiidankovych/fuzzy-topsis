import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToastMessage = (message, typeMessage) => {
  let toastOptions = {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 3000,
    style: {
      background: "black",
      color: "#f0f0f0",
    },
  };

  switch (typeMessage) {
    case "success":
      toast.success(message, toastOptions);
      break;
    case "error":
      toast.error(message, toastOptions);
      break;
    case "warning":
      toast.warn(message, toastOptions);
      break;
    default:
      toast(message, toastOptions);
  }
};

export { showToastMessage };

import { useEffect, useState } from "react";

const Notification = () => {
  const [toastClosed, setToastClosed] = useState(false);

  const closeToast = () => {
    setToastClosed(true);
  };

  useEffect(() => {
    const toastCloseBtn = document.querySelector("[data-toast-close]");

    const toastCloseFunc = () => {
      setToastClosed(true);
    };

    if (toastCloseBtn) {
      toastCloseBtn.addEventListener("click", toastCloseFunc);
    }

    return () => {
      if (toastCloseBtn) {
        toastCloseBtn.removeEventListener("click", toastCloseFunc);
      }
    };
  }, []);
  return (
    <div
      className={`notification-toast${toastClosed ? " closed" : ""}`}
      data-toast
    >
      <button className="toast-close-btn" data-toast-close>
        <ion-icon name="close-outline" />
      </button>
      <div className="toast-banner">
        <img
          src={require("../../assets/images/products/jewellery-1.jpg")}
          alt="Rose Gold Earrings"
          width={80}
          height={70}
        />
      </div>
      <div className="toast-detail">
        <p className="toast-message">Someone in new just bought</p>
        <p className="toast-title">Rose Gold Earrings</p>
        <p className="toast-meta">
          <time dateTime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>
  );
};
export default Notification;

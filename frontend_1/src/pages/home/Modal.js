import { useEffect, useState } from "react";

function Modal() {
  const [modalClosed, setModalClosed] = useState(false);

  const closeModal = () => {
    setModalClosed(true);
  };

  useEffect(() => {
    const modalCloseOverlay = document.querySelector("[data-modal-overlay]");
    const modalCloseBtn = document.querySelector("[data-modal-close]");

    const modalCloseFunc = () => {
      setModalClosed(true);
    };

    if (modalCloseOverlay && modalCloseBtn) {
      modalCloseOverlay.addEventListener("click", modalCloseFunc);
      modalCloseBtn.addEventListener("click", modalCloseFunc);
    }

    return () => {
      if (modalCloseOverlay && modalCloseBtn) {
        modalCloseOverlay.removeEventListener("click", modalCloseFunc);
        modalCloseBtn.removeEventListener("click", modalCloseFunc);
      }
    };
  }, []);
  return (
    <div className={`modal${modalClosed ? " closed" : ""}`} data-modal="">
      <div className="modal-close-overlay" data-modal-overlay="" />
      <div className="modal-content">
        <button className="modal-close-btn" data-modal-close="">
          <ion-icon name="close-outline" />
        </button>
        <div className="newsletter-img">
          <img
            src={require("../../assets/images/newsletter.png")}
            alt="subscribe newsletter"
            width={400}
            height={400}
          />
        </div>
        <div className="newsletter">
          <form action="#">
            <div className="newsletter-header">
              <h3 className="newsletter-title">Subscribe Newsletter.</h3>
              <p className="newsletter-desc">
                Subscribe the <b>Anon</b> to get latest products and discount
                update.
              </p>
            </div>
            <input
              type="email"
              name="email"
              className="email-field"
              placeholder="Email Address"
              required=""
            />
            <button type="submit" className="btn-newsletter">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Modal;

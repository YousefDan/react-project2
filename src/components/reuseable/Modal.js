import { Fragment } from "react";
import reactDom from "react-dom";
import "./modal.css";
import Button from "./Button";

//OverLay Component For Modal Portal
const Overlay = ({ onResetError }) => {
  return <div onClick={onResetError} className="overlay-modal"></div>;
};
//Modal Box Component For Modal Portal
const ModalBox = ({ onResetError, errors }) => {
  return (
    <div className="modal-box rounded">
      <header className="bg-danger rounded-top p-2 text-white">
        <h2> {errors.errorTitle} </h2>
      </header>
      <div className="p-2">
        <p> {errors.errorMessage} </p>
      </div>
      <div className="text-end">
        <Button onClick={onResetError} className="btn btn-success m-2">
          OK
        </Button>
      </div>
    </div>
  );
};
//Modal
const Modal = ({ errors, onResetError }) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Overlay onResetError={onResetError} />,
        document.getElementById("overlays-root")
      )}
      {reactDom.createPortal(
        <ModalBox errors={errors} onResetError={onResetError} />,
        document.getElementById("overlays-root")
      )}
    </Fragment>
  );
};

export default Modal;

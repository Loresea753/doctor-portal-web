import React from "react";
import { useTranslation } from "react-i18next";
import {
  IoInformationCircleOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
function Modal_Global_Notification(props) {
  const { t } = useTranslation();
  const save = () => {
    console.log("click save");
  };
  return (
    <div>
      <div
        className="modal fade"
        id={props.target}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0 my-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body border-0 text-center">
              {props.type === "confirm" ? (
                <IoHelpCircleOutline size={100} color="#002d56" />
              ) : props.type === "success" ? (
                <IoCheckmarkCircleOutline size={100} color="#28a745" />
              ) : props.type === "error" ? (
                <IoCloseCircleOutline size={100} color="#dc3545" />
              ) : (
                <IoInformationCircleOutline size={100} color="#ffc107" />
              )}
              <p className="mt-3">{props.children}</p>
            </div>
            <div className="modal-footer border-0 d-flex justify-content-center">
              {props.type === "confirm" ? (
                <>
                  <button
                    type="button"
                    className="btn button-white"
                    data-bs-dismiss="modal"
                  >
                    {t("button.Cancel")}
                  </button>
                  <button
                    type="button"
                    className="btn button-blue"
                    onClick={props.handle}
                  >
                    {t("button.Confirm")}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn button-white"
                  data-bs-dismiss="modal"
                >
                  {t("button.Close")}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal_Global_Notification;

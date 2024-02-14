import { createContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Form_Select from "../select/Form_Select";
import { useTranslation } from "react-i18next";
import Doctor_List_Specialty from "./doctor_list_components/Doctor_List_Specialty";
import Doctor_List_File_Upload from "./doctor_list_components/Doctor_List_File_Upload";
import Doctor_List_Private_Info from "./doctor_list_components/Doctor_List_Private_Info";
import { Modal } from "bootstrap";
import $ from "jquery";
import Modal_Global_Notification from "../modal/Modal_Global_Notification";
const doctor_list_context = createContext(null);

function Doctor_List_Create() {
  const inittialPrivateInfo = {
    license_number: "",
    thaiTitle: "",
    thaiFirstName: "",
    thaiLastName: "",
    englishTitle: "",
    englishFirstName: "",
    englishLastName: "",
    phoneNumber: "",
  };
  const [formPrivate, setFormPrivate] = useState(inittialPrivateInfo);
  const [formSpecialty, setFormSpecialty] = useState([]);
  const [formFileList, setFormFileList] = useState([]);
  const [allData, setAllData] = useState([]);

  const { t } = useTranslation();
  const formRef = useRef(null);

  useEffect(() => {
    console.log(allData);
  }, [allData]);

  const save = () => {
    setAllData({
      formFileList,
      formSpecialty,
      ...formPrivate,
    });

    hideConfirmModal();
    console.log("save");
  };

  const hideConfirmModal = () => {
    let modal = Modal.getOrCreateInstance("#saveModal");
    modal.hide();
  };

  const showConfirmModal = () => {
    let modal = Modal.getOrCreateInstance("#saveModal");
    modal.show();
  };

  const handleScroll = () => {
    const form = $(formRef.current);

    let invalidInput = form.find(":invalid").toArray();
    // console.log(invalidInput.length);

    if (invalidInput.length > 0) {
      invalidInput[0].focus();
      $(invalidInput[0]).addClass("is-invalid");
      window.scrollTo(
        window.scrollX,
        invalidInput[0].getBoundingClientRect().top - 100 + window.scrollY
      );
    }
  };

  const handleSubmit = (form) => {
    if (!form.checkValidity()) {
      let inputList = $(form).find(":invalid").toArray();
      inputList.forEach((input) =>
        $(input).parent().children("*[class*=form]").addClass("is-invalid")
      );
      if (!formFileList || formFileList.length === 0) {
        $("#card-upload").addClass("border-danger");
        $("#cvv img ").remove();
        $("#cvv").append(
          $("<img>", {
            src: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='20' height='20' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e",
            alt: "",
          })
        );
      }
      handleScroll();
    } else {
      showConfirmModal();
    }
  };

  return (
    <div className="container mb-5 mt-3">
      <div className="card">
        <div className="card-body w-100 d-flex flex-column gap-4">
          <div className="border border-0 button-blue p-2 fw-normal fs-6 ">
            {t("Urgent_Doctor.DoctorUrgent")} &gt;{" "}
            {t("Urgent_Doctor.DoctorUrgentDetail")}
          </div>

          <form
            className="card needs-validation"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e.target);
            }}
            ref={formRef}
            noValidate
          >
            <div className="card-body me-0 ">
              <doctor_list_context.Provider
                value={{
                  formPrivate,
                  setFormPrivate,
                  formSpecialty,
                  setFormSpecialty,
                  formFileList,
                  setFormFileList,
                }}
              >
                <div className="row">
                  <div className="col-md-12">
                    <b className="fs-4">{t("Urgent_Doctor.DoctorUrgent")}</b>
                  </div>
                  <Doctor_List_Private_Info />
                </div>

                <div className="row my-3">
                  <div className="col-lg-6">
                    <Doctor_List_Specialty />
                  </div>
                  <div className="col-lg-6 mt-lg-0 mt-3 ">
                    <Doctor_List_File_Upload />
                  </div>
                </div>
              </doctor_list_context.Provider>
              <hr />
              <div className="row d-flex justify-content-around mt-3">
                <div className="col-auto d-flex gap-2">
                  <Link to={"/"}>
                    <button className="btn button-while">
                      {t("button.Back")}
                    </button>
                  </Link>

                  <button className="btn button-blue" type="submit">
                    {" "}
                    {t("button.Save")}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal_Global_Notification
        handle={save}
        type="confirm"
        target="saveModal"
      >
        ท่านต้องการส่งข้อมูลใช่หรือไม่
      </Modal_Global_Notification>
    </div>
  );
}

export { doctor_list_context };
export default Doctor_List_Create;

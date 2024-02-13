import React, { useContext, useEffect, useRef, useState } from "react";
import Doctor_List_Select_Specialty from "./Doctor_List_Select_Specialty";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import {doctor_list_context} from "../Doctor_List_Create";
import { useTranslation } from "react-i18next";
import { Tooltip } from "bootstrap";
import { renderToString } from "react-dom/server";
import { FiAlertCircle } from "react-icons/fi";
import $ from "jquery";
function Form_Specialty_Info() {
  const tooltipsRef = useRef();
  const { formSpecialty, setFormSpecialty } = useContext(doctor_list_context);
  const { t } = useTranslation();

  const [Divs, setDivs] = useState([
    { id: 0, html: <Doctor_List_Select_Specialty id={0} /> },
  ]);

  const handleValid = (e) => {
    if (e.target.tagName == "INPUT" && e.target.value !== "") {
      $(
        e.target.type === "radio"
          ? "input[name='" + e.target.name + "']"
          : e.target
      ).removeClass("is-invalid");
    } else {
      $(e.target).removeClass("is-invalid");
    }
  };

  const handleRemoveDiv = (id) => {
    const selects = [...formSpecialty];
    let select = selects.filter((item) => item.id !== id);
    setFormSpecialty(select);
    const div = [...Divs];
    let removedDiv = div.filter((item, ind) => {
      return item.id !== id;
    });
    setDivs(removedDiv);
  };

  const handleAddDiv = (id) => {
    setDivs([
      ...Divs,
      {
        id: id,
        html: <Doctor_List_Select_Specialty id={id} />,
      },
    ]);
  };

  const handleChange = (e) => {
    setFromNews(e.value);
    // handleValid(e);
  };

  useEffect(() => {
    let tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    let tooltipList = tooltipTriggerList.map(
      (tooltip) =>
        new Tooltip(tooltip, {
          trigger: "hover focus ",
        })
    );
  }, [Divs]);

  useEffect(() => {});
  return (
    <>
      <div className="row">
        <div className="col fw-semibold">
          <p>
            {t("form.title_specialty_n_subspecialty")}
            {/* สาขาวิชา (Specialty) และอนุสาขา (Sub-Specialty){" "} */}
            <span className="text-danger">*</span>{" "}
            <span
              tabIndex="0"
              ref={tooltipsRef}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-html="true"
              data-bs-title={renderToString(
                <div className="m-2">
                  <b>คำแนะนำ</b>
                  <div className="m-3 text-start">
                    <p>ระบุสาขาวิชาและอนุสาขาเรียงตามความชำนาญของท่าน</p>
                  </div>
                </div>
              )}
            >
              <FiAlertCircle className="icon" />
            </span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <label htmlFor="">{t("form.specialty")}</label>
          {/* <label htmlFor="">สาขาวิชา (Specialty)</label> */}
        </div>
        <div className="col-5">
          <label htmlFor="">{t("form.subspecialty")}</label>
          {/* <label htmlFor="">อนุสาขา (Sub-Specialty)</label> */}
        </div>
      </div>
      {Divs.map((inputDiv, index) => (
        <React.Fragment key={inputDiv.id}>
          <div className="row align-items-center mt-3 gx-3">
            {inputDiv.html}

            <div className="col-1 d-flex justify-content-between  ">
              {Divs.length > 1 ? (
                <RiDeleteBinLine
                  size={20}
                  role="button"
                  className="button-delete"
                  onClick={(e) => handleRemoveDiv(inputDiv.id)}
                />
              ) : (
                <></>
              )}
              {Divs.length - 1 == index ? (
                <IoAddCircleOutline
                  size={20}
                  role="button"
                  className="button-add"
                  onClick={(e) => handleAddDiv(inputDiv.id + 1)}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default Form_Specialty_Info;

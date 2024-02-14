import React, { useContext, useEffect } from "react";
import Form_Select from "../../select/Form_Select";
import { useTranslation } from "react-i18next";
import { doctor_list_context } from "../Doctor_List_Create";
import $ from "jquery";
function Doctor_List_Private_info() {
  const { t } = useTranslation();
  const { formPrivate, setFormPrivate } = useContext(doctor_list_context);
  const handleValid = (e) => {
    if (e?.target?.tagName == "INPUT" && e?.target?.value !== "") {
      $(
        e.target.type === "radio"
          ? "input[name='" + e.target.name + "']"
          : e.target
      ).removeClass("is-invalid");
    } else {
      $(e.target).removeClass("is-invalid");
    }
  };

  const handleChange = (e, field) => {
    if (/^[A-Za-zก-๏]+$/.test(e.target.value) || e.target.value === "") {
      setFormPrivate((prevData) => ({
        ...prevData,
        [field]: e.target.value,
      }));
      handleValid(e);
    }
  };

  const handleChangeNumber = (e, field) => {
    let inputValue = e.target.value;
    if (/^[0-9]*$/.test(inputValue) || e.target.value === "") {
      setFormPrivate((prevData) => ({
        ...prevData,
        [field]: e.target.value,
      }));
      handleValid(e);
    }
  };

  const handleChangePhone = (e, field) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length <= 10) {
      value = value.replace(/(\d{3})(\d{0,3})(\d{0,4})/, (_, p1, p2, p3) =>
        p2 ? `${p1}-${p2}${p3 ? `-${p3}` : ""}` : p1
      );
    }
    setFormPrivate((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
    handleValid(e);
  };

  // const handleChangRegular = (e, field) => {
  //   console.log("test");
  //   setFormPrivate((prevData) => ({
  //     ...prevData,
  //     [field]: e.target.value,
  //   }));
  //   console.log(e.target.name);
  //   handleValid(e);
  // };

  const handleChangeSelect = (e, field) => {
    console.log("test");
    console.log(e.value);
    console.log(field);
    setFormPrivate((prevData) => ({
      ...prevData,
      [field]: e.value,
    }));
  };
  useEffect(() => {
    console.log(formPrivate);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-3 gy-3">
          <b>{t("form.personal_info")}</b>
        </div>
      </div>
      <div className="row align-items-center ">
        <div className="col-md-4 gy-3">
          <label htmlFor="medicalLicenseNumber">
            {t("form.license_number")} <span className="text-danger">*</span>
          </label>
        </div>
        <div className="col-md-7 gy-3">
          <div className="input-group z-0 ">
            <div className="w-25 ">
              <Form_Select
                option={[
                  {
                    value: "ว.",
                    label: "ว.",
                  },
                  {
                    value: "ผส.",
                    label: "ผส.",
                  },
                  {
                    value: "ท.",
                    label: "ท.",
                  },
                ]}
                name={"typeOfMedicalLicense"}
                search={false}
                required={true}
                handle={handleChangeSelect}
              />
            </div>
            <input
              className="w-75 form-control"
              type="text"
              id="medicalLicenseNumber"
              title="Please enter Alphabets."
              placeholder={t("form.license_number")}
              value={formPrivate?.license_number || ""}
              required
              onChange={(e) => handleChangeNumber(e, "license_number")}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 gy-3">
          <label htmlFor="thaiTitle">{t("form.title_thai")}</label>
          <br />
          <div className="mt-3">
            <Form_Select
              option={[
                {
                  label: "นพ.",
                  value: "นพ.",
                },
                {
                  label: "พญ.",
                  value: "พญ.",
                },
                {
                  label: "ทพ.",
                  value: "ทพ.",
                },
                {
                  label: "ทพญ.",
                  value: "ทพญ.",
                },
              ]}
              search={false}
              required={false}
              name={"thaiTitle"}
              handle={handleChangeSelect}
            />
          </div>
        </div>
        <div className="col-md-4 gy-3">
          <label htmlFor="thaiFirstName">
            {t("form.name_thai")} <span className="text-danger">*</span>
          </label>
          <br />
          <input
            className="form-control mt-3"
            value={formPrivate?.thaiFirstName || ""}
            onChange={(e) => handleChange(e, "thaiFirstName")}
            placeholder={t("form.name_thai")}
            pattern="[A-Za-zก-๏]+"
            title="กรุณากรอกแค่ตัวอักษรเท่านั้น"
            required
          />
        </div>
        <div className="col-md-4 gy-3">
          <label htmlFor="thaiLastName">
            {t("form.surname_thai")} <span className="text-danger">*</span>
          </label>
          <br />
          <input
            className="form-control mt-3 has-validation "
            type="text"
            id="thaiLastName"
            value={formPrivate?.thaiLastName || ""}
            placeholder={t("form.surname_thai")}
            onChange={(e) => handleChange(e, "thaiLastName")}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 gy-3">
          <label htmlFor="englishTitle">{t("form.title_eng")}</label>
          <br />
          <div className="mt-3">
            <Form_Select
              option={[
                {
                  value: "DR.",
                  label: "DR.",
                },
                {
                  value: "DDS.",
                  label: "DDS.",
                },
              ]}
              name={"englishTitle"}
              search={false}
              required={false}
              handle={handleChangeSelect}
            />
          </div>
        </div>
        <div className="col-md-4 gy-3">
          <label htmlFor="englishFirstName">
            {t("form.name_eng")} <span className="text-danger">*</span>
          </label>
          <br />
          <input
            className="form-control mt-3"
            type="text"
            id="englishFirstName"
            value={formPrivate?.englishFirstName || ""}
            placeholder={t("form.name_eng")}
            onChange={(e) => handleChange(e, "englishFirstName")}
            required
          />
        </div>
        <div className="col-md-4 gy-3">
          <label htmlFor="englishLastName">
            {t("form.surname_eng")} <span className="text-danger">*</span>
          </label>
          <br />
          <input
            className="form-control mt-3"
            type="text"
            id="englishLastName"
            value={formPrivate?.englishLastName || ""}
            placeholder={t("form.surname_eng")}
            onChange={(e) => handleChange(e, "englishLastName")}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 gy-3">
          <label htmlFor="phoneNumber">
            {t("form.phone")} <span className="text-danger">*</span>
          </label>
          <br />
          <input
            className="form-control mt-3"
            type="text"
            id="phoneNumber"
            value={formPrivate?.phoneNumber || ""}
            placeholder="xxx-xxx-xxxx"
            maxLength={12}
            onChange={(e) => handleChangePhone(e, "phoneNumber")}
            required
          />
        </div>
      </div>
    </>
  );
}

export default Doctor_List_Private_info;

import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import Form_Select from "../select/Form_Select";
import { useTranslation } from "react-i18next";
import Doctor_List_Specialty from "./doctor_list_components/Doctor_List_Specialty";

const doctor_list_context = createContext(null);

function Doctor_List_Create() {
  const [formSpecialty, setFormSpecialty] = useState([]);
  const { t } = useTranslation();
  return (
    <div className="container my-2 mt-4">
      <div className="card">
        <div className="card-body w-100 d-flex flex-column gap-4">
          <div className="border border-0 button-blue p-2 fw-normal fs-6 ">
            แพทย์เร่งด่วน &gt; รายละเอียดแพทย์เร่งด่วน
          </div>

          <div className="border border-2 pt-2 px-3 ">
            <div className="row d-flex justify-justify-content-between ">
              <div className="col-6">
                <b className="fs-4">รายละเอียดแพทย์เร่งด่วน</b>
              </div>
              <div className="row">
                <div className="col-3 gy-3">
                  <b>{t("form.personal_info")}</b>
                </div>
              </div>
              <div className="row align-items-center ">
                <div className="col-4 gy-3">
                  <label htmlFor="medicalLicenseNumber">
                    {t("form.license_number")}{" "}
                    <span className="text-danger">*</span>
                  </label>
                </div>
                <div className="col-7 gy-3">
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
                        // handle={handleChangeSelect}
                      />
                    </div>
                    <input
                      className="w-75 form-control"
                      type="text"
                      // pattern="[A-Za-z ]+"
                      id="medicalLicenseNumber"
                      title="Please enter Alphabets."
                      // style={{"width":"68%"}}
                      placeholder={t("form.license_number")}
                      // value={formPrivate?.medicalLicenseNumber || ""}
                      required
                      // onChange={(e) => handleChangeNumber(e, "medicalLicenseNumber")}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4 gy-3">
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
                      // handle={handleChangeSelect}
                    />
                  </div>
                </div>
                <div className="col-4 gy-3">
                  <label htmlFor="thaiFirstName">
                    {t("form.name_thai")} <span className="text-danger">*</span>
                  </label>
                  <br />
                  <input
                    className="form-control mt-3"
                    // value={formPrivate?.thaiFirstName || ""}
                    // onChange={(e) => handleChange(e, "thaiFirstName")}
                    placeholder={t("form.name_thai")}
                    pattern="[A-Za-zก-๏]+"
                    title="กรุณากรอกแค่ตัวอักษรเท่านั้น"
                    required
                    // style={{formPrivate?.thaiFirstName === "" ? "color-red" : ""}}
                  />
                </div>
                <div className="col-4 gy-3">
                  <label htmlFor="thaiLastName">
                    {t("form.surname_thai")}{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <br />
                  <input
                    className="form-control mt-3 has-validation "
                    type="text"
                    id="thaiLastName"
                    // value={formPrivate?.thaiLastName || ""}
                    placeholder={t("form.surname_thai")}
                    // onChange={(e) => handleChange(e, "thaiLastName")}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-4 gy-3">
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
                      // handle={handleChangeSelect}
                    />
                  </div>
                  {/* <select
            className="form-select mt-3"
            id="englishTitle"
            value={formPrivate?.englishTitle || ""}
            onChange={(e) => handleChangRegular(e, "englishTitle")}
            >
            <option value="" disabled selected hidden>
              {t("form.notSpecified")}
            </option>
            <option value="DR.">DR.</option>
            <option value="DDS.">DDS.</option>
          </select> */}
                </div>
                <div className="col-4 gy-3">
                  <label htmlFor="englishFirstName">
                    {t("form.name_eng")} <span className="text-danger">*</span>
                  </label>
                  <br />
                  <input
                    className="form-control mt-3"
                    type="text"
                    id="englishFirstName"
                    // value={formPrivate?.englishFirstName || ""}
                    placeholder={t("form.name_eng")}
                    // onChange={(e) => handleChange(e, "englishFirstName")}
                    required
                  />
                </div>
                <div className="col-4 gy-3">
                  <label htmlFor="englishLastName">
                    {t("form.surname_eng")}{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <br />
                  <input
                    className="form-control mt-3"
                    type="text"
                    id="englishLastName"
                    // value={formPrivate?.englishLastName || ""}
                    placeholder={t("form.surname_eng")}
                    // onChange={(e) => handleChange(e, "englishLastName")}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-4 gy-3">
                  <label htmlFor="phoneNumber">
                    {t("form.phone")} <span className="text-danger">*</span>
                  </label>
                  <br />
                  <input
                    className="form-control mt-3"
                    type="text"
                    id="phoneNumber"
                    // value={formPrivate?.phoneNumber || ""}
                    placeholder="xxx-xxx-xxxx"
                    maxLength={12}
                    // onChange={(e) => handleChangePhone(e, "phoneNumber")}
                    required
                  />
                </div>
              </div>
            </div>
            <doctor_list_context.Provider
              value={{
                formSpecialty,
                setFormSpecialty,
              }}
            >
              <div className="row">
                <div className="col-sm-7">
                  <Doctor_List_Specialty />
                </div>
              </div>
            </doctor_list_context.Provider>
          </div>
          <div>
            <Link to={"/"}>
              <button className="btn button-while">ย้อนกลับ</button>
            </Link>

            <button>บันทึก</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { doctor_list_context };
export default Doctor_List_Create;

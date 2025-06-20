import React, { createContext, useState, useEffect } from "react";
import Doctor_List_DataTable from "./doctor_list_components/Doctor_List_DataTable";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const testaa = createContext(null);
function Doctor_List_Container() {
  const { t } = useTranslation();

  const [data, setData] = useState([
    {
      name: "John Doe ",
      specialty: "Cardiology",
      subSpecialty: "Interventional Cardiology",
      createdAt: "2023-01-15",
    },
    {
      name: "Jane Smith",
      specialty: "Dermatology",
      subSpecialty: "Cosmetic Dermatology",
      createdAt: "2023-02-20",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
    {
      name: "xxxxx",
      specialty: "yyyyy",
      subSpecialty: "zzzz",
      createdAt: "ccccc0",
    },
  ]);

  return (
    <div className="container mb-5 mt-3">
      <div className="card">
        {/* <div className="card-header my-2">แพทเร่งด่วน</div> */}
        <div className="card-body d-flex flex-column gap-3">
          <div className="border border-0 button-blue p-2 fw-normal fs-6 ">
            {t("Urgent_Doctor.DoctorUrgent")}
          </div>
          <div className="card py-3 px-3  ">
            <div className="row d-flex justify-justify-content-between ">
              <div className="col-6">
                <b className="fs-4">{t("Urgent_Doctor.DoctorUrgent")}</b>
              </div>
              <div className="col-6 text-end ">
                <Link to={"/create"}>
                  <button className="btn btn-warning">
                    {t("Urgent_Doctor.AddInfo")}
                  </button>
                </Link>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <label htmlFor="">{t("Urgent_Doctor.SearchInfo")}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Urgent_Doctor.SearchAppFrom")}
                  // value={searchValue}
                  // onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-auto">
                <button className="btn button-blue ">
                  {t("button.Search")}
                </button>
              </div>
            </div>
            <div className="table-responsive-md  mt-3">
              <testaa.Provider value={{ data, setData }}>
                <Doctor_List_DataTable />
              </testaa.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { testaa };
export default Doctor_List_Container;

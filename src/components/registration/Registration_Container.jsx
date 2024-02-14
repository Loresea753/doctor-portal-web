import React from "react";
import Registration_DataTable from "./registration_components/Registration_DataTable";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Form_Select from "../select/Form_Select";
function Registration_Container() {
  const { t } = useTranslation();
  return (
    <div className="container mb-5 mt-3">
      <div className="card">
        {/* <div className="card-header my-2">แพทเร่งด่วน</div> */}
        <div className="card-body d-flex flex-column gap-3">
          <div className="border border-0 button-blue p-2 fw-normal fs-6 ">
            {t("Register.ApplicationList")}
          </div>
          <div className="card py-3 px-3  ">
            <div className="row d-flex justify-justify-content-between ">
              <div className="col-12">
                <b className="fs-4">{t("Register.ApplicationList")}</b>
              </div>
              {/* <div className="col-6 text-end ">
                <Link to={"/create"}>
                  <button className="btn button-yellow">
                    {t("Urgent_Doctor.AddInfo")}
                  </button>
                </Link>
              </div> */}
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <label htmlFor="">{t("Urgent_Doctor.SearchInfo")}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Urgent_Doctor.SearchAppFrom")}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="">{t("Register.Status")}</label>
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder={t("Urgent_Doctor.SearchAppFrom")}
                /> */}
                <Form_Select />
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-auto">
                <button className="btn button-blue ">
                  {t("button.Search")}
                </button>
              </div>
            </div>
            <div className="table-responsive-lg  mt-3">
              <Registration_DataTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration_Container;

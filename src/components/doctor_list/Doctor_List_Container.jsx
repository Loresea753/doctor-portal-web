import React from "react";
import Doctor_List_DataTable from "./doctor_list_components/Doctor_List_DataTable";
import { Link } from "react-router-dom";
function Doctor_List_Container() {
  return (
    <div className="container my-2 mt-4">
      <div className="card">
        {/* <div className="card-header my-2">แพทเร่งด่วน</div> */}
        <div className="card-body w-100 d-flex flex-column gap-3">
          <div className="border border-0 button-blue p-2 fw-normal fs-6 ">
            แพทย์เร่งด่วน
          </div>

          <div className="card pt-2 px-3 py-3 ">
            <div className="row d-flex justify-justify-content-between ">
              <div className="col-6">
                <b className="fs-4">แพทย์เร่งด่วน</b>
              </div>
              <div className="col-6 text-end ">
                <Link to={"/create"}>
                  <button className="btn button-yellow">เพิ่มข้อมูล</button>
                </Link>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-6">
                <label htmlFor="">ค้นหาข้อมูล</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ค้นหาข้อมูลใบสมัคร"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-auto">
                <button className="btn button-blue ">ค้นหาข้อมูล</button>
              </div>
            </div>
            <Doctor_List_DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor_List_Container;

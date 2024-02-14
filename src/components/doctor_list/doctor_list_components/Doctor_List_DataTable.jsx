import React, { useEffect, useRef, useState, useContext } from "react";
import DataTables from "datatables.net-bs5";
import { useTranslation } from "react-i18next";
import { testaa } from "../Doctor_List_Container";
function Doctor_List_DataTable() {
  const { t } = useTranslation();
  const tableRef = useRef(null);
  const { data } = useContext(testaa);

  useEffect(() => {
    const table = new DataTables(tableRef.current, {
      searching: false,
      paging: true,
      pagingType: "full_numbers",
    });
    return () => table.destroy();
  }, []);

  return (
    <>
      <table
        ref={tableRef}
        className="table table-striped table-bordered w-100 "
      >
        <thead>
          <tr>
            <th className="table-background align-middle text-center">
              {t("Urgent_Doctor.Name")}
            </th>
            <th className="table-background align-middle text-center">
              {t("Urgent_Doctor.Specialty")}
            </th>
            <th className="table-background align-middle text-center">
              {t("Urgent_Doctor.Subspecialty")}
            </th>
            <th className="table-background align-middle text-center">
              {t("Urgent_Doctor.DateStart")}
            </th>
            <th className="table-background align-middle text-center">
              {t("Urgent_Doctor.ManageInfo")}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index} className="text-center">
              <td>{data.name}</td>
              <td>{data.specialty}</td>
              <td>{data.subSpecialty}</td>
              <td>{data.createdAt}</td>
              <td>จัดการ</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Doctor_List_DataTable;

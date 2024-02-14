import React, { useEffect, useRef, useState } from "react";
import DataTables from "datatables.net-bs5";
import { useTranslation } from "react-i18next";
function Registration_DataTable() {
  const { t } = useTranslation();
  const tableRef = useRef(null);
  const [data, setData] = useState([
    {
      name: "John Doe",
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

  useEffect(() => {
    const table = new DataTables(tableRef.current, {
      searching: false,
      paging: true,
      pagingType: "full_numbers",
      ordering: false,
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
          <tr className="align-middle">
            <th className="table-background text-nowrap text-center">
              {t("Register.ApplicationNumber")}
            </th>
            <th className="table-background text-center">
              {t("Register.DateStart")}
            </th>
            <th className="table-background text-center">
              {t("Urgent_Doctor.Name")}
            </th>
            <th className="table-background text-nowrap text-center">
              {t("Register.Position")}
            </th>
            <th className="table-background text-center">
              {t("Urgent_Doctor.Specialty")}
            </th>
            <th className="table-background text-center">
              {t("Urgent_Doctor.Subspecialty")}
            </th>
            <th className="table-background text-nowrap text-center">
              {t("Register.Phone")}
            </th>
            <th className="table-background text-center">
              {t("Register.Status")}
            </th>
            <th className="table-background text-center">
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
              <td className="text-nowrap">{data.createdAt}</td>
              <td>จัดการ</td>
              <td>จัดการ</td>
              <td>จัดการ</td>
              <td>จัดการ</td>
              <td>จัดการ</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Registration_DataTable;

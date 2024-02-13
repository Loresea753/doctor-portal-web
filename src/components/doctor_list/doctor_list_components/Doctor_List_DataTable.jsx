import React, { useEffect, useRef, useState } from "react";
import DataTables from "datatables.net-bs5";
function Doctor_List_DataTable() {
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
    });
    return () => table.destroy();
  }, []);
  return (
    <>
      <table
        ref={tableRef}
        className="table table-responsive  table-striped table-bordered w-100 "
      >
        <thead>
          <tr>
            <th>ชื่อ-นามสกุล</th>
            <th>สาขาวิชา (Specialty)</th>
            <th>อนุสาขา (Sub-Specialty)</th>
            <th>วันที่สร้างข้อมูล</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
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

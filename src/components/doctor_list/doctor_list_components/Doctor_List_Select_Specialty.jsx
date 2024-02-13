import React, { useContext, useEffect, useState } from "react";
import { doctor_list_context } from "../Doctor_List_Create";
// import selectSpecialty from "../dataTxT/selectSpecialty.json";
import $ from "jquery";
import { useTranslation } from "react-i18next";
import Form_Select from "../../select/Form_Select";
function From_Select_Specialty({ id }) {
  const { t } = useTranslation();
  const { formSpecialty, setFormSpecialty } = useContext(doctor_list_context);

  const [valueSelect, setValueSelect] = useState({
    id: id,
    specialty: "",
    subSpecialty: "",
  });

  const handleChange = (e, field) => {
    if (field === "specialty" && valueSelect.specialty !== e.value) {
      setValueSelect({ ...valueSelect, specialty: e.value, subSpecialty: "" });
    } else {
      setValueSelect({ ...valueSelect, [field]: e.value });
    }
  };

  const handleChangeContext = (id) => {
    setFormSpecialty((form) =>
      form.map((i) => {
        return i.id == id
          ? {
              id: id,
              specialty: valueSelect.specialty,
              subSpecialty: valueSelect.subSpecialty,
            }
          : i;
      })
    );
  };

  useEffect(() => {
    setFormSpecialty([...formSpecialty, valueSelect]);
  }, []);

  useEffect(() => {
    handleChangeContext(id);
  }, [valueSelect]);

  return (
    <>
      <div className="col-5">
        <Form_Select
          option={[
            { label: "กุมารเวชศาสตร์", value: "กุมารเวชศาสตร์" },
            { label: "จักษุวิทยา", value: "จักษุวิทยา" },
            { label: "ศัลยศาสตร์", value: "ศัลยศาสตร์" },
            { label: "สูตินรีเวชศาสตร์", value: "สูตินรีเวชศาสตร์" },
            { label: "โสต ศอ นาสิกวิทยา", value: "โสต ศอ นาสิกวิทยา" },
            {
              label: "ศัลยศาสตร์กระดูกและข้อ",
              value: "ศัลยศาสตร์กระดูกและข้อ",
            },
            { label: "อายุรศาสตร์", value: "อายุรศาสตร์" },
          ]}
          name={"specialty"}
          required={true}
          search={false}
          handle={handleChange}
        />
      </div>
      <div className="col-6">
        <Form_Select
          disabled={valueSelect.specialty == ""}
          option={""}
          value={{
            label: valueSelect.subSpecialty,
            value: valueSelect.subSpecialty,
          }}
          name={"subSpecialty"}
          required={true}
          search={false}
          handle={handleChange}
        />
      </div>
    </>
  );
}

export default From_Select_Specialty;

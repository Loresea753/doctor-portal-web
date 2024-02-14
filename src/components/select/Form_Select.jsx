import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import $ from "jquery";

function Form_Select(props) {
  const [click, setClick] = useState(false);
  const selectRef = useRef(null);
  const { t } = useTranslation();
  const customClass = {
    control: () => {
      return `form-select w-100 m-0 p-0 ${
        props?.groupClass ? props?.groupClass : ""
      }`;
    },
    option: () => "m-0 p-1",
    // menu: () => "z-10",
  };

  $(selectRef).on("focus", function () {
    console.log($(selectRef));
  });

  // const handleChangeSelect = () => {
  //   // console.log("menu is opened");
  //   // setClick(false);
  //   return "#dc3545";
  // };

  const customStyles = {
    control: (base, state) => {
      return {
        ...base,
        border: "1px solid #dee2e6",

        "&:focus-within": {
          // borderColor: "#dc3545" ,
          borderColor: `${state.isFocused && click ? "#86b7fe" : "#dc3545"}`,
          outline: "0",
          boxShadow: `${
            state.isFocused && click
              ? "0 0 0 0.25rem rgba(13,110,253,.25)"
              : "0 0 0 0.25rem rgba(220, 53, 69,.25)"
          }`,
        },
        "&:hover": {},
      };
    },
    dropdownIndicator: () => ({ display: "block", opacity: 0 }),
  };

  const customComponent = {
    IndicatorSeparator: () => null,
  };

  const handleChange = (e) => {
    props?.handle(e, props.name);
  };

  return (
    <div
      onMouseDown={() => {
        setClick(true);
      }}
    >
      <Select
        ref={selectRef}
        styles={customStyles}
        classNames={customClass}
        components={customComponent}
        menuPortalTarget={document.body}
        options={props.option}
        placeholder={t("form.notSpecified")}
        value={props.value?.value == "" ? "" : props.value}
        onChange={handleChange}
        isSearchable={props.search}
        required={props.required}
        id={props.testName}
        isDisabled={props.disabled}
        onBlur={() => setClick(false)}
      />
    </div>
  );
}

export default Form_Select;

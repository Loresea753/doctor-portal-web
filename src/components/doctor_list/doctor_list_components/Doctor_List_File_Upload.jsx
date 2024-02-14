import React, { useState, useEffect, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { doctor_list_context } from "../Doctor_List_Create";
import $ from "jquery";
import { useTranslation } from "react-i18next";

function Form_Upload_File() {
  const [fileList, setFileList] = useState([]);
  const { formFileList, setFormFileList } = useContext(doctor_list_context);
  const { t } = useTranslation();
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: (files) => {
      setFormFileList([...fileList, ...files]);
      handleHasFile();
    },
    accept: {
      "image/*": [".png", ".jpg", ".gif", ".jpeg"],
      // "": "",
    },
  });

  const handleHasFile = () => {
    $("#card-upload").removeClass("border-danger");
    $("#cvv img").remove();
  };

  const handleDeleteFile = (e) => {
    const updatedList = [...formFileList];
    const deleted = updatedList.filter((file) => file.name !== e);
    setFormFileList(deleted);
  };
  const handleDowloadFile = (file) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="">
      <div id="cvv">{t("form.cv")} </div>
      <div>
        <div
          className="card cv mt-2 "
          {...getRootProps()}
          id="card-upload"
          onClick={(e) => e.stopPropagation}
        >
          <div className="card-body ">
            <div className="row">
              <input
                type="file"
                style={{ opacity: "0", height: "0px" }}
                required={formFileList.length <= 0}
              />
              <div className="col-8">
                <input {...getInputProps()} className="form-control" />
                <b className="text-card">Drag and drop files here </b>
                <p>Supported format : doc*,pdf,xls*,jpg,gif,png</p>
                <b className="text-card">Maximum size 5MB per file</b>
              </div>
              <div className=" col-4  align-items-center d-flex fs-6">
                <button type="button" className="button-upload text-nowrap">
                  <span className="button-browseFiles" onClick={open} required>
                    Browese Files
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {formFileList.length > 0 ? (
          <div className="card  mt-2">
            <div className="card-body">
              <ul className="list-group ">
                {formFileList.map((file, ind) => (
                  <li className="list-unstyled mt-1" key={ind}>
                    <div className="row g-3 align-items-center  ">
                      <div className="col-10">
                        <input
                          className="form-control "
                          type="text"
                          value={file.name}
                          name={file.name}
                          id=""
                          readOnly
                        />
                      </div>
                      <div className="col-2 d-flex justify-content-around ">
                        <IoCloudDownloadOutline
                          size={20}
                          className="button-add"
                          onClick={() => handleDowloadFile(file)}
                        />
                        <RiDeleteBinLine
                          size={20}
                          className="button-add"
                          onClick={() => handleDeleteFile(file.name)}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
}

export default Form_Upload_File;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbars/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "flag-icon-css/css/flag-icons.min.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import FooterBar from "./components/navbars/FooterBar";
import { Route, Routes } from "react-router-dom";
import Doctor_List_Container from "./components/doctor_list/Doctor_List_Container";
import Doctor_List_Create from "./components/doctor_list/Doctor_List_Create";
import Registration_Container from "./components/registration/Registration_Container";

function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<Doctor_List_Container />} />
        <Route path="/create" element={<Doctor_List_Create />} />
        <Route path="/register" element={<Registration_Container />} />
      </Routes>
      <FooterBar />
    </>
  );
}

export default App;

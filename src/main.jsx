import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "js-cookie";
// import "./index.css";

i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    // lng: Cookies.get("i18next") || "th",
    fallbackLng: "en",
    supportedLngs: ["th", "en"],
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    detection: {
      order: [
        "cookie",
        "navigator",
        "localStorage",
        "sessionStorage",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);

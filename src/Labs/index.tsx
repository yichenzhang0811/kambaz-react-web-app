import Lab1 from "./Lab1";
import Lab2 from "./Lab2/index";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import { Routes, Route, Navigate } from "react-router-dom";

export default function Labs() {
  return (
    <div>
      <h1>Made by Yichen Zhang </h1>
      <h1>
        {" "}
        You can find repository at{" "}
        <a href="https://github.com/yichenzhang0811/kambaz-react-web-app">
          here
        </a>
      </h1>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}

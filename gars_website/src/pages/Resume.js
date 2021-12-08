import React from "react";
import SinglePagePDFViewer from "./components/pdf/single-page";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import GustavoRodriguezSanteliz_SoftwareDeveloper from "../pdf/GustavoRodriguezSanteliz_SoftwareDeveloper.PDF";

export const Resume = ()=> {
  return (
    <div className="App">
      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={GustavoRodriguezSanteliz_SoftwareDeveloper} />
    </div>
  );
}
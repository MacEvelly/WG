import React from "react";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

const makePNG = () => {
  var designCanvas = document.getElementsByClassName("Canvas");
  var time = new Date().valueOf();
  var pngName = `M&M-custom-${time}.png`
  function renderError(error) {
    console.log(error);
  }

  function renderComplete(canvas) {
    let file  = canvas.toDataURL("image/png");
    var download = document.createElement('a');
    download.href = file;
    download.download = pngName; 
    download.click();
  }

  html2canvas(designCanvas[0], {
    timeout: 0,
    allowTaint: true,
    backgroundColor: null,
    height: designCanvas[0].offsetHeight,
    width: designCanvas[0].offsetWidth
  }).then(renderComplete).catch(renderError);

  console.log("click");
};
export const BtnMakePdf = () => (
  <div className="BTN" onClick={makePNG}>
    <b>Save Image</b>
  </div>
);

export const BtnBack = () => (
  <Link to="/" className="BTN">
    <b>Back</b>
  </Link>
);

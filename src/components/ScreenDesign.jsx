import React, { useState } from "react";
import { motion } from "framer-motion";
import { overlayMotion } from "../data/MotionVars";
import products from "../data/products";
import { BtnBack, BtnMakePdf } from "./Buttons";

function CheckBox({ name }) {
  const [Checked, setChecked] = useState(true);
  const makeVisiable = () => {
    const designs = document.querySelectorAll(`.${name}`)
    for (const design of designs) {
      design.style.display = Checked
      ? "none"
      : "block";
    }
        setChecked(!Checked);
  };
  return <input type="checkbox" checked={Checked} onChange={makeVisiable} />;
}

function ScreenDesign({ match }) {
  let chosen = Object.keys(products).find(
    (x) => products[x].sku === match.params.sku
  );
  const { folder, overlay, background, designs, id, fonts, colors } = products[
    chosen
  ];
  const designDiv = Object.keys(designs);

  const [nameInput, setNameInput] = useState("Name");
  const [currDesign, setCurrDesign] = useState(designDiv[0]);
  const [currSize, setCurrSize] = useState(45);
  const [currFont, setCurrFont] = useState(fonts[0]);
  const [currColor, setCurrColor] = useState(colors[0]);

  console.log(`${nameInput}_${currDesign}`);

  return (
    <motion.section {...overlayMotion} className="Design">
      <div>
        <div className="canvasHolder">
          <div className="Canvas" design={currDesign}>
            <img
              src={folder + id + background}
              alt="background"
              data-html2canvas-ignore
            />
            {currDesign &&
              designs[currDesign].map((i) => (
                <img
                  key={"img-white" + currDesign + i}
                  className={currDesign + i}
                  alt={`Design:${currDesign} number:${i} white background`}
                  src={`${folder}white/` + currDesign + i + ".png"}
                />
              ))}
              <div
              className="nameBox nameWhite"
              style={{
                fontFamily: `${currFont}, cursive`,
                fontSize: `${currSize}px`                
              }}
            >
              {nameInput}
            </div>
            {currDesign &&
              designs[currDesign].map((i) => (
                <img
                  key={"img" + currDesign + i}
                  className={currDesign + i}
                  alt={`Design:${currDesign} number:${i}`}
                  src={folder + currDesign + i + ".png"}
                />
              ))}
            <div
              className="nameBox"
              style={{
                fontFamily: `${currFont}, cursive`,
                fontSize: `${currSize}px`,
                color: currColor,
              }}
            >
              {nameInput}
            </div>
            <img
              src={folder + id + overlay}
              alt="overlay"
              data-html2canvas-ignore
            />
          </div>
        </div>
        <div className="designs">
          {designDiv.map((e, i) => (
            <div
              key={e + " BTN"}
              className={e + " BTN"}
              onClick={() => {
                setCurrDesign(designDiv[i]);
              }}
            >
              <img src={folder + e + ".png"} alt={`Design id:${e}`} />
            </div>
          ))}
        </div>
        <div className="options">
          {currDesign &&
            designs[currDesign].map((i) => (
              <div key={"trimmed_" + currDesign + i} className="BTN">
                <label>
                  <CheckBox name={currDesign + i} />
                  <img
                    src={folder + "trimmed_" + currDesign + i + ".png"}
                    alt={`design id:${currDesign + i}`}
                  />
                </label>
              </div>
            ))}
        </div>
        <div className="name">
          <div className="Input">
            <label>Name:</label>
            <input
              className="textBox"
              value={nameInput}
              onChange={(e) => {
                setNameInput(e.target.value);
              }}
            />
          </div>
          <div className="Size">
            <label>Size:</label>
            <input
              onChange={(e) => setCurrSize(e.target.value)}
              type="range"
              min="30"
              max="60"
              value={currSize}
              className="slider"
              id="myRange"
            />
          </div>
          <div className="Style">
            <label>Style:</label>
            <div className="fontBtns">
              {fonts.map((f, i) => (
                <div
                  key={`fontBtn${i}`}
                  className="BTN"
                  style={{ fontFamily: `${f}, cursive` }}
                  onClick={() => setCurrFont(f)}
                >
                  Font {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="Color">
            <label>Color:</label>
            <div className="fontColor">
              {colors.map((f) => (
                <div
                  key={`colors${f}`}
                  className="BTN"
                  style={{ backgroundColor: f }}
                  onClick={() => setCurrColor(f)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="buttonHolder">
          <BtnBack />
          <BtnMakePdf fileName={`${nameInput}_${currDesign}`} />
        </div>
      </div>
    </motion.section>
  );
}

export default ScreenDesign;

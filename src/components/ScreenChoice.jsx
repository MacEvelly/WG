import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { overlayMotion } from "../data/MotionVars";
import products from "../data/products";

function ScreenChoice() {
  let i = 0;
  const displayProducts = Object.keys(products).map((key) => {
    const { sku, title, introImg, folder } = products[key];
    const linkTo = /PH/gi.test(sku) ? "/" : `/design/${sku}`;
    return (
      <li key={`BTN_${i++}`}>
        <Link to={linkTo}>
          <b>{title}</b>
          <img src={folder + introImg} alt={title} />
        </Link>
      </li>
    );
  });

  return (
    <motion.section {...overlayMotion} className="Choice">
      <img className="Logo" alt="Logo" src="img/ux/MMLogo.svg" />
      <img className="Character" alt="Red MM" src="img/ux/Red.png" />
      <div>
        <h1>Choose what package you want to customize.</h1>
        {displayProducts && <ul>{displayProducts}</ul>}
      </div>
    </motion.section>
  );
}

export default ScreenChoice;

import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScreenChoice from "./components/ScreenChoice"
import ScreenDesign from "./components/ScreenDesign"

import './scss/App.scss';

function App() {
  console.clear();
  var location = useLocation();
  return (
    <div className="DesignApp">
      <div className="Screens">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
              <Route component={ScreenDesign} path='/design/:sku'  exact/>
              <Route component={ScreenChoice} path="/" exact/>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}
export default App;
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Main from "./components/main";
import TermsOfConditions from "./components/terms-of-conditions";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/terms-and-conditions" element={<TermsOfConditions />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

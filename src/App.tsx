import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Main from "./components/main";
import TermsOfConditions from "./components/terms-of-conditions";
import PrivacyPolicy from "./components/privacy-policy";
import Copyright from "./components/copyright";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/terms-and-conditions" element={<TermsOfConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/copyright" element={<Copyright />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

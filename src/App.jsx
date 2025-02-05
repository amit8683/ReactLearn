import React, { useState } from "react";

import File1 from "./react_router/File1";
import Home from "./react_router/Home";
import About from "./react_router/About";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Navbar from "./react_router/Navbar";
import Page4O4 from "./react_router/Page4O4";
import Test3 from "./components/Test3";
import Anil from "./react_router/Anil";
import Navlinks from "./react_router/Navlinks";
import Contact from "./react_router/Contact";
import NestedHome from "./react_router/nested/NestedHome";
import GetApi from "./apiCalling/GetApi"
import PostApi from "./apiCalling/PostApi";
function App() {
 

  return (
    <div>
      {/* <BrowserRouter>
      <Navlinks />
      <Routes>
        <Route  path="/homes/" element={<File1 />} >
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        </Route>
      </Routes>
      </BrowserRouter>   */}
    
      <PostApi />
    </div>
  );
}

export default App;

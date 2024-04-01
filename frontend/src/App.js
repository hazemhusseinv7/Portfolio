import React from "react";

import {
  Header,
  About,
  Work,
  Clients,
  Skills,
  Testimonial,
  Footer,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      {/* <Clients/> */}
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;

import { Routes, Route, Navigate } from "react-router-dom";


import Layout from "./Latout";
import Header from "./components/Header";
import About from "./componentss/About";
import Service from "./componentss/Services";
import Portfolio from "./componentsss/Portfollio";
import Contact from "./componentss/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Sign from "./componentsss/Sign";
import List from "./componentsss/List";
import Weather from "./componentsss/weather"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/portfolio" element={<Portfolio />}>
            <Route path="list" element={<List />} />
            <Route path="sign" element={<Sign />} />
            <Route path="weather" element={<Weather />} />
          </Route>

          <Route path="/*" element={<Navigate to="/"></Navigate>} />

        </Route>
      </Routes>
    </>
  );
}

export default App;

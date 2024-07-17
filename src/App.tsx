import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Test from "./components/Service";
import Services from "./components/Services";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<></>} />
          <Route path="test" element={<Service />} />

          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<Service />} />

          <Route path="chaines" element={<Service />} />
          <Route path="chaines/:id" element={<Service />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

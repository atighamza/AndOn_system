import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<></>} />
          <Route path="test" element={<Test />} />

          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<Test />} />

          <Route path="chaines" element={<Test />} />
          <Route path="chaines/:id" element={<Test />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

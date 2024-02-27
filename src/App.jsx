import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ForDoctors from "./pages/ForDoctors";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HealthID from "./pages/HealthID";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainLayout />}>
          <Route element={<Home />} index />
          <Route path="contact" element={<Contact />} index />
          <Route path="about" element={<About />} index />
          <Route path="for-doctors" element={<ForDoctors />} index />
          <Route path="health-id" element={<HealthID />} index />
        </Route>
        <Route path="/auth" exact element={<AuthLayout />}>
          <Route path="login" index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

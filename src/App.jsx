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
import MedicalHistory from "./pages/MedicalHistory";
import MediCard from "./pages/MediCard";
import HealthAnalytics from "./pages/HealthAnalytics";
import MyMedicalRecords from "./pages/MyMedicalRecords";
import HealthAnalyticsRecords from "./components/HealthAnalyticsRecords";
import ImagePopup from "./components/ImagePopup";
import PrintCard from "./components/PrintCard";


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
          <Route path="MedicalHistory" element={<MedicalHistory />} index />
          <Route path="MediCard" element={<MediCard />} index />
          <Route path="HealthAnalytics" element={<HealthAnalytics />} index />
          <Route path="HealthAnalyticsRecords" element={<HealthAnalyticsRecords />} index />
          <Route path="ImagePopup" element={<ImagePopup />} index />
          <Route path="PrintCard" element={<PrintCard />} index />
          
          
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

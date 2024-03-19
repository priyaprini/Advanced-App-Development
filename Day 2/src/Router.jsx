import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/navigation";
import Product from "./pages/Product/Product";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Notfound from "./pages/Contact";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const RouteApp = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/pro" element={<Product />} />
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/404" element={<Notfound />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Policy" element={<PrivacyPolicy />} />
        <Route path="/T&C" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default RouteApp;

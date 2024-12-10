import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CFB from "../pages/products/CeramicFiberBlanket";
import FoamGlass from "../pages/products/FoamGlass";
import Polyisocyanurate from "../pages/products/Polyisocyanurate";
import InsulationMaterials from "../pages/InsulationMaterials";
import MetalJacketingMaterials from "../pages/MetalJacketingMaterials";
import PolyurethaneFoam from "../pages/products/PolyurethaneFoam";
import ContactSection from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import AluminiumSheet from "../pages/products/AluminiumSheet";
import StainlessSteelSheet from "../pages/products/StainlessSteelSheet";
import CorrugatedSheet from "../pages/products/CorrugatedSheet";
import ProcurementServices from "../pages/ProcurementService";
import PerforatedSheet from "../pages/products/PerforatedSheet";
import WeldedWireMesh from "../pages/products/WeldedWireMesh";
import ProductInfo from "../pages/products/ProductInfo";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact-us" element={<ContactSection />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/insulation-materials" element={<InsulationMaterials />} />
      <Route path="/ceramic-fiber-blanket" element={<CFB />} />
      <Route path="/cellular-or-foam-glass" element={<FoamGlass />} />
      <Route path="/polyisocyanurate-PIR" element={<Polyisocyanurate />} />
      <Route path="/polyurethane-foam-PUF" element={<PolyurethaneFoam />} />
      <Route
        path="/metal-jacketing-materials"
        element={<MetalJacketingMaterials />}
      />
      <Route path="/aluminium-sheet" element={<AluminiumSheet />} />
      <Route path="/stainless-steel-sheet" element={<StainlessSteelSheet />} />
      <Route path="/corrugated-sheet" element={<CorrugatedSheet />} />
      <Route path="/procurement-services" element={<ProcurementServices />} />
      <Route path="/perforated-sheet" element={<PerforatedSheet />} />
      <Route path="/welded-wire-mesh" element={<WeldedWireMesh />} />
      <Route path="/product-info" element={<ProductInfo />} />
    </Routes>
  );
}

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
import LeadSheet from "../pages/products/LeadSheet";
import MassLoadedVinylSheet from "../pages/products/VinylSheet";
import StainlessSteelBand from "../pages/products/SSBand";
import StainlessSteelWingSeal from "../pages/products/SSWingSeal";
import NeopreneWasher from "../pages/products/NeopreneWasher";
import StainlessSteelSelfTappingScrew from "../pages/products/SSSelfTappingScrew";
import StainlessSteelTieWire from "../pages/products/SSTieWire";
import InsulationAndCladdingAccessories from "../pages/InsulationAndCladdingAccessories";
import StainlessSteelToggleClip from "../pages/products/SSToggleClip";
import StainlessSteelBlindRivet from "../pages/products/SSBlindRivet";
import AluminumBlindRivet from "../pages/products/ALBlindRivet";
import CeramicTape from "../pages/products/CeramicTape";
import FiberglassTape from "../pages/products/FiberGlassTape";
import CalciumSilicate from "../pages/products/CaSilicate";
import Perlite from "../pages/products/Perlite";
import InspectionPlug from "../pages/products/InspectionPlug";
import SealantsAdhesives from "../pages/products/SealandAndAdhesive";
import FilamentTape from "../pages/products/FilamentTape";
import StainlessSteelExpansionSpring from "../pages/products/SSExpansionSpring";
import RefractoryMaterials from "../pages/RefractoryMaterials";
import RefractoryBricks from "../pages/products/RefractoryBricks";
import RefractoryCastables from "../pages/products/RefractoryCastables";
import Mortar from "../pages/products/Mortar";
import RefCFB from "../pages/products/RefCFB";
import CeramicFiberWool from "../pages/products/CeramicFiberWool";
import CeramicFiberBoard from "../pages/products/CeramicFiberBoard";
import CeramicFiberCloth from "../pages/products/CeramicFiberCloth";
import CeramicFiberRope from "../pages/products/CeramicFiberRope";
import CeramicFiberFelt from "../pages/products/CeramicFiberFelt";
import InsulationBricks from "../pages/products/InsulationBricks";
import FireClayBricks from "../pages/products/FireClayBricks";
import HighAluminaRefractoryBricks from "../pages/products/HighAluminaRefractoryBricks";
import SillimaniteBricks from "../pages/products/SillimaniteBricks";
import SilicaBricks from "../pages/products/SilicaBricks";
import MagnesiaBricks from "../pages/products/MagnesiaBricks";
import AcidProofBricks from "../pages/products/AcidProofBricks";
import InsulatingCastables from "../pages/products/InsulatingCastables";
import DenseRefractoryCastable from "../pages/products/DenseRefractoryCastables";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact-us" element={<ContactSection />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/insulation-materials" element={<InsulationMaterials />} />
      <Route path="/insulation-materials/ceramic-fiber-blanket" element={<CFB />} />
      <Route path="/insulation-materials/cellular-or-foam-glass" element={<FoamGlass />} />
      <Route path="/insulation-materials/polyisocyanurate-PIR" element={<Polyisocyanurate />} />
      <Route path="/insulation-materials/polyurethane-foam-PUF" element={<PolyurethaneFoam />} />
      <Route path="/insulation-materials/perlite" element={<Perlite />} />
      <Route path="/insulation-materials/calcium-silicate" element={<CalciumSilicate />} />
      <Route path="/metal-jacketing-materials" element={<MetalJacketingMaterials />} />
      <Route path="/metal-jacketing-materials/aluminium-sheet" element={<AluminiumSheet />} />
      <Route path="/metal-jacketing-materials/stainless-steel-sheet" element={<StainlessSteelSheet />} />
      <Route path="/metal-jacketing-materials/corrugated-sheet" element={<CorrugatedSheet />} />
      <Route path="/procurement-services" element={<ProcurementServices />} />
      <Route path="/metal-jacketing-materials/perforated-sheet" element={<PerforatedSheet />} />
      <Route path="/metal-jacketing-materials/welded-wire-mesh" element={<WeldedWireMesh />} />
      <Route path="/metal-jacketing-materials/lead-sheet" element={<LeadSheet />} />
      <Route path="/metal-jacketing-materials/mass-loaded-vinyl-sheet" element={<MassLoadedVinylSheet />} />
      <Route path="/insulation-and-cladding-accessories" element={<InsulationAndCladdingAccessories />} />
      <Route path="/insulation-and-cladding-accessories/stainless-steel-band" element={<StainlessSteelBand />} />
      <Route path="/insulation-and-cladding-accessories/stainless-steel-wing-seal" element={<StainlessSteelWingSeal />} />
      <Route path="/insulation-and-cladding-accessories/neoprene-washer" element={<NeopreneWasher />} />
      <Route path="/insulation-and-cladding-accessories/stainless-steel-self-tapping-screw" element={<StainlessSteelSelfTappingScrew />} />
      <Route path="/insulation-and-cladding-accessories/stainless-steel-tie-wire" element={<StainlessSteelTieWire />} />
      <Route path="/insulation-and-cladding-accessories/stainless-steel-toggle-clip" element={<StainlessSteelToggleClip />} />
      <Route path="/insulation-and-cladding-accessories/stainless-steel-expansion-spring" element={<StainlessSteelExpansionSpring />} />
      <Route path="/insulation-and-cladding-accessories/stainless-steel-blind-rivet" element={<StainlessSteelBlindRivet />} />
      <Route path="/insulation-and-cladding-accessories/aluminium-blind-rivet" element={<AluminumBlindRivet />} />
      <Route path="/insulation-and-cladding-accessories/ceramic-tape" element={<CeramicTape />} />
      <Route path="/insulation-and-cladding-accessories/fiber-glass-tape" element={<FiberglassTape />} />
      <Route path="/insulation-and-cladding-accessories/inspection-plug" element={<InspectionPlug />} />
      <Route path="/insulation-and-cladding-accessories/sealants-and-adhesives" element={<SealantsAdhesives />} />
      <Route path="/insulation-and-cladding-accessories/filament-tape" element={<FilamentTape />} />
      <Route path="/refractory-materials" element={<RefractoryMaterials />} />
      <Route path="/refractory-materials/refractory-bricks" element={<RefractoryBricks />} />
      <Route path="/refractory-materials/refractory-castables" element={<RefractoryCastables />} />
      <Route path="/refractory-materials/mortar" element={<Mortar />} />
      <Route path="/refractory-materials/ceramic-fiber-blanket" element={<RefCFB />} />
      <Route path="/refractory-materials/ceramic-fiber-wool" element={<CeramicFiberWool />} />
      <Route path="/refractory-materials/ceramic-fiber-board" element={<CeramicFiberBoard />} />
      <Route path="/refractory-materials/ceramic-fiber-cloth" element={<CeramicFiberCloth />} />
      <Route path="/refractory-materials/ceramic-fiber-rope" element={<CeramicFiberRope />} />
      <Route path="/refractory-materials/ceramic-fiber-felt" element={<CeramicFiberFelt />} />
      <Route path="/refractory-materials/insulation-bricks" element={<InsulationBricks />} />
      <Route path="/refractory-materials/fire-clay-bricks" element={<FireClayBricks />} />
      <Route path="/refractory-materials/high-alumina-refractory-bricks" element={<HighAluminaRefractoryBricks />} />
      <Route path="/refractory-materials/sillimanite-bricks" element={<SillimaniteBricks />} />
      <Route path="/refractory-materials/silica-bricks" element={<SilicaBricks />} />
      <Route path="/refractory-materials/magnesia-bricks" element={<MagnesiaBricks />} />
      <Route path="/refractory-materials/acid-proof-bricks" element={<AcidProofBricks />} />
      <Route path="/refractory-materials/insulating-castables" element={<InsulatingCastables />} />
      <Route path="/refractory-materials/dense-refractory-castables" element={<DenseRefractoryCastable />} />

      <Route path="/product-info" element={<ProductInfo />} />
    </Routes>
  );
}

import React from "react";
import {
  Typography,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar";
import FooterWithSitemap from "../../components/Footer";
export default function PolyurethaneFoam() {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

  return (
    <div className="bg-amber-50">
      
        <NavigationbarWithDropdownMultilevelMenu />
     
      <div>
        <div class="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-72 w-full object-cover md:h-full md:w-72 hover:scale-105"
                src="/images/PUF.png"
                alt="Polyisocyanurate"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Polyurethane Foam (PUF)
              </div>
              <p class="my-4 text-sm text-slate-500">
                Polyurethane (PUF) rigid foam is produced by combining a polyol
                blend with an isocyanate by adding blowing agent to initiate
                foaming process.{" "}
              </p>
              <Button href="#" class="" variant="gradient">
                Enquire Now{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20 my-10 px-6 bg-white rounded-lg">
        <>
          <Accordion open={openAcc1}>
            <AccordionHeader onClick={handleOpenAcc1}>
              Product Description
            </AccordionHeader>
            <AccordionBody className="max-w-[700px]">
              Polyurethane (PUF) rigid foam is produced by combining a polyol
              blend with an isocyanate by adding blowing agent to initiate
              foaming process. The mixing ratio plays a critical role in
              determining both the molecular and cell structures of the foam,
              which in turn influence its key properties, such as density,
              dimensional stability, foam structure, compressive strength, fire
              resistance, and insulation performance. Renowned for their
              excellent insulation properties, PUF rigid foams are available in
              a wide range of densities, from 32 kg/m³ to 200 kg/m³, making them
              suitable for diverse applications.{" "}
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2}>
            <AccordionHeader onClick={handleOpenAcc2}>Benefits</AccordionHeader>
            <AccordionBody>
              <ul>
                <li>
                  &#10004; &nbsp; Long-lasting
                </li>
                <li>&#10004; &nbsp; Low thermal conductivity</li>
                <li>&#10004; &nbsp; Lightweight and easy to install</li>
                <li>
                  &#10004; &nbsp; Dimensional stability
                </li>
                <li>&#10004; &nbsp; High mechanical strength</li>
                <li>&#10004; &nbsp; Temperature range of -45°C to 80°C</li>
                <li>
                  &#10004; &nbsp; Resist corrosive chemicals
                </li>
                <li>
                  &#10004; &nbsp; Cost and energy saving
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3}>
            <AccordionHeader onClick={handleOpenAcc3}>
              Applications
            </AccordionHeader>
            <AccordionBody>
              <ul>
                <li>&#10004; &nbsp; Under slab, roof and wall insulation</li>
                <li>&#10004; &nbsp; Core material for architectural and structural panels </li>
                <li>
                  &#10004; &nbsp; Insulated windows, doors and air barrier sealants
                </li>
                <li>&#10004; &nbsp; Pipe, Tank and Vessel insulation</li>
                <li>&#10004; &nbsp; Insulation for shipping containers, trucks or rail cars</li>
              </ul>
            </AccordionBody>
          </Accordion>
        </>
      </div>
      <div>
        <FooterWithSitemap />
      </div>
    </div>
  );
}

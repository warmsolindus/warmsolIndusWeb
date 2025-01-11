import React, { useEffect } from "react";
import {
  Typography,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar";
import FooterWithSitemap from "../../components/Footer";
export default function PerforatedSheet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                class="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/perforated-stainless-steel-sheets.jpg"
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Perforated Sheet (Stainless Steel)
              </div>
              <p class="my- text-sm text-slate-500">
                Stainless steel Perforated sheets are durable and versatile
                materials with precision-cut holes. It has more load bearing
                capacity than wire mesh or expanded metal.
              </p>
              <Button href="#" class="" variant="gradient">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6 md:mx-20 my-10 px-6 bg-white rounded-lg">
        <>
          <Accordion open={openAcc1}>
            <AccordionHeader onClick={handleOpenAcc1}>
              Product Description
            </AccordionHeader>
            <AccordionBody className="max-w-[700px]">
              Stainless steel Perforated sheets are durable and versatile
              materials with precision-cut holes. It has more load bearing
              capacity than wire mesh or expanded metal. These sheets are ideal
              for industrial, architectural, and decorative applications,
              offering excellent corrosion resistance, strength, and aesthetic
              flexibility.
              <p>&nbsp;</p>
              <p>Available thickness range: 0.5mm – 1mm</p>
              <p>&nbsp;</p>
              <p>Hole diameter: 5mm </p>
              <p>&nbsp;</p>
              <p>Pitch: 8mm </p>
              <p>&nbsp;</p>
              <p>Alloy: SS316 </p>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2}>
            <AccordionHeader onClick={handleOpenAcc2}>Characteristics</AccordionHeader>
            <AccordionBody>
              <ul>
                <li>&#10004; &nbsp; high strength-to-weight ratio</li>
                <li>&#10004; &nbsp; Filtration and ventilation</li>
                <li>&#10004; &nbsp; Lightweight and easy to install</li>
                <li>&#10004; &nbsp; Thermal and Chemical Stability</li>
                <li>&#10004; &nbsp; Corrosion Resistance</li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3}>
            <AccordionHeader onClick={handleOpenAcc3}>
              Applications
            </AccordionHeader>
            <AccordionBody>
              <ul>
                <li>
                  &#10004; &nbsp; Safety guards, ventilation, wall and ceiling
                  panels
                </li>
                <li>&#10004; &nbsp; Staircase railings and sunshades</li>
                <li>
                  &#10004; &nbsp; Sound absorption and noise reduction in
                  acoustic panels
                </li>
                <li>
                  &#10004; &nbsp; Ventilation grilles and ducts in HVAC systems
                </li>
                <li>
                  &#10004; &nbsp; Decorative Bannisters and Architectural
                  finishes
                </li>
                <li>&#10004; &nbsp; Glass furnace crown insulation</li>
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

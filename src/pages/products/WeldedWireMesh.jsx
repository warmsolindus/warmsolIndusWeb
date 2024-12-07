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
export default function WeldedWireMesh() {
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
                class="h-72 w-full object-cover md:h-full md:w-72 hover:scale-105"
                src="/images/welded-wire-mesh-SS.jpg"
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Welded Wire Mesh (Stainless Steel)
              </div>
              <p class="my- text-sm text-slate-500">
                Stainless steel welded wire mesh is a highly versatile and
                durable material that serves a wide range of industrial and
                commercial applications.
              </p>
              <Button href="#" class="" variant="gradient">
                Enquire Now
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
              Stainless steel welded wire mesh is a highly versatile and durable
              material that serves a wide range of industrial and commercial
              applications. Crafted by welding stainless steel wires at precise
              intersections, it forms a uniform and robust grid-like structure.
              This construction provides exceptional strength and rigidity,
              ensuring reliable performance even under demanding conditions.
              <p>&nbsp;</p>
              <p>Wire diameter range: 0.8mm – 3mm</p>
              <p>&nbsp;</p>
              <p>Alloy: SS304, SS316 </p>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2}>
            <AccordionHeader onClick={handleOpenAcc2}>Benefits</AccordionHeader>
            <AccordionBody>
              <ul>
                <li>&#10004; &nbsp; Durability and strength</li>
                <li>&#10004; &nbsp; Corrosion resistance</li>
                <li>&#10004; &nbsp; Lightweight and easy fabrication</li>
                <li>&#10004; &nbsp; Good visibility and airflow</li>
                <li>&#10004; &nbsp; High tensile strength</li>
                <li>&#10004; &nbsp; Versatility and uniform grid pattern</li>
                <li>&#10004; &nbsp; Fire and heat resistance</li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3}>
            <AccordionHeader onClick={handleOpenAcc3}>
              Applications
            </AccordionHeader>
            <AccordionBody>
              <ul>
                <li>&#10004; &nbsp; Security fencing</li>
                <li>&#10004; &nbsp; Animal cages or enclosures</li>
                <li>
                  &#10004; &nbsp; Industrial filtration, sieves, and separators
                </li>
                <li>
                  &#10004; &nbsp; Ventilation grilles and ducts in HVAC systems
                </li>
                <li>
                  &#10004; &nbsp; Decorative bannisters and architectural
                  finishes
                </li>
                <li>&#10004; &nbsp; Machinery protection</li>
                <li>&#10004; &nbsp; Agricultural applications</li>
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

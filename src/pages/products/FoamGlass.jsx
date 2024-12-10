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
export default function FoamGlass() {
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
                src="/images/cellularOrFoamGlass.png"
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Cellular/Foam glass
              </div>
              <p class="my-4 text-sm text-slate-500">
                Cellular / Foam glass insulation is a lightweight, rigid
                material composed of millions of completely sealed glass cells.
              </p>
              <Button href="#" class="" variant="gradient">
                Enquire Now{" "}
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
              Cellular / Foam glass insulation is a lightweight, rigid material
              composed of millions of completely sealed glass cells. It is
              manufactured by Owens Corning in a block form and then fabricated
              into a wide range of shapes and sizes to satisfy industrial and
              commercial insulation requirements.
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2}>
            <AccordionHeader onClick={handleOpenAcc2}>Benefits</AccordionHeader>
            <AccordionBody>
              <ul>
                <li>&#10004; &nbsp; High Compressive Strength</li>
                <li>&#10004; &nbsp; Lightweight</li>
                <li>&#10004; &nbsp; Non-Combustible</li>
                <li>&#10004; &nbsp; Water and Vapor Impermeable</li>
                <li>&#10004; &nbsp; Long term Dimensional Stability</li>
                <li>&#10004; &nbsp; Insect and Pest Resistant</li>
                <li>&#10004; &nbsp; Corrosion/Chemical Resistant </li>
                <li>&#10004; &nbsp; Zero Deflection</li>
                <li>&#10004; &nbsp; High compressive strength</li>
                <li>&#10004; &nbsp; Easy to work with</li>
                <li>&#10004; &nbsp; Constant insulating efficiency</li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3}>
            <AccordionHeader onClick={handleOpenAcc3}>
              Applications
            </AccordionHeader>
            <AccordionBody>
              <ul>
                <li>&#10004; &nbsp; Cryogenic systems</li>
                <li>
                  &#10004; &nbsp; Low temperature pipe, equipment, tanks and
                  vessels
                </li>
                <li>
                  &#10004; &nbsp; Medium and high temperature pipes and
                  equipment
                </li>
                <li>&#10004; &nbsp; Hot oil and hot asphalt storage tanks</li>
                <li>&#10004; &nbsp; Heat transfer fluid systems</li>
                <li>&#10004; &nbsp; Hydrocarbon processing systems</li>
                <li>&#10004; &nbsp; Chemical processing systems</li>
                <li>
                  &#10004; &nbsp; Above ground and underground steam and chilled
                  water piping
                </li>
                <li>&#10004; &nbsp; Commercial piping and ductwork</li>
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

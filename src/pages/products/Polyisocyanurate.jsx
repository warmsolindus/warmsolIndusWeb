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
export default function Polyisocyanurate() {
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
                src="/images/PIR.png"
                alt="Polyisocyanurate"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Polyisocyanurate (PIR)
              </div>
              <p class="my-4 text-sm text-slate-500">
                Polyisocyanurate Insulation (PIR) is a rigid, closed-cell foam
                known for its excellent thermal performance and dimensional
                stability.{" "}
              </p>
              <Button href="#" class="" variant="gradient">
                Enquire Now{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20 md:mx-6 my-10 px-6 bg-white rounded-lg">
        <>
          <Accordion open={openAcc1}>
            <AccordionHeader onClick={handleOpenAcc1}>
              Product Description
            </AccordionHeader>
            <AccordionBody className="max-w-[700px]">
              Polyisocyanurate Insulation (PIR) is a rigid, closed-cell foam
              known for its excellent thermal performance and dimensional
              stability. Lightweight yet durable, it is commonly used in
              building envelopes, roofing systems, and pipe insulation. With a
              high R-value and resistance to moisture and temperature
              fluctuations, PIR insulation is an energy-efficient and reliable
              solution for a wide range of industrial and commercial
              applications.{" "}
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2}>
            <AccordionHeader onClick={handleOpenAcc2}>Characteristics</AccordionHeader>
            <AccordionBody>
              <ul>
                <li>
                  &#10004; &nbsp; Greater dimensional stability over a wider
                  service temperature range
                </li>
                <li>&#10004; &nbsp; Low thermal conductivity</li>
                <li>&#10004; &nbsp; Lightweight and easy to install</li>
                <li>
                  &#10004; &nbsp; Wide choice of adhesives and coatings can be
                  used for bonding
                </li>
                <li>&#10004; &nbsp; Excellent moisture resistance</li>
                <li>&#10004; &nbsp; Temperature range of -295ºF to 300ºF</li>
                <li>
                  &#10004; &nbsp; Slightly more efficient insulator than
                  extruded polystyrene
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
                <li>&#10004; &nbsp; Roof insulation</li>
                <li>&#10004; &nbsp; Equipment and tanks </li>
                <li>
                  &#10004; &nbsp; Ducts operating at below ambient temperatures
                </li>
                <li>&#10004; &nbsp; liquefied natural gas lines</li>
                <li>&#10004; &nbsp; Commercial and Industrial Piping</li>
                <li>
                  &#10004; &nbsp; Direct-buried steam or condensate distribution
                  piping systems
                </li>
                <li>&#10004; &nbsp; Ammonia refrigerant pipe insulation</li>
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

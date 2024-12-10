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
export default function AluminiumSheet() {
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
                src="/images/almWMB.jpg"
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Aluminium Sheet with or without moisture barrier
              </div>
              <p class="my-2 text-sm text-slate-500">
                Aluminum sheets are manufactured from high-quality alloys,
                offering superior corrosion resistance, durability, and
                strength. These sheets are available with or without a moisture
                barrier, tailored for various applications in insulation and
                industrial environments.
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
              Aluminum sheets are manufactured from high-quality alloys
              (1100,3105,3003 or 5005), offering superior corrosion resistance,
              durability, and strength. These sheets are available with or
              without a moisture barrier, tailored for various applications in
              insulation and industrial environments.
              <h5>Available thickness range: 0.3mm to 1mm.</h5>
              Available finishes: Smooth, Stucco Embossed, Corrugated
              (cross-crimped).
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2}>
            <AccordionHeader onClick={handleOpenAcc2}>
              Aluminium Sheet With Moisture Barrier
            </AccordionHeader>
            <AccordionBody>
              A thin layer of poly-surlyn is coated to the interior surface of
              the sheet to prevents moisture, enhance durability and protects
              insulation systems from corrosion.
              <ul>
                <li> &nbsp;</li>
                <li className="font-extrabold"> &nbsp; Applications:</li>
                <li> &nbsp; </li>
                <li>&#10004; &nbsp; Ideal for high-humidity environments</li>
                <li>&#10004; &nbsp; Outdoor insulation systems</li>
                <li>
                  &#10004; &nbsp; Industries like Petrochemical, Oil and Gas
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3}>
            <AccordionHeader onClick={handleOpenAcc3}>
              Aluminium Sheet Without Moisture Barrier
            </AccordionHeader>
            <AccordionBody>
              Suitable for applications where moisture protection is unnecessary
              or an external protective coating is provided.
              <ul>
                <li> &nbsp;</li>
                <li className="font-extrabold"> &nbsp; Applications:</li>
                <li> &nbsp; </li>
                <li>
                  &#10004; &nbsp; Insulation jacketing in low-humidity
                  environments
                </li>
                <li>&#10004; &nbsp; Architectural and industrial cladding</li>
                <li>
                  &#10004; &nbsp; Industries like Petrochemical, Oil and Gas
                </li>
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

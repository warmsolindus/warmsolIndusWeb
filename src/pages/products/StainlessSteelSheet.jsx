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
export default function StainlessSteelSheet() {
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
                src="./src/images/stainless-steel-coil.jpg"
                alt="Product image"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Stainless Steel Sheet with or without moisture barrier
              </div>
              <p class="my-2 text-sm text-slate-500">
                Stainless steel sheets are versatile and durable materials
                widely used in industrial, architectural, and decorative
                applications.
              </p>
              <Button href="#" class="" variant="gradient">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-20 my-10 px-6 bg-white rounded-lg">
        <>
          <Accordion open={openAcc1}>
            <AccordionHeader onClick={handleOpenAcc1}>
              Product Description
            </AccordionHeader>
            <AccordionBody className="max-w-[700px]">
              Stainless steel sheets are versatile and durable materials widely
              used in industrial, architectural, and decorative applications.
              They are resistant to corrosion, have excellent mechanical
              properties, and offer aesthetic appeal. Stainless steel sheets are
              made from T-304, 304L and T-316L (used in most corrosive areas)
              prime grade stainless steels. The primary use of stainless steel
              sheet and jacketing is for hostile environments such as the pulp,
              paper, textile, refinery and Petro-Chemical applications.
              <h5>Melting point: 2500°F</h5>
              <h5>Available thickness range: 0.3mm to 1mm</h5>
              Available finishes: Smooth, Stucco Embossed, Corrugated (3/16“)
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2}>
            <AccordionHeader onClick={handleOpenAcc2}>
              Stainless Steel Sheet With Moisture Barrier
            </AccordionHeader>
            <AccordionBody>
              Stainless steel sheets with a Poly-Surlyn are a multi-layer film
              laminated to the underside of the stainless steel, preventing
              moisture and protecting insulation systems from corrosion.
              <ul>
                <li> &nbsp;</li>
                <li className="font-extrabold"> &nbsp; Applications:</li>
                <li> &nbsp; </li>
                <li>
                  &#10004; &nbsp; Industrial insulation systems (Petrochemical,
                  Power plants)
                </li>
                <li>&#10004; &nbsp; Marine and offshore insulation</li>
                <li>
                  &#10004; &nbsp; Storage tanks, vessels, and piping in
                  high-humidity areas
                </li>
                <li>
                  &#10004; &nbsp; For cold rooftop and hot work cyclical
                  applications
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3}>
            <AccordionHeader onClick={handleOpenAcc3}>
              Stainless Steel Sheet Without Moisture Barrier
            </AccordionHeader>
            <AccordionBody>
              Suitable for applications where moisture protection is unnecessary
              or an external protective coating is provided.
              <ul>
                <li> &nbsp;</li>
                <li className="font-extrabold"> &nbsp; Applications:</li>
                <li> &nbsp; </li>
                <li>
                  &#10004; &nbsp; Food processing and pharmaceutical equipment
                </li>
                <li>
                  &#10004; &nbsp; Industrial piping and vessels in low-humidity
                  environments
                </li>
                <li>
                  &#10004; &nbsp; For Chemical Plants and Refineries, Paper
                  Mills, Steel Mills and Miscellaneous{" "}
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

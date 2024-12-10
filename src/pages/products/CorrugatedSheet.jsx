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
export default function CorrugatedSheet() {
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
                src="/images/corrugatedSheet.png"
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Corrugated Sheets
              </div>
              <p class="my-2 text-sm text-slate-500">
                Corrugated sheets are manufactured for enhanced strength,
                rigidity, and durability applications. Available in Aluminium
                and Stainless Steel varients.
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
              Corrugated sheets are manufactured for enhanced strength,
              rigidity, and durability, making them suitable for a wide range of
              industrial and architectural applications. Available in Aluminium
              and Stainless Steel, these sheets provide excellent weather
              resistance, corrosion protection, and aesthetic appeal.
              <p> &nbsp;</p>
              <p>&#10148; Available thickness range: 0.3mm to 1mm.</p>
              <p>
                &#10148; Available Finishes: a smooth finish, a stucco embossed
                pattern, and 3/16" cross crimped
              </p>
              &#10148; Corrugation Profile: 11/4"(depth of 1/4") and 21/2"(depth
              of 5/8") corrugations
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2}>
            <AccordionHeader onClick={handleOpenAcc2}>
              Aluminium Corrugated Sheet
            </AccordionHeader>
            <AccordionBody className="max-w-[700px]">
              &#10148; Alloy: 1100,3003,3105 or 5005
              <ul>
                <li> &nbsp;</li>
                <li className="font-extrabold"> &nbsp; Features:</li>
                <li> &nbsp; </li>
                <li>&#10004; &nbsp; Lightweight and easy to install</li>
                <li>
                  &#10004; &nbsp; High corrosion resistance, even in marine
                  environments
                </li>
                <li>&#10004; &nbsp; Cost-effective for large-scale projects</li>
                <li>&#10004; &nbsp; Non-combustible and low maintenance</li>
              </ul>
              <ul>
                <li> &nbsp;</li>
                <li className="font-extrabold"> &nbsp; Applications:</li>
                <li> &nbsp; </li>
                <li>
                  &#10004; &nbsp; Insulated piping, tanks, and vessels (with or
                  without a moisture barrier)
                </li>
                <li>&#10004; &nbsp; Architectural cladding and roofing</li>
                <li>&#10004; &nbsp; HVAC and duct systems</li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3}>
            <AccordionHeader onClick={handleOpenAcc3}>
              Stainless Steel Corrugated Sheet
            </AccordionHeader>
            <AccordionBody className="max-w-[700px]">
              &#10148; Alloy: T-304 or T-316
              <ul>
                <li> &nbsp;</li>
                <li className="font-extrabold"> &nbsp; Features:</li>
                <li> &nbsp; </li>
                <li>&#10004; &nbsp; Superior strength and impact resistance</li>
                <li>
                  &#10004; &nbsp; Excellent corrosion resistance, especially in
                  harsh chemical or marine environments
                </li>
                <li>
                  &#10004; &nbsp; Aesthetic appeal for architectural projects
                </li>
                <li>&#10004; &nbsp; Durable and long-lasting</li>
              </ul>
              <ul>
                <li> &nbsp;</li>
                <li className="font-extrabold"> &nbsp; Applications:</li>
                <li> &nbsp; </li>
                <li>
                  &#10004; &nbsp; Industrial cladding for equipment and
                  structures
                </li>
                <li>&#10004; &nbsp; Chemical plants and marine facilities</li>
                <li>
                  &#10004; &nbsp; Industries like Petrochemical, Oil and Gas
                </li>
                <li>
                  &#10004; &nbsp; Insulation jacketing for extreme environments
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

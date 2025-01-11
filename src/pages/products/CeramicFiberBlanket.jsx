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
export default function CFB() {
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
                src="/images/ceramicFiberBlanket.png"
                alt="Modern building architecture"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Ceramic fiber blanket
              </div>
              <p class="my- text-sm text-slate-500">
                Ceramic Fiber Blanket is manufactured from spun ceramic fiber
                and is needled to provide exceptional handling strength for
                high-temperature insulation applications.
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
              Ceramic Fiber Blanket is manufactured from spun ceramic fiber and
              is needled to provide exceptional handling strength for
              high-temperature insulation applications. It is lightweight and
              thermally efficient, resulting in a material that has the
              advantage of low heat storage and complete resistance to thermal
              shock. This is approved for use against cellulosic and hydrocarbon
              fires and for dry-wrapping of structural steel. Ceramic Fiber
              Blankets come in various chemical compositions, densities, and
              sizes, making them one of the most versatile insulation products
              in the industry.
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2}>
            <AccordionHeader onClick={handleOpenAcc2}>Characteristics</AccordionHeader>
            <AccordionBody>
              <ul>
                <li>&#10004; &nbsp; Excellent chemical stability</li>
                <li>&#10004; &nbsp; Lightweight</li>
                <li>&#10004; &nbsp; Non corrosive</li>
                <li>&#10004; &nbsp; Excellent tensile strength</li>
                <li>&#10004; &nbsp; Low thermal conductivity</li>
                <li>&#10004; &nbsp; Excellent insulation properties</li>
                <li>&#10004; &nbsp; Good sound insulation </li>
                <li>&#10004; &nbsp; Excellent thermal stability</li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3}>
            <AccordionHeader onClick={handleOpenAcc3}>
              Applications
            </AccordionHeader>
            <AccordionBody>
              <ul>
                <li>&#10004; &nbsp; Industrial furnace wall lining</li>
                <li>&#10004; &nbsp; Back lining material</li>
                <li>
                  &#10004; &nbsp; Furnace masonry expansion joints, door, roof
                  heat insulation seal
                </li>
                <li>&#10004; &nbsp; High temperature pipe insulation</li>
                <li>&#10004; &nbsp; High temperature gasketing</li>
                <li>&#10004; &nbsp; Glass furnace crown insulation</li>
                <li>
                  &#10004; &nbsp; Module / folded module processing material
                </li>
                <li>
                  &#10004; &nbsp; Reusable insulation for steam and gas turbines
                </li>
                <li>&#10004; &nbsp; Fireproof coating</li>
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

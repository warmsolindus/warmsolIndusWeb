import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function MassLoadedVinylSheet() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [openAcc1, setOpenAcc1] = React.useState(true)
  const [openAcc2, setOpenAcc2] = React.useState(true)
  const [openAcc3, setOpenAcc3] = React.useState(true)

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur)
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur)
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur)

  return (
    <div className="bg-green-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/MLVS.jpg"
                alt="Mass Loaded Vinyl Sheet"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Mass Loaded Vinyl Sheet for Sound Insulation
              </div>
              <p className="my-2 text-sm text-slate-500">
                Mass loaded vinyl sheets are high-density, flexible materials designed for superior sound insulation.
                These versatile sheets effectively reduce noise transmission in various applications, from construction
                to automotive industries.
              </p>
              <Button href="#" className="" variant="gradient">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 md:mx-20 my-10 px-6 bg-white rounded-lg">
        <Accordion open={openAcc1}>
          <AccordionHeader onClick={handleOpenAcc1}>Product Description</AccordionHeader>
          <AccordionBody className="max-w-[700px]">
            Mass loaded vinyl sheets are engineered from high-quality, dense vinyl material, offering excellent sound
            dampening properties. These sheets are designed to effectively block and absorb sound waves, reducing noise
            transmission across a wide range of frequencies.
            <h5>Available thickness range: 1/8 inch (3mm) to 1/4 inch (6mm)</h5>
            Available sizes: Standard 4' x 8' sheets, custom sizes available upon request
            <h5>Density: Typically 1 lb/sq.ft or 2 lb/sq.ft</h5>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Mass loaded vinyl sheets are widely used in various industries for sound insulation:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Construction (walls, ceilings, floors)</li>
              <li>&#10004; &nbsp; Automotive industry (vehicle interiors)</li>
              <li>&#10004; &nbsp; Marine vessels (engine rooms, cabins)</li>
              <li>&#10004; &nbsp; Industrial machinery enclosures</li>
              <li>&#10004; &nbsp; Home theaters and recording studios</li>
              <li>&#10004; &nbsp; HVAC systems and ductwork</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our mass loaded vinyl sheets offer several advantages for sound insulation:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; High density for effective sound blocking</li>
              <li>&#10004; &nbsp; Flexible and easy to install</li>
              <li>&#10004; &nbsp; Thin profile to maximize space</li>
              <li>&#10004; &nbsp; Resistant to moisture and mold</li>
              <li>&#10004; &nbsp; Fire-resistant (check specific ratings)</li>
              <li>&#10004; &nbsp; Can be combined with other insulation materials</li>
              <li>&#10004; &nbsp; Durable and long-lasting</li>
            </ul>
          </AccordionBody>
        </Accordion>
      </div>

      <div>
        <FooterWithSitemap />
      </div>
    </div>
  )
}


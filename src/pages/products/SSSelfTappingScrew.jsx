import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function StainlessSteelSelfTappingScrew() {
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
    <div className="bg-zinc-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/ssSelfTappingScrew.webp?height=288&width=288"
                alt="Stainless Steel Self-Tapping Screw"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Stainless Steel Self-Tapping Screws
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality stainless steel self-tapping screws offer exceptional corrosion resistance and
                durability for a wide range of applications. Designed for ease of installation and long-lasting
                performance, these screws are ideal for various industrial and construction projects.
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
            Our stainless steel self-tapping screws are manufactured from high-grade austenitic stainless steel
            (typically 304 or 316 grade), offering superior strength, corrosion resistance, and durability. These screws
            are designed to create their own threads as they are driven into the material, making them ideal for a
            variety of applications.
            <h5>Available sizes: #6 to #14 (metric sizes also available)</h5>
            <h5>Available lengths: 1/2 inch to 3 inches (12mm to 75mm)</h5>
            <h5>Head styles: Pan head, Flat head, Hex head</h5>
            <h5>Drive types: Phillips, Slotted, Hex</h5>
            <h5>Thread types: Type A (sharp point), Type B (blunt point)</h5>
            Finish: Passivated for enhanced corrosion resistance
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Stainless steel self-tapping screws are widely used across various industries due to their versatility and
            corrosion resistance:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Marine environments and boat building</li>
              <li>&#10004; &nbsp; Outdoor signage and displays</li>
              <li>&#10004; &nbsp; HVAC systems and ductwork</li>
              <li>&#10004; &nbsp; Electrical enclosures and junction boxes</li>
              <li>&#10004; &nbsp; Automotive and aerospace industries</li>
              <li>&#10004; &nbsp; Food processing equipment</li>
              <li>&#10004; &nbsp; Construction and roofing applications</li>
              <li>&#10004; &nbsp; General sheet metal work</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our stainless steel self-tapping screws offer numerous advantages for various applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent corrosion resistance, ideal for harsh environments</li>
              <li>&#10004; &nbsp; Self-tapping design eliminates the need for pre-drilled holes</li>
              <li>&#10004; &nbsp; High strength-to-weight ratio</li>
              <li>&#10004; &nbsp; Easy installation, saving time and labor costs</li>
              <li>&#10004; &nbsp; Suitable for a wide range of materials including soft metals, plastics, and wood</li>
              <li>&#10004; &nbsp; Temperature resistant, maintaining integrity in extreme conditions</li>
              <li>&#10004; &nbsp; Non-magnetic properties (austenitic grades)</li>
              <li>&#10004; &nbsp; Reusable in many applications</li>
              <li>&#10004; &nbsp; Environmentally friendly and 100% recyclable</li>
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


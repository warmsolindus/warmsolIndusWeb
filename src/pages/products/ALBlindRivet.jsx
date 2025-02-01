import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function AluminumBlindRivet() {
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
    <div className="bg-amber-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/ALBlindRivet.jpg?height=288&width=288"
                alt="Aluminum Blind Rivet"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Aluminum Blind Rivets for Lightweight Fastening Solutions
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality aluminum blind rivets offer exceptional strength-to-weight ratio, corrosion resistance,
                and versatility for a wide range of fastening applications. Engineered for durability and ease of
                installation, these blind rivets are ideal for various industrial, automotive, and construction projects
                requiring secure and efficient lightweight fastening solutions.
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
            Our aluminum blind rivets are manufactured from high-grade aluminum alloy, offering an excellent balance of
            strength, lightweight properties, and corrosion resistance. These versatile fasteners are designed for
            applications where access is limited to one side of the workpiece, making them ideal for a wide range of
            joining tasks across multiple industries.
            <h5>Available sizes: 1/8" to 1/4" diameter</h5>
            <h5>Grip range: Various options to accommodate different material thicknesses</h5>
            <h5>Head styles: Dome, Countersunk, Large Flange</h5>
            <h5>Material: Aluminum alloy body with steel mandrel</h5>
            <h5>Finish: Natural aluminum finish, clear anodized, or painted options available</h5>
            <h5>Shear strength: Up to 260 lbs (depending on size)</h5>
            <h5>Tensile strength: Up to 280 lbs (depending on size)</h5>
            Custom sizes and specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Aluminum blind rivets are widely used across various industries due to their lightweight properties and
            versatility:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Automotive manufacturing (body panels, interior trim)</li>
              <li>&#10004; &nbsp; Aerospace industry (non-structural components)</li>
              <li>&#10004; &nbsp; Construction (metal roofing, siding, and facades)</li>
              <li>&#10004; &nbsp; HVAC systems (ductwork and equipment assembly)</li>
              <li>&#10004; &nbsp; Electrical enclosures and junction boxes</li>
              <li>&#10004; &nbsp; Sign and display manufacturing</li>
              <li>&#10004; &nbsp; General sheet metal fabrication</li>
              <li>&#10004; &nbsp; Furniture assembly</li>
              <li>&#10004; &nbsp; Recreational vehicle construction</li>
              <li>&#10004; &nbsp; Appliance manufacturing</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our aluminum blind rivets offer numerous advantages for various fastening applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent strength-to-weight ratio for lightweight applications</li>
              <li>&#10004; &nbsp; Good corrosion resistance, suitable for many environments</li>
              <li>&#10004; &nbsp; Single-sided installation for hard-to-reach areas</li>
              <li>&#10004; &nbsp; Quick and easy installation with standard tools</li>
              <li>&#10004; &nbsp; Suitable for joining dissimilar materials</li>
              <li>&#10004; &nbsp; Provides a water-tight seal when properly installed</li>
              <li>&#10004; &nbsp; Vibration-resistant for long-lasting connections</li>
              <li>&#10004; &nbsp; Available in various sizes and grip ranges for versatile use</li>
              <li>&#10004; &nbsp; Aesthetically pleasing finish for visible applications</li>
              <li>&#10004; &nbsp; Electrically conductive, suitable for grounding applications</li>
              <li>&#10004; &nbsp; Low maintenance and easy to inspect</li>
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


import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function StainlessSteelBlindRivet() {
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
    <div className="bg-cyan-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/ssBlindRivet.jpg?height=288&width=288"
                alt="Stainless Steel Blind Rivet"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Stainless Steel Blind Rivets for Secure Fastening
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality stainless steel blind rivets offer exceptional strength, corrosion resistance, and
                versatility for a wide range of fastening applications. Engineered for durability and ease of
                installation, these blind rivets are ideal for various industrial, marine, and construction projects
                requiring secure and efficient fastening solutions.
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
            Our stainless steel blind rivets are manufactured from high-grade austenitic stainless steel (typically 304
            or 316 grade), offering superior strength, durability, and resistance to corrosion. These versatile
            fasteners are designed for applications where access is limited to one side of the workpiece, making them
            ideal for a wide range of joining tasks across multiple industries.
            <h5>Available sizes: 1/8" to 1/4" diameter</h5>
            <h5>Grip range: Various options to accommodate different material thicknesses</h5>
            <h5>Head styles: Dome, Countersunk, Large Flange</h5>
            <h5>Material: 304 or 316 grade stainless steel (body and mandrel)</h5>
            <h5>Finish: Natural stainless steel finish</h5>
            <h5>Shear strength: Up to 1,400 lbs (depending on size and grade)</h5>
            <h5>Tensile strength: Up to 1,600 lbs (depending on size and grade)</h5>
            Custom sizes and specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Stainless steel blind rivets are widely used across various industries due to their versatility and
            corrosion resistance:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Marine and shipbuilding (hull construction, interior fittings)</li>
              <li>&#10004; &nbsp; Aerospace industry (non-structural components)</li>
              <li>&#10004; &nbsp; Automotive manufacturing (body panels, interior trim)</li>
              <li>&#10004; &nbsp; Construction (metal roofing, siding, and facades)</li>
              <li>&#10004; &nbsp; HVAC systems (ductwork and equipment assembly)</li>
              <li>&#10004; &nbsp; Electrical enclosures and junction boxes</li>
              <li>&#10004; &nbsp; Sign and display manufacturing</li>
              <li>&#10004; &nbsp; General sheet metal fabrication</li>
              <li>&#10004; &nbsp; Food processing equipment assembly</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our stainless steel blind rivets offer numerous advantages for various fastening applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent corrosion resistance, ideal for marine and outdoor environments</li>
              <li>&#10004; &nbsp; High shear and tensile strength for secure fastening</li>
              <li>&#10004; &nbsp; Single-sided installation for hard-to-reach areas</li>
              <li>&#10004; &nbsp; Quick and easy installation with standard tools</li>
              <li>&#10004; &nbsp; Suitable for joining dissimilar materials</li>
              <li>&#10004; &nbsp; Provides a water-tight seal when properly installed</li>
              <li>&#10004; &nbsp; Vibration-resistant for long-lasting connections</li>
              <li>&#10004; &nbsp; Available in various sizes and grip ranges for versatile use</li>
              <li>&#10004; &nbsp; Aesthetically pleasing finish for visible applications</li>
              <li>&#10004; &nbsp; Resistant to UV radiation and harsh weather conditions</li>
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


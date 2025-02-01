"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function CalciumSilicate() {
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
    <div className="bg-blue-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/calciumSilicate.jpg?height=288&width=288"
                alt="Calcium Silicate"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Calcium Silicate: High-Performance Insulation Material
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our premium calcium silicate offers exceptional thermal insulation, fire resistance, and durability for
                a wide range of high-temperature applications. Engineered for superior performance, this versatile
                material is ideal for industrial, commercial, and marine projects requiring reliable insulation in
                extreme conditions.
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
            Our calcium silicate insulation is a high-quality, inorganic material composed of lime and silica,
            reinforced with cellulose fibers. It offers excellent thermal performance, fire resistance, and compressive
            strength, making it suitable for various high-temperature applications.
            <h5>Available forms: Boards, Pipes, Blocks</h5>
            <h5>Density range: 14-50 lbs/ft³ (224-800 kg/m³)</h5>
            <h5>Temperature range: Up to 1200°F (649°C)</h5>
            <h5>Thermal conductivity: 0.038-0.070 W/mK (at mean temp. 20°C)</h5>
            <h5>Compressive strength: 100-400 psi (0.7-2.8 MPa)</h5>
            <h5>pH: 9-11 (alkaline)</h5>
            <h5>Color: White to off-white</h5>
            Custom sizes and specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Calcium silicate is widely used across various industries due to its excellent insulation properties and
            durability:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Industrial pipe and equipment insulation</li>
              <li>&#10004; &nbsp; High-temperature ductwork insulation</li>
              <li>&#10004; &nbsp; Boiler and tank insulation</li>
              <li>&#10004; &nbsp; Petrochemical and refinery insulation</li>
              <li>&#10004; &nbsp; Marine and offshore insulation systems</li>
              <li>&#10004; &nbsp; Power generation facilities</li>
              <li>&#10004; &nbsp; Commercial building fire protection</li>
              <li>&#10004; &nbsp; Cryogenic insulation (with special grades)</li>
              <li>&#10004; &nbsp; Refractory linings and backup insulation</li>
              <li>&#10004; &nbsp; High-temperature gaskets and seals</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our calcium silicate insulation offers numerous advantages for high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent thermal insulation properties</li>
              <li>&#10004; &nbsp; High-temperature resistance up to 1200°F (649°C)</li>
              <li>&#10004; &nbsp; Superior fire resistance and non-combustibility</li>
              <li>&#10004; &nbsp; High compressive strength</li>
              <li>&#10004; &nbsp; Low shrinkage at elevated temperatures</li>
              <li>&#10004; &nbsp; Excellent corrosion inhibition properties</li>
              <li>&#10004; &nbsp; Resistant to water and moisture absorption</li>
              <li>&#10004; &nbsp; Asbestos-free and environmentally friendly</li>
              <li>&#10004; &nbsp; Easy to cut, shape, and install</li>
              <li>&#10004; &nbsp; Long service life with minimal maintenance</li>
              <li>&#10004; &nbsp; Resistant to vibration and mechanical stress</li>
              <li>&#10004; &nbsp; Compatible with most metal surfaces</li>
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


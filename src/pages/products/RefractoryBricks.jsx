"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function RefractoryBricks() {
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
    <div className="bg-orange-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/refractoryBricks.png?height=288&width=288"
                alt="Refractory Bricks"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Refractory Bricks: High-Temperature Insulation Solutions
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our premium refractory bricks offer exceptional heat resistance, durability, and thermal insulation for
                extreme temperature applications. Engineered to withstand intense heat and thermal shock, these bricks
                are essential for various industrial furnaces, kilns, and high-temperature processing equipment.
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
            Our refractory bricks are manufactured using high-quality raw materials and advanced production techniques
            to ensure superior performance in extreme temperature environments. These bricks are designed to provide
            excellent thermal insulation, resist chemical attack, and maintain structural integrity under intense heat.
            <h5 className="mt-4">Key specifications:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Material composition: Alumina, silica, magnesia, or other refractory oxides</li>
              <li>Temperature resistance: Up to 3200°F (1760°C), depending on the type</li>
              <li>Density range: 120-185 lbs/ft³ (1920-2960 kg/m³)</li>
              <li>Thermal conductivity: 0.2-1.4 W/mK at 1000°C</li>
              <li>Cold crushing strength: 2000-8000 psi (14-55 MPa)</li>
              <li>Porosity: 15-25%</li>
              <li>Standard sizes: 9" x 4.5" x 3" (230mm x 114mm x 76mm) or custom sizes</li>
            </ul>
            <h5 className="mt-4">Available types:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Fireclay bricks</li>
              <li>High alumina bricks</li>
              <li>Silica bricks</li>
              <li>Magnesia bricks</li>
              <li>Insulating firebricks</li>
              <li>Special shaped bricks for specific applications</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Refractory bricks are widely used across various high-temperature industries:
            <ul className="list-disc pl-5 mt-2">
              <li>Steel and iron manufacturing furnaces</li>
              <li>Glass melting furnaces</li>
              <li>Cement kilns</li>
              <li>Petrochemical process heaters</li>
              <li>Ceramic kilns</li>
              <li>Incinerators and waste treatment facilities</li>
              <li>Non-ferrous metal processing</li>
              <li>Power generation boilers</li>
              <li>Coke ovens</li>
              <li>Aluminum smelting and processing</li>
              <li>Chemical processing reactors</li>
              <li>Crematoriums</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our refractory bricks offer numerous advantages for high-temperature applications:
            <ul className="list-disc pl-5 mt-2">
              <li>Exceptional heat resistance for extreme temperature environments</li>
              <li>Excellent thermal insulation properties</li>
              <li>High resistance to thermal shock</li>
              <li>Superior mechanical strength at elevated temperatures</li>
              <li>Resistance to chemical attack and corrosion</li>
              <li>Low thermal conductivity for energy efficiency</li>
              <li>Dimensional stability at high temperatures</li>
              <li>Variety of compositions to suit specific application requirements</li>
              <li>Long service life, reducing maintenance and replacement costs</li>
              <li>Customizable shapes and sizes for complex furnace designs</li>
              <li>Consistent quality and performance</li>
              <li>Compliance with international standards and specifications</li>
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


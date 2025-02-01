"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function Perlite() {
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
    <div className="bg-gray-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/perliteInsulation.jpg?height=288&width=288"
                alt="Perlite"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Perlite: Versatile Mineral for Insulation and More
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality perlite offers exceptional insulation properties, lightweight characteristics, and
                versatility for a wide range of applications. This naturally occurring volcanic glass is expanded and
                processed to create a multi-functional material ideal for construction, horticulture, industrial, and
                filtration uses.
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
            Our perlite is a processed form of naturally occurring volcanic glass, expanded through rapid heating to
            create a lightweight, porous material with excellent insulation and filtration properties.
            <h5>Available forms: Loose fill, aggregate, powder</h5>
            <h5>Particle size range: Fine (0-1mm) to coarse (1-5mm)</h5>
            <h5>Bulk density: 2-15 lbs/ft³ (32-240 kg/m³)</h5>
            <h5>Color: White to off-white</h5>
            <h5>pH: 6.5-8.0 (neutral)</h5>
            <h5>Thermal conductivity: 0.04-0.06 W/mK</h5>
            <h5>Melting point: 1600-2000°F (871-1093°C)</h5>
            Custom grades and specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Perlite is widely used across various industries due to its unique properties and versatility:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Construction (lightweight insulating concrete, plasters, and fireproofing)</li>
              <li>&#10004; &nbsp; Horticulture (soil amendment and hydroponic growing medium)</li>
              <li>&#10004; &nbsp; Industrial insulation (cryogenic storage tanks, pipes)</li>
              <li>&#10004; &nbsp; Filtration (water treatment, food and beverage processing)</li>
              <li>&#10004; &nbsp; Foundry casting (metal pouring)</li>
              <li>&#10004; &nbsp; Packaging (protective filler material)</li>
              <li>&#10004; &nbsp; Pharmaceuticals (filler and abrasive in dental products)</li>
              <li>&#10004; &nbsp; Paints and plastics (lightweight filler)</li>
              <li>&#10004; &nbsp; Environmental (oil spill absorption)</li>
              <li>&#10004; &nbsp; Cryogenic insulation (LNG tankers and storage)</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our perlite offers numerous advantages for various applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent thermal insulation properties</li>
              <li>&#10004; &nbsp; Extremely lightweight</li>
              <li>&#10004; &nbsp; Non-combustible and fire-resistant</li>
              <li>&#10004; &nbsp; Chemically inert and pH neutral</li>
              <li>&#10004; &nbsp; Excellent moisture retention (in horticultural applications)</li>
              <li>&#10004; &nbsp; High porosity for effective filtration</li>
              <li>&#10004; &nbsp; Environmentally friendly and non-toxic</li>
              <li>&#10004; &nbsp; Resistant to rot, vermin, and termites</li>
              <li>&#10004; &nbsp; Excellent sound absorption properties</li>
              <li>&#10004; &nbsp; Long-lasting and stable</li>
              <li>&#10004; &nbsp; Cost-effective for many applications</li>
              <li>&#10004; &nbsp; Available in various grades for specific needs</li>
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


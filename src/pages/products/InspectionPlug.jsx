"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function InspectionPlug() {
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
    <div className="bg-yellow-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/inspectionPlug.png?height=288&width=288"
                alt="Inspection Plug"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Inspection Plugs: Essential for Maintenance and Safety
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality inspection plugs offer reliable access points for equipment monitoring and maintenance.
                Engineered for durability and ease of use, these plugs are essential for various industrial
                applications, ensuring safety and efficiency in your operations.
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
            Our inspection plugs are designed to provide secure and convenient access points for equipment inspection
            and maintenance. Made from high-quality materials, these plugs offer excellent durability and resistance to
            various environmental conditions.
            <h5>Available sizes: 1/2" to 4" diameter</h5>
            <h5>Materials: Stainless steel, brass, plastic (depending on application)</h5>
            <h5>Thread types: NPT, BSP, metric</h5>
            <h5>Pressure ratings: Up to 3000 PSI (depending on size and material)</h5>
            <h5>Temperature range: -40°F to 400°F (-40°C to 204°C)</h5>
            <h5>Sealing: O-ring or metal-to-metal</h5>
            <h5>Head styles: Hex, square, slotted</h5>
            Custom sizes and specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Inspection plugs are widely used across various industries for equipment monitoring and maintenance:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Oil and gas equipment</li>
              <li>&#10004; &nbsp; Industrial machinery and engines</li>
              <li>&#10004; &nbsp; Hydraulic and pneumatic systems</li>
              <li>&#10004; &nbsp; Chemical processing plants</li>
              <li>&#10004; &nbsp; Power generation facilities</li>
              <li>&#10004; &nbsp; Marine and offshore equipment</li>
              <li>&#10004; &nbsp; HVAC systems</li>
              <li>&#10004; &nbsp; Automotive and aerospace industries</li>
              <li>&#10004; &nbsp; Food and beverage processing equipment</li>
              <li>&#10004; &nbsp; Water treatment facilities</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our inspection plugs offer numerous advantages for various industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Durable construction for long-lasting performance</li>
              <li>&#10004; &nbsp; Easy installation and removal for quick access</li>
              <li>&#10004; &nbsp; Excellent sealing properties to prevent leaks</li>
              <li>&#10004; &nbsp; Corrosion-resistant materials for harsh environments</li>
              <li>&#10004; &nbsp; High pressure and temperature ratings</li>
              <li>&#10004; &nbsp; Various size options to fit different equipment</li>
              <li>&#10004; &nbsp; Compatible with a wide range of fluids and gases</li>
              <li>&#10004; &nbsp; Helps maintain system integrity during inspections</li>
              <li>&#10004; &nbsp; Reduces downtime for maintenance operations</li>
              <li>&#10004; &nbsp; Enhances safety by allowing regular equipment checks</li>
              <li>&#10004; &nbsp; Cost-effective solution for equipment monitoring</li>
              <li>&#10004; &nbsp; Available in different materials to suit specific needs</li>
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


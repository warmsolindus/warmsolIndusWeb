"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function SealantsAdhesives() {
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
    <div className="bg-teal-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="//images/sealant.png?height=288&width=288"
                alt="Sealants and Adhesives"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Sealants and Adhesives: Versatile Bonding Solutions
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-performance sealants and adhesives offer exceptional bonding strength, durability, and
                versatility for a wide range of industrial applications. Engineered to meet the most demanding
                requirements, these products ensure reliable sealing and joining solutions across various materials and
                environments.
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
            Our range of sealants and adhesives includes various formulations designed to meet specific industrial
            needs. These products offer superior bonding strength, flexibility, and resistance to environmental factors.
            <h5>Types available:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Silicone sealants</li>
              <li>Polyurethane adhesives</li>
              <li>Epoxy-based adhesives</li>
              <li>MS Polymer sealants</li>
              <li>Cyanoacrylate (super glue) adhesives</li>
            </ul>
            <h5 className="mt-4">Key properties:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Temperature resistance: -65°F to 500°F (-54°C to 260°C)</li>
              <li>Cure time: 5 minutes to 24 hours (product dependent)</li>
              <li>Tensile strength: Up to 6000 PSI</li>
              <li>Elongation: Up to 800%</li>
              <li>Chemical resistance: Various solvents, oils, and chemicals</li>
            </ul>
            Custom formulations available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Our sealants and adhesives are widely used across various industries for bonding, sealing, and assembly:
            <ul className="list-disc pl-5 mt-2">
              <li>Automotive manufacturing and repair</li>
              <li>Aerospace and aviation</li>
              <li>Construction and building materials</li>
              <li>Electronics and electrical equipment</li>
              <li>Marine and shipbuilding</li>
              <li>HVAC systems</li>
              <li>Industrial machinery and equipment</li>
              <li>Renewable energy (solar panels, wind turbines)</li>
              <li>Medical device assembly</li>
              <li>Packaging and product assembly</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our sealants and adhesives offer numerous advantages for various industrial applications:
            <ul className="list-disc pl-5 mt-2">
              <li>High bonding strength for durable connections</li>
              <li>Excellent resistance to temperature extremes</li>
              <li>Flexibility to accommodate thermal expansion and contraction</li>
              <li>Waterproof and weatherproof properties</li>
              <li>Chemical resistance for harsh environments</li>
              <li>Fast curing options for increased productivity</li>
              <li>Gap-filling capabilities for uneven surfaces</li>
              <li>UV-resistant formulations for outdoor applications</li>
              <li>Low-odor and low-VOC options available</li>
              <li>Vibration and impact resistance</li>
              <li>Electrical insulation properties (where applicable)</li>
              <li>Easy application with various dispensing methods</li>
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


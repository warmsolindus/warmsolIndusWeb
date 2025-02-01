"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function FilamentTape() {
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
    <div className="bg-lime-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/FTape.png?height=288&width=288"
                alt="Filament Tape"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Filament Tape: High-Strength Packaging Solution
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our premium filament tape offers exceptional tensile strength, durability, and versatility for a wide
                range of packaging and industrial applications. Engineered with reinforcing fibers, this tape provides
                superior performance in securing heavy loads, bundling, and palletizing.
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
            Our filament tape is a high-performance adhesive tape reinforced with continuous glass or polyester fibers
            for enhanced strength and durability. It offers excellent resistance to splitting and breaking under
            tension.
            <h5 className="mt-4">Key specifications:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Backing material: Polypropylene film with glass or polyester fibers</li>
              <li>Adhesive type: Synthetic rubber-based or hot melt</li>
              <li>Available widths: 12mm to 50mm (custom widths available)</li>
              <li>Tensile strength: Up to 300 lbs/in (525 N/cm)</li>
              <li>Elongation at break: 3-5%</li>
              <li>Temperature resistance: -40°F to 150°F (-40°C to 65°C)</li>
              <li>Color: Clear or white (custom colors available)</li>
            </ul>
            <h5 className="mt-4">Available variations:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Bi-directional (cross-weave) for enhanced tear resistance</li>
              <li>UV-resistant for outdoor applications</li>
              <li>Printable versions for branding and identification</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Filament tape is widely used across various industries due to its high strength and versatility:
            <ul className="list-disc pl-5 mt-2">
              <li>Heavy-duty carton sealing and box closure</li>
              <li>Palletizing and unitizing loads</li>
              <li>Bundling pipes, lumber, and other long objects</li>
              <li>Reinforcing shipping containers</li>
              <li>Securing appliances and furniture during transport</li>
              <li>Temporary holding in manufacturing processes</li>
              <li>Splicing of paper rolls and other materials</li>
              <li>Aerospace and automotive industry applications</li>
              <li>Mounting and holding in construction</li>
              <li>Sports equipment manufacturing (e.g., hockey sticks, tennis rackets)</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our filament tape offers numerous advantages for various packaging and industrial applications:
            <ul className="list-disc pl-5 mt-2">
              <li>Exceptional tensile strength for securing heavy loads</li>
              <li>High resistance to splitting and breaking under tension</li>
              <li>Excellent adhesion to a wide variety of surfaces</li>
              <li>Low elongation for minimal stretch during use</li>
              <li>Good resistance to abrasion and punctures</li>
              <li>Moisture and solvent resistant</li>
              <li>Clean removal from most surfaces without residue</li>
              <li>Cost-effective alternative to strapping in many applications</li>
              <li>Reduces packaging costs by eliminating the need for additional reinforcement</li>
              <li>Improves package integrity and reduces damage during shipping</li>
              <li>Easy to apply manually or with automated equipment</li>
              <li>Printable options for branding and identification purposes</li>
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

 
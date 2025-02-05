"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function Mortar() {
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
    <div className="bg-stone-100">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/Refractory-Mortar.png?height=288&width=288"
                alt="Mortar"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Mortar: Essential Binding Material for Construction
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality mortar products offer exceptional bonding strength, durability, and versatility for a
                wide range of construction applications. Engineered to meet various project requirements, our mortars
                ensure reliable performance in masonry work, tile setting, and more.
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
            Our mortar products are carefully formulated mixtures of cement, fine aggregates, and additives designed to
            provide optimal bonding and durability in various construction applications. We offer a range of mortar
            types to suit different project needs and environmental conditions.
            <h5 className="mt-4">Key specifications:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Compressive strength: 750-3000 psi (5-21 MPa), depending on type</li>
              <li>Water retention: ≥ 75%</li>
              <li>Air content: 8-17%</li>
              <li>Setting time: Initial set 2-3 hours, final set 8-10 hours</li>
              <li>Bond strength: 100-300 psi (0.7-2.1 MPa)</li>
              <li>Workability: Adjustable based on water content</li>
              <li>Packaging: 50 lb (22.7 kg) bags or bulk delivery</li>
            </ul>
            <h5 className="mt-4">Available types:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Type N: General-purpose mortar</li>
              <li>Type S: High-strength mortar</li>
              <li>Type M: High-strength mortar for heavy loads</li>
              <li>Type O: Low-strength mortar for interior applications</li>
              <li>Masonry cement mortar</li>
              <li>Polymer-modified mortar</li>
              <li>Refractory mortar for high-temperature applications</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Our mortar products are widely used in various construction applications:
            <ul className="list-disc pl-5 mt-2">
              <li>Brick and block laying for walls and structures</li>
              <li>Stone masonry construction</li>
              <li>Tile setting for floors and walls</li>
              <li>Pointing and repointing of masonry joints</li>
              <li>Stucco and plaster work</li>
              <li>Chimney and fireplace construction</li>
              <li>Foundation waterproofing and damp-proofing</li>
              <li>Concrete block filling</li>
              <li>Grouting for structural reinforcement</li>
              <li>Refractory lining in high-temperature industrial settings</li>
              <li>Historical restoration projects</li>
              <li>Landscaping and hardscaping applications</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our mortar products offer numerous advantages for construction projects:
            <ul className="list-disc pl-5 mt-2">
              <li>Excellent bonding strength for durable construction</li>
              <li>Consistent quality and performance</li>
              <li>Adjustable workability to suit different application methods</li>
              <li>Good water retention for proper curing</li>
              <li>Resistance to freeze-thaw cycles (in appropriate types)</li>
              <li>Variety of strengths to match project requirements</li>
              <li>Enhanced durability with polymer-modified options</li>
              <li>Color consistency for aesthetic applications</li>
              <li>Reduced efflorescence with proper formulations</li>
              <li>Compatibility with various masonry units and substrates</li>
              <li>Easy to mix and apply, improving on-site productivity</li>
              <li>Meets or exceeds ASTM C270 and other relevant standards</li>
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


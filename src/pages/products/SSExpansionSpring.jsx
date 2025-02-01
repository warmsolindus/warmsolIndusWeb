import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function StainlessSteelExpansionSpring() {
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
    <div className="bg-indigo-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/SSExpansionSpring.png?height=288&width=288"
                alt="Stainless Steel Expansion Spring for Insulation"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Stainless Steel Expansion Springs for Insulation
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality stainless steel expansion springs offer exceptional durability, corrosion resistance,
                and flexibility for insulation applications. Engineered to provide reliable support and accommodate
                thermal expansion, these springs are essential for maintaining insulation integrity in various
                industrial settings.
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
            Our stainless steel expansion springs for insulation are designed to provide optimal support and flexibility
            in various insulation systems. Made from high-grade stainless steel, these springs offer excellent corrosion
            resistance and durability in demanding environments.
            <h5 className="mt-4">Key specifications:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Material: 304 or 316 grade stainless steel</li>
              <li>Wire diameter: 0.020" to 0.120" (0.5mm to 3mm)</li>
              <li>Spring diameter: 1" to 6" (25mm to 150mm)</li>
              <li>Length: Custom lengths available to suit specific requirements</li>
              <li>Temperature resistance: Up to 1000°F (538°C)</li>
              <li>Finish: Bright or passivated</li>
              <li>Design: Open coil or closed end options</li>
            </ul>
            <h5 className="mt-4">Available variations:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Variable pitch for customized expansion rates</li>
              <li>Dual-wire design for increased load-bearing capacity</li>
              <li>Interlocked coils for enhanced stability</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Stainless steel expansion springs for insulation are widely used across various industries:
            <ul className="list-disc pl-5 mt-2">
              <li>Industrial pipe insulation systems</li>
              <li>HVAC ductwork insulation support</li>
              <li>Petrochemical plant equipment insulation</li>
              <li>Power generation facilities</li>
              <li>Cryogenic systems and equipment</li>
              <li>Marine and offshore insulation applications</li>
              <li>Food processing equipment insulation</li>
              <li>Aerospace thermal management systems</li>
              <li>Chemical processing plants</li>
              <li>Automotive exhaust system insulation</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our stainless steel expansion springs for insulation offer numerous advantages:
            <ul className="list-disc pl-5 mt-2">
              <li>Excellent corrosion resistance for long-lasting performance</li>
              <li>High temperature resistance for use in extreme environments</li>
              <li>Flexibility to accommodate thermal expansion and contraction</li>
              <li>Maintains insulation integrity by providing consistent support</li>
              <li>Reduces heat loss and improves energy efficiency</li>
              <li>Prevents insulation sagging and compression</li>
              <li>Easy installation and compatibility with various insulation materials</li>
              <li>Customizable designs to meet specific project requirements</li>
              <li>Resistant to vibration and mechanical stress</li>
              <li>Helps extend the lifespan of insulation systems</li>
              <li>Suitable for both indoor and outdoor applications</li>
              <li>Low maintenance and easy to inspect</li>
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


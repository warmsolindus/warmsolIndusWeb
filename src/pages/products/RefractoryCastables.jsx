import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function RefractoryCastables() {
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
    <div className="bg-red-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/castable-refractory.png?height=288&width=288"
                alt="Refractory Castables"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Refractory Castables: Versatile High-Temperature Solutions
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our premium refractory castables offer exceptional heat resistance, versatility, and ease of
                installation for extreme temperature applications. Engineered to withstand intense heat, thermal shock,
                and chemical attack, these castables are essential for various industrial furnaces, kilns, and
                high-temperature processing equipment.
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
            Our refractory castables are high-quality, pre-mixed materials designed for on-site casting of monolithic
            refractory linings. These castables combine carefully selected aggregates, binders, and additives to provide
            superior performance in extreme temperature environments.
            <h5 className="mt-4">Key specifications:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Material composition: Alumina, silica, magnesia, or other refractory oxides</li>
              <li>Temperature resistance: Up to 3400°F (1870°C), depending on the type</li>
              <li>Density range: 130-190 lbs/ft³ (2080-3040 kg/m³)</li>
              <li>Thermal conductivity: 0.3-1.5 W/mK at 1000°C</li>
              <li>Cold crushing strength: 3000-10000 psi (20-69 MPa)</li>
              <li>Setting time: 6-24 hours (depending on type and conditions)</li>
              <li>Packaging: 55 lb (25 kg) bags or 2200 lb (1000 kg) bulk bags</li>
            </ul>
            <h5 className="mt-4">Available types:</h5>
            <ul className="list-disc pl-5 mt-2">
              <li>Dense castables</li>
              <li>Low cement castables (LCC)</li>
              <li>Ultra-low cement castables (ULCC)</li>
              <li>No cement castables (NCC)</li>
              <li>Insulating castables</li>
              <li>Gunning mixes</li>
              <li>Sprayable castables</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Refractory castables are widely used across various high-temperature industries:
            <ul className="list-disc pl-5 mt-2">
              <li>Steel and iron manufacturing furnaces</li>
              <li>Glass melting furnaces</li>
              <li>Cement kilns and preheaters</li>
              <li>Petrochemical process heaters</li>
              <li>Aluminum smelting and holding furnaces</li>
              <li>Incineration and waste treatment facilities</li>
              <li>Power generation boilers</li>
              <li>Non-ferrous metal processing equipment</li>
              <li>Chemical processing reactors</li>
              <li>Ceramic kilns</li>
              <li>Coke ovens</li>
              <li>Ladles and tundishes in metal casting</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our refractory castables offer numerous advantages for high-temperature applications:
            <ul className="list-disc pl-5 mt-2">
              <li>Exceptional heat resistance for extreme temperature environments</li>
              <li>Excellent thermal shock resistance</li>
              <li>Superior mechanical strength at elevated temperatures</li>
              <li>Resistance to chemical attack and corrosion</li>
              <li>Versatility in application methods (casting, gunning, or spraying)</li>
              <li>Ability to form complex shapes and monolithic structures</li>
              <li>Reduced installation time compared to brick lining</li>
              <li>Minimal joints, reducing potential weak points</li>
              <li>Customizable formulations to suit specific application requirements</li>
              <li>Long service life, reducing maintenance and replacement costs</li>
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


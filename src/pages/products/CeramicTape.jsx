import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function CeramicTape() {
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
                src="/images/CFTape.png?height=288&width=288"
                alt="Ceramic Tape"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Ceramic Tape for High-Temperature Insulation
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality ceramic tape offers exceptional thermal insulation and heat resistance for extreme
                temperature applications. Engineered for durability and versatility, this ceramic tape is ideal for
                various industrial, automotive, and aerospace projects requiring reliable high-temperature protection
                and insulation.
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
            Our ceramic tape is manufactured from high-grade ceramic fibers, offering superior thermal insulation and
            resistance to extreme temperatures. This versatile tape is designed for applications requiring protection
            from high heat, flames, and thermal shock.
            <h5>Available widths: 1" to 6" (25mm to 150mm)</h5>
            <h5>Thickness range: 1/16" to 1/4" (1.5mm to 6mm)</h5>
            <h5>Temperature resistance: Up to 2300°F (1260°C) continuous use</h5>
            <h5>Composition: Alumina-Silica ceramic fibers</h5>
            <h5>Density: 6-12 lbs/ft³ (96-192 kg/m³)</h5>
            <h5>Surface: Smooth or textured options available</h5>
            <h5>Adhesive backing: Available upon request for easier installation</h5>
            Custom sizes and specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Ceramic tape is widely used across various industries due to its excellent thermal insulation properties and
            high-temperature resistance:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Automotive exhaust system wrapping</li>
              <li>&#10004; &nbsp; Aerospace heat shields and thermal barriers</li>
              <li>&#10004; &nbsp; Industrial furnace and kiln door seals</li>
              <li>&#10004; &nbsp; Welding protection and spark containment</li>
              <li>&#10004; &nbsp; High-temperature gaskets and seals</li>
              <li>&#10004; &nbsp; Electrical wire and cable insulation</li>
              <li>&#10004; &nbsp; Fire protection in buildings and marine vessels</li>
              <li>&#10004; &nbsp; Thermal management in electronics</li>
              <li>&#10004; &nbsp; Glass and metal production processes</li>
              <li>&#10004; &nbsp; Chemical and petrochemical industry insulation</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our ceramic tape offers numerous advantages for high-temperature insulation applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent thermal insulation properties</li>
              <li>&#10004; &nbsp; High-temperature resistance up to 2300°F (1260°C)</li>
              <li>&#10004; &nbsp; Low thermal conductivity</li>
              <li>&#10004; &nbsp; Resistant to thermal shock</li>
              <li>&#10004; &nbsp; Lightweight and flexible for easy installation</li>
              <li>&#10004; &nbsp; Low heat storage capacity</li>
              <li>&#10004; &nbsp; Excellent chemical resistance</li>
              <li>&#10004; &nbsp; Non-combustible and fire-resistant</li>
              <li>&#10004; &nbsp; Low shrinkage at high temperatures</li>
              <li>&#10004; &nbsp; Asbestos-free and environmentally friendly</li>
              <li>&#10004; &nbsp; Resistant to most chemicals and solvents</li>
              <li>&#10004; &nbsp; Available with adhesive backing for easier application</li>
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


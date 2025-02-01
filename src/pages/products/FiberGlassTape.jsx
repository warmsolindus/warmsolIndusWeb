import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function FiberglassTape() {
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
    <div className="bg-green-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/fiberglasstape.png?height=288&width=288"
                alt="Fiberglass Tape"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Fiberglass Tape for Versatile Reinforcement and Insulation
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality fiberglass tape offers exceptional strength, durability, and thermal resistance for a
                wide range of applications. Engineered for versatility and ease of use, this fiberglass tape is ideal
                for various industrial, construction, and DIY projects requiring reliable reinforcement and insulation.
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
            Our fiberglass tape is manufactured from high-quality glass fibers, offering superior strength, dimensional
            stability, and resistance to heat and chemicals. This versatile tape is designed for applications requiring
            reinforcement, insulation, or joint treatment in various industries.
            <h5>Available widths: 1" to 6" (25mm to 150mm)</h5>
            <h5>Thickness range: 3 mil to 10 mil (0.076mm to 0.254mm)</h5>
            <h5>Temperature resistance: Up to 550°F (288°C)</h5>
            <h5>Tensile strength: Up to 300 lbs/in (52.5 N/mm)</h5>
            <h5>Weave patterns: Plain, twill, or satin weave options</h5>
            <h5>Adhesive backing: Available with or without pressure-sensitive adhesive</h5>
            <h5>Color: White (standard), other colors available upon request</h5>
            Custom sizes and specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Fiberglass tape is widely used across various industries due to its strength, durability, and versatility:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Drywall joint reinforcement in construction</li>
              <li>&#10004; &nbsp; HVAC ductwork sealing and insulation</li>
              <li>&#10004; &nbsp; Electrical wire and cable wrapping</li>
              <li>&#10004; &nbsp; Pipe wrapping and corrosion protection</li>
              <li>&#10004; &nbsp; Automotive heat shielding</li>
              <li>&#10004; &nbsp; Aerospace composite reinforcement</li>
              <li>&#10004; &nbsp; Marine hull and deck repair</li>
              <li>&#10004; &nbsp; Sports equipment manufacturing</li>
              <li>&#10004; &nbsp; Industrial tank and vessel insulation</li>
              <li>&#10004; &nbsp; General purpose bundling and reinforcing</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our fiberglass tape offers numerous advantages for various reinforcement and insulation applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; High tensile strength for reliable reinforcement</li>
              <li>&#10004; &nbsp; Excellent dimensional stability</li>
              <li>&#10004; &nbsp; Resistant to heat and flames</li>
              <li>&#10004; &nbsp; Low thermal conductivity for insulation applications</li>
              <li>&#10004; &nbsp; Chemical resistance to most solvents and acids</li>
              <li>&#10004; &nbsp; Non-conductive for electrical insulation</li>
              <li>&#10004; &nbsp; Mold and mildew resistant</li>
              <li>&#10004; &nbsp; Low moisture absorption</li>
              <li>&#10004; &nbsp; Flexible and easy to apply</li>
              <li>&#10004; &nbsp; Available with adhesive backing for quick installation</li>
              <li>&#10004; &nbsp; Paintable and sandable for finishing applications</li>
              <li>&#10004; &nbsp; Long-lasting durability in various environments</li>
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


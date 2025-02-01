import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function StainlessSteelBand() {
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
                src="/images/ssBand.jpg?height=288&width=288"
                alt="Stainless Steel Band"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Stainless Steel Band for Industrial Applications
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality stainless steel bands offer exceptional strength, corrosion resistance, and versatility
                for various industrial applications. Engineered for durability and precision, these bands are ideal for
                securing, reinforcing, and bundling in demanding environments.
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
            Our stainless steel bands are manufactured from high-grade austenitic stainless steel (typically 304 or 316
            grade), offering superior strength, flexibility, and resistance to corrosion. These bands are designed to
            withstand harsh environments and provide reliable performance across a wide range of applications.
            <h5>Available width range: 1/4 inch (6.35mm) to 3/4 inch (19.05mm)</h5>
            <h5>Available thickness range: 0.015 inch (0.38mm) to 0.030 inch (0.76mm)</h5>
            Available finishes: Bright annealed, Matte
            <h5>Tensile strength: Up to 90,000 PSI (depending on grade and thickness)</h5>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Stainless steel bands are widely used across various industries for their versatility and durability:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Securing insulation on pipes and equipment</li>
              <li>&#10004; &nbsp; Bundling cables and wires</li>
              <li>&#10004; &nbsp; Reinforcing hoses and flexible ducts</li>
              <li>&#10004; &nbsp; Clamping and fastening in automotive and aerospace industries</li>
              <li>&#10004; &nbsp; Securing poles and posts in outdoor environments</li>
              <li>&#10004; &nbsp; Packaging and palletizing in logistics</li>
              <li>&#10004; &nbsp; Marine applications for corrosion resistance</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our stainless steel bands offer numerous advantages for industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; High tensile strength for secure fastening</li>
              <li>&#10004; &nbsp; Excellent corrosion resistance, suitable for harsh environments</li>
              <li>&#10004; &nbsp; Temperature resistant, maintaining integrity in extreme conditions</li>
              <li>&#10004; &nbsp; Flexible and easy to install with appropriate tools</li>
              <li>&#10004; &nbsp; Reusable and adjustable for cost-effective solutions</li>
              <li>&#10004; &nbsp; Non-magnetic properties (austenitic grades)</li>
              <li>&#10004; &nbsp; Long service life, reducing maintenance and replacement costs</li>
              <li>&#10004; &nbsp; Environmentally friendly and 100% recyclable</li>
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


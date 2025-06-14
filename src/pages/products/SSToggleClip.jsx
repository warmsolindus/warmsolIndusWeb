import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function StainlessSteelToggleClip() {
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
    <div className="bg-purple-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/ToggleLatches.jpg?height=288&width=288"
                alt="Stainless Steel Toggle Clip"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Stainless Steel Toggle Clips for Secure Fastening
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality stainless steel toggle clips offer exceptional strength, corrosion resistance, and ease
                of use for a wide range of fastening applications. Engineered for durability and quick installation,
                these toggle clips are ideal for various industrial, marine, and outdoor projects requiring secure and
                adjustable fastening solutions.
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
            Our stainless steel toggle clips are manufactured from high-grade austenitic stainless steel (typically 304
            or 316 grade), offering superior strength, durability, and resistance to corrosion. These versatile clips
            are designed for quick and secure fastening in various applications across multiple industries.
            <h5>Available sizes: Small (2" - 3"), Medium (3" - 4"), Large (4" - 5")</h5>
            <h5>Material: 304 or 316 grade stainless steel</h5>
            <h5>Finish: Polished or matte</h5>
            <h5>Tensile strength: Up to 1000 lbs (depending on size and grade)</h5>
            <h5>Features: Spring-loaded mechanism, adjustable tension</h5>
            Custom sizes and specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Stainless steel toggle clips are widely used across various industries due to their versatility and
            corrosion resistance:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Marine and boating industry (securing covers, tarps, and equipment)</li>
              <li>&#10004; &nbsp; Industrial machinery and equipment fastening</li>
              <li>&#10004; &nbsp; Automotive and transportation (securing cargo and accessories)</li>
              <li>&#10004; &nbsp; Construction and scaffolding (temporary fastening solutions)</li>
              <li>&#10004; &nbsp; Outdoor and camping gear (tent and tarp fastening)</li>
              <li>&#10004; &nbsp; Agricultural applications (greenhouse and farm equipment)</li>
              <li>&#10004; &nbsp; Aerospace industry (non-critical fastening applications)</li>
              <li>&#10004; &nbsp; General purpose fastening for various DIY projects</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our stainless steel toggle clips offer numerous advantages for various fastening applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent corrosion resistance, ideal for marine and outdoor environments</li>
              <li>&#10004; &nbsp; High tensile strength for secure fastening</li>
              <li>&#10004; &nbsp; Quick and easy installation and removal</li>
              <li>&#10004; &nbsp; Adjustable tension for versatile use</li>
              <li>&#10004; &nbsp; Spring-loaded mechanism for consistent pressure</li>
              <li>&#10004; &nbsp; Durable construction for long-lasting performance</li>
              <li>&#10004; &nbsp; Suitable for both temporary and semi-permanent fastening</li>
              <li>&#10004; &nbsp; Resistant to UV radiation and harsh weather conditions</li>
              <li>&#10004; &nbsp; Low maintenance and easy to clean</li>
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


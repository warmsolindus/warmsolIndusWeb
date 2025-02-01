import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function StainlessSteelTieWire() {
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
    <div className="bg-blue-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/tieWire.png?height=288&width=288"
                alt="Stainless Steel Tie Wire"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Stainless Steel Tie Wire for Versatile Binding Solutions
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality stainless steel tie wire offers exceptional strength, corrosion resistance, and
                versatility for a wide range of binding and securing applications. Engineered for durability and ease of
                use, this tie wire is ideal for various industrial, construction, and marine projects.
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
            Our stainless steel tie wire is manufactured from high-grade austenitic stainless steel (typically 304 or
            316 grade), offering superior strength, flexibility, and resistance to corrosion. This versatile wire is
            designed for various tying, binding, and securing applications across multiple industries.
            <h5>Available diameters: 0.020" (0.5mm) to 0.080" (2mm)</h5>
            <h5>Available lengths: Spools of 100ft (30m) to 1000ft (305m)</h5>
            <h5>Tensile strength: Varies by diameter, typically ranging from 70,000 to 120,000 PSI</h5>
            <h5>Finish: Bright (standard), annealed for increased flexibility</h5>
            Custom lengths and packaging options available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Stainless steel tie wire is widely used across various industries due to its versatility and corrosion
            resistance:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Construction (rebar tying, concrete reinforcement)</li>
              <li>&#10004; &nbsp; Marine and offshore industries</li>
              <li>&#10004; &nbsp; Fencing and wire mesh installation</li>
              <li>&#10004; &nbsp; Greenhouse and agriculture</li>
              <li>&#10004; &nbsp; Packaging and bundling</li>
              <li>&#10004; &nbsp; Electrical and telecommunications cable management</li>
              <li>&#10004; &nbsp; Automotive and aerospace industries</li>
              <li>&#10004; &nbsp; General industrial and DIY projects</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our stainless steel tie wire offers numerous advantages for various binding and securing applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent corrosion resistance, ideal for harsh environments</li>
              <li>&#10004; &nbsp; High tensile strength for secure fastening</li>
              <li>&#10004; &nbsp; Flexible and easy to work with</li>
              <li>&#10004; &nbsp; Temperature resistant, maintaining integrity in extreme conditions</li>
              <li>&#10004; &nbsp; Non-magnetic properties (austenitic grades)</li>
              <li>&#10004; &nbsp; Resistant to UV radiation and weathering</li>
              <li>&#10004; &nbsp; Long service life, reducing maintenance and replacement costs</li>
              <li>&#10004; &nbsp; Suitable for both indoor and outdoor applications</li>
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


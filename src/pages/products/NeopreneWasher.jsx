import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function NeopreneWasher() {
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
                src="/images/neopreneWasher.avif?height=288&width=288"
                alt="Neoprene Washer"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Neoprene Washers for Versatile Sealing Solutions
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality neoprene washers offer excellent resistance to oil, weather, and aging, making them
                ideal for a wide range of sealing and vibration dampening applications. Designed for durability and
                flexibility, these washers provide reliable performance in various industrial and commercial settings.
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
            Our neoprene washers are manufactured from high-quality synthetic rubber, offering a balance of physical and
            chemical properties that make them suitable for a wide range of applications. These washers provide
            excellent resistance to oils, weathering, and aging, while maintaining good flexibility and compression set
            resistance.
            <h5>Available sizes: Inner diameter from 1/8" to 2", outer diameter from 1/4" to 3"</h5>
            <h5>Thickness range: 1/32" to 1/4"</h5>
            <h5>Durometer (Hardness): 40A to 70A Shore</h5>
            <h5>Color: Black (standard), other colors available upon request</h5>
            <h5>Temperature range: -40°F to 212°F (-40°C to 100°C)</h5>
            Custom sizes and specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Neoprene washers are widely used across various industries due to their versatility and excellent sealing
            properties:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Automotive and marine industries</li>
              <li>&#10004; &nbsp; HVAC systems and ductwork</li>
              <li>&#10004; &nbsp; Electrical enclosures and junction boxes</li>
              <li>&#10004; &nbsp; Plumbing fixtures and connections</li>
              <li>&#10004; &nbsp; Industrial machinery and equipment</li>
              <li>&#10004; &nbsp; Construction and roofing applications</li>
              <li>&#10004; &nbsp; Vibration dampening in various devices</li>
              <li>&#10004; &nbsp; General purpose sealing and gasketing</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our neoprene washers offer numerous advantages for various sealing and dampening applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent resistance to oils, fuels, and many chemicals</li>
              <li>&#10004; &nbsp; Good weather and ozone resistance for outdoor applications</li>
              <li>&#10004; &nbsp; Maintains flexibility over a wide temperature range</li>
              <li>&#10004; &nbsp; High abrasion resistance for longer service life</li>
              <li>&#10004; &nbsp; Good compression set resistance for reliable sealing</li>
              <li>&#10004; &nbsp; Effective vibration dampening properties</li>
              <li>&#10004; &nbsp; Resistant to tearing and flex cracking</li>
              <li>&#10004; &nbsp; Cost-effective solution for many sealing applications</li>
              <li>&#10004; &nbsp; Available in various sizes and thicknesses for versatile use</li>
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


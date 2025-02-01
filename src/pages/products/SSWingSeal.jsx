import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function StainlessSteelWingSeal() {
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
    <div className="bg-slate-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <div>
        <div className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-72 w-full object-cover md:h-full md:w-72 scale-95 hover:scale-105 duration-700"
                src="/images/ssWingSeal.jpg?height=288&width=288"
                alt="Stainless Steel Wing Seal"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Stainless Steel Wing Seal for Insulation Jacketing
              </div>
              <p className="my-2 text-sm text-slate-500">
                Our high-quality stainless steel wing seals provide a secure and weather-resistant closure for
                insulation jacketing. Engineered for durability and ease of installation, these wing seals are ideal for
                various industrial applications where reliable sealing is crucial.
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
            Our stainless steel wing seals are manufactured from high-grade austenitic stainless steel (typically 304 or
            316 grade), offering superior strength, flexibility, and resistance to corrosion. These wing seals are
            designed to provide a secure closure for insulation jacketing in various industrial environments.
            <h5>Available width range: 1/2 inch (12.7mm) to 1 inch (25.4mm)</h5>
            <h5>Available thickness range: 0.015 inch (0.38mm) to 0.020 inch (0.51mm)</h5>
            <h5>Standard length: 2 inches (50.8mm)</h5>
            Available finishes: Bright annealed, Matte
            <h5>Tensile strength: Up to 75,000 PSI (depending on grade and thickness)</h5>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Stainless steel wing seals are widely used in various industries for insulation jacketing:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Sealing insulation jacketing on pipes and equipment</li>
              <li>&#10004; &nbsp; HVAC systems and ductwork</li>
              <li>&#10004; &nbsp; Chemical processing plants</li>
              <li>&#10004; &nbsp; Oil and gas refineries</li>
              <li>&#10004; &nbsp; Food and beverage processing facilities</li>
              <li>&#10004; &nbsp; Pharmaceutical manufacturing</li>
              <li>&#10004; &nbsp; Marine and offshore applications</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our stainless steel wing seals offer numerous advantages for insulation jacketing applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Secure closure for insulation jacketing</li>
              <li>&#10004; &nbsp; Excellent corrosion resistance, suitable for harsh environments</li>
              <li>&#10004; &nbsp; Temperature resistant, maintaining integrity in extreme conditions</li>
              <li>&#10004; &nbsp; Easy to install with standard hand tools</li>
              <li>&#10004; &nbsp; Provides a weather-resistant seal</li>
              <li>&#10004; &nbsp; Durable and long-lasting, reducing maintenance costs</li>
              <li>&#10004; &nbsp; Suitable for both indoor and outdoor applications</li>
              <li>&#10004; &nbsp; Complies with industry standards for insulation jacketing</li>
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


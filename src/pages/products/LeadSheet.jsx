import React, { useEffect } from "react"
import { Typography, Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"

export default function LeadSheet() {
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
                src="/images/leadSheetR.jpg"
                alt="Lead sheet"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
                Lead Sheet for Radiation and Noise Shielding
              </div>
              <p className="my-2 text-sm text-slate-500">
                Lead sheets are highly effective for radiation shielding, offering superior protection in medical,
                industrial, and nuclear applications. Our lead sheets are manufactured to meet strict quality standards,
                ensuring optimal performance and safety.
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
            Lead sheets are manufactured from high-purity lead, offering excellent radiation attenuation properties.
            These sheets are designed for various applications requiring effective shielding against X-rays, gamma rays,
            and other forms of ionizing radiation.
            <h5>Available thickness range: 0.5mm to 3mm</h5>
            Available finishes: Smooth, Rolled
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Lead sheets are widely used in various industries for radiation protection:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Medical facilities (X-ray rooms, CT scan areas)</li>
              <li>&#10004; &nbsp; Nuclear power plants</li>
              <li>&#10004; &nbsp; Industrial radiography</li>
              <li>&#10004; &nbsp; Research laboratories</li>
              <li>&#10004; &nbsp; Aerospace industry</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our lead sheets offer several advantages for radiation shielding:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; High density for effective radiation attenuation</li>
              <li>&#10004; &nbsp; Flexible and easy to install</li>
              <li>&#10004; &nbsp; Corrosion-resistant</li>
              <li>&#10004; &nbsp; Available in various thicknesses for different shielding requirements</li>
              <li>&#10004; &nbsp; Compliant with industry standards and regulations</li>
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


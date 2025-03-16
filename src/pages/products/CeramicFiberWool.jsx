"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function CeramicFiberWool() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [openAcc1, setOpenAcc1] = React.useState(true)
  const [openAcc2, setOpenAcc2] = React.useState(true)
  const [openAcc3, setOpenAcc3] = React.useState(true)

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur)
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur)
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur)

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="bg-gray-50">
      <NavigationbarWithDropdownMultilevelMenu />

      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="container mx-auto py-8">
        <motion.div
          variants={fadeIn}
          className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="md:shrink-0">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="h-72 w-full object-cover md:h-full md:w-72"
                src="/images/CFwool.png?height=288&width=288"
                alt="Ceramic Fiber Wool"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Ceramic Fiber Wool: Flexible High-Temperature Insulation
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium ceramic fiber wool provides exceptional thermal insulation with flexibility for complex
                applications. Made from high-purity alumina-silica fibers, this lightweight, flexible material offers
                excellent thermal resistance, low heat storage, and superior handling characteristics, making it ideal
                for high-temperature industrial applications requiring adaptable insulation solutions.
              </motion.p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button href="#" className="" variant="gradient">
                  Enquire Now
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-6 md:mx-20 my-10 px-6 bg-white rounded-lg"
      >
        <Accordion open={openAcc1}>
          <AccordionHeader onClick={handleOpenAcc1}>Product Description</AccordionHeader>
          <AccordionBody className="max-w-[700px]">
            Our ceramic fiber wool is manufactured from high-quality alumina-silica fibers, formed into flexible
            blankets designed for high-temperature insulation applications where adaptability is required.
            <h5>Available forms: Blankets, mats, bulk fiber, needled blankets</h5>
            <h5>Temperature ratings: 1000°C (1832°F), 1260°C (2300°F), 1400°C (2552°F)</h5>
            <h5>Density range: 64-192 kg/m³ (4-12 lbs/ft³)</h5>
            <h5>Standard dimensions: 7.32m x 610mm, 14.64m x 610mm (custom sizes available)</h5>
            <h5>Thickness range: 6mm to 50mm</h5>
            <h5>Color: White to off-white</h5>
            <h5>Thermal conductivity: 0.07-0.16 W/mK (varies with temperature)</h5>
            <h5>Fiber diameter: 2-3 microns</h5>
            <h5>Tensile strength: 50-75 kPa</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Ceramic fiber wool is utilized across various high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Furnace and kiln linings</li>
              <li>&#10004; &nbsp; Boiler insulation</li>
              <li>&#10004; &nbsp; Pipe and duct insulation</li>
              <li>&#10004; &nbsp; Expansion joints</li>
              <li>&#10004; &nbsp; Fire protection systems</li>
              <li>&#10004; &nbsp; Thermal barriers in foundries</li>
              <li>&#10004; &nbsp; Heat shields in metal processing</li>
              <li>&#10004; &nbsp; Gaskets and seals for high-temperature equipment</li>
              <li>&#10004; &nbsp; Stress-relieving pads</li>
              <li>&#10004; &nbsp; Wrapping of high-temperature pipes and vessels</li>
              <li>&#10004; &nbsp; Petrochemical process equipment</li>
              <li>&#10004; &nbsp; Power generation facilities</li>
              <li>&#10004; &nbsp; Ceramic and glass manufacturing</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our ceramic fiber wool offers numerous advantages for high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent thermal insulation properties</li>
              <li>&#10004; &nbsp; Low thermal conductivity</li>
              <li>&#10004; &nbsp; High temperature stability</li>
              <li>&#10004; &nbsp; Exceptional resistance to thermal shock</li>
              <li>&#10004; &nbsp; Lightweight and flexible</li>
              <li>&#10004; &nbsp; Low heat storage capacity</li>
              <li>&#10004; &nbsp; Good sound absorption properties</li>
              <li>&#10004; &nbsp; Excellent thermal stability</li>
              <li>&#10004; &nbsp; Resistant to most chemicals</li>
              <li>&#10004; &nbsp; Easy to cut, wrap, and form</li>
              <li>&#10004; &nbsp; Vibration resistant</li>
              <li>&#10004; &nbsp; Energy-efficient performance</li>
              <li>&#10004; &nbsp; Cost-effective for high-temperature applications</li>
              <li>&#10004; &nbsp; Available in various densities and thicknesses</li>
            </ul>
          </AccordionBody>
        </Accordion>
      </motion.div>

      <div>
        <FooterWithSitemap />
      </div>
    </div>
  )
}


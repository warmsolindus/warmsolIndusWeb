"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function InsulationBricks() {
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
                src="/images/insulationBricks.png?height=288&width=288"
                alt="Insulation Bricks"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Insulation Bricks: Superior Thermal Efficiency for Extreme Temperatures
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium insulation bricks provide exceptional thermal efficiency with outstanding structural
                integrity. Engineered with advanced refractory materials and precise porosity control, these lightweight
                yet durable bricks offer superior insulation performance in extreme temperature environments. Ideal for
                industrial furnaces, kilns, and high-temperature processing equipment, our insulation bricks deliver
                reliable thermal protection while reducing energy consumption.
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
            Our insulation bricks are manufactured from high-quality refractory materials with controlled porosity to
            create lightweight, thermally efficient products for high-temperature applications.
            <h5>Available types: Calcium silicate, lightweight fireclay, high alumina, silica, mullite</h5>
            <h5>Temperature ratings: 800°C (1472°F) to 1800°C (3272°F) depending on type</h5>
            <h5>Density range: 400-1200 kg/m³ (25-75 lbs/ft³)</h5>
            <h5>Standard dimensions: 230mm x 114mm x 65mm (9" x 4.5" x 2.5"), custom sizes available</h5>
            <h5>Thermal conductivity: 0.08-0.35 W/mK (varies with temperature and type)</h5>
            <h5>Cold crushing strength: 0.5-5.0 MPa (depending on type)</h5>
            <h5>Porosity: 60-85%</h5>
            <h5>Color: Varies by composition (white, off-white, tan, pink)</h5>
            <h5>Permanent linear change: ±0.5-2.0% (after heating)</h5>
            <h5>Special shapes: Arch, wedge, tongue and groove, custom shapes available</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Insulation bricks are utilized across various high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Industrial furnace linings (backup and working linings)</li>
              <li>&#10004; &nbsp; Kiln insulation (ceramic, glass, cement)</li>
              <li>&#10004; &nbsp; Blast furnace hot blast stoves</li>
              <li>&#10004; &nbsp; Coke oven batteries</li>
              <li>&#10004; &nbsp; Petrochemical heaters and reformers</li>
              <li>&#10004; &nbsp; Aluminum melting and holding furnaces</li>
              <li>&#10004; &nbsp; Glass melting tanks</li>
              <li>&#10004; &nbsp; Thermal power plant boilers</li>
              <li>&#10004; &nbsp; Heat treatment furnaces</li>
              <li>&#10004; &nbsp; Ceramic firing kilns</li>
              <li>&#10004; &nbsp; Cremation furnaces</li>
              <li>&#10004; &nbsp; Ladle preheaters</li>
              <li>&#10004; &nbsp; Chimney and flue linings</li>
              <li>&#10004; &nbsp; Backup insulation for refractory linings</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our insulation bricks offer numerous advantages for high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Exceptional thermal insulation properties</li>
              <li>&#10004; &nbsp; Low thermal conductivity</li>
              <li>&#10004; &nbsp; Lightweight yet structurally stable</li>
              <li>&#10004; &nbsp; High porosity for improved insulation</li>
              <li>&#10004; &nbsp; Excellent thermal shock resistance</li>
              <li>&#10004; &nbsp; Reduced heat storage capacity</li>
              <li>&#10004; &nbsp; Dimensional stability at high temperatures</li>
              <li>&#10004; &nbsp; Easy to cut and shape on-site</li>
              <li>&#10004; &nbsp; Compatible with various mortars and cements</li>
              <li>&#10004; &nbsp; Significant energy savings in thermal processes</li>
              <li>&#10004; &nbsp; Reduced cold face temperatures</li>
              <li>&#10004; &nbsp; Faster heat-up and cool-down cycles</li>
              <li>&#10004; &nbsp; Extended furnace campaign life</li>
              <li>&#10004; &nbsp; Available in various compositions for specific applications</li>
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

InsulationBricks.seo = {
  title: "Insulation Bricks: Superior Thermal Efficiency for Extreme Temperatures",
  description:
    "Our premium insulation bricks provide exceptional thermal efficiency with outstanding structural integrity. Engineered with advanced refractory materials and precise porosity control, these lightweight yet durable bricks offer superior insulation performance in extreme temperature environments.",
  keywords:
    "insulation bricks, thermal insulation, refractory insulation, high temperature insulation, lightweight insulation bricks, thermal efficiency, industrial furnaces, kilns, high temperature processing equipment, thermal protection, energy consumption",
}

"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function FireClayBricks() {
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
                src="/images/FCbricks.png?height=288&width=288"
                alt="Fire Clay Bricks"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Fire Clay Bricks: Reliable Refractory Solution for High Temperatures
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium fire clay bricks provide dependable performance in high-temperature applications.
                Manufactured from high-quality fire clay with precise formulation and firing control, these traditional
                refractory products offer excellent thermal stability, good mechanical strength, and reliable resistance
                to thermal shock. Ideal for industrial furnaces, kilns, and fireplaces, our fire clay bricks deliver
                consistent performance and long service life in demanding thermal environments.
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
            Our fire clay bricks are manufactured from high-quality fire clay, carefully processed and fired to create
            durable refractory products for various high-temperature applications.
            <h5>Available grades: Low duty (SK 26), Medium duty (SK 30), High duty (SK 33-34)</h5>
            <h5>Alumina content: 25-45% (varies by grade)</h5>
            <h5>Temperature ratings: 1300°C (2372°F) to 1500°C (2732°F) depending on grade</h5>
            <h5>Density: 1900-2200 kg/m³ (119-137 lbs/ft³)</h5>
            <h5>Standard dimensions: 230mm x 114mm x 65mm (9" x 4.5" x 2.5"), custom sizes available</h5>
            <h5>Thermal conductivity: 0.8-1.3 W/mK (varies with temperature)</h5>
            <h5>Cold crushing strength: 25-60 MPa (depending on grade)</h5>
            <h5>Porosity: 15-25%</h5>
            <h5>Color: Buff to reddish-brown (varies by composition)</h5>
            <h5>Permanent linear change: ±0.2-0.6% (after heating)</h5>
            <h5>Special shapes: Arch, wedge, jamb, key, splits, custom shapes available</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Fire clay bricks are utilized across various high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Industrial furnace linings</li>
              <li>&#10004; &nbsp; Kiln linings (ceramic, brick, lime)</li>
              <li>&#10004; &nbsp; Boiler linings</li>
              <li>&#10004; &nbsp; Fireplace construction</li>
              <li>&#10004; &nbsp; Pizza ovens and bakery ovens</li>
              <li>&#10004; &nbsp; Chimney linings</li>
              <li>&#10004; &nbsp; Ladle linings</li>
              <li>&#10004; &nbsp; Hot blast stove checkerwork</li>
              <li>&#10004; &nbsp; Coke oven construction</li>
              <li>&#10004; &nbsp; Glass tank furnaces (regenerators)</li>
              <li>&#10004; &nbsp; Incinerators</li>
              <li>&#10004; &nbsp; Foundry applications</li>
              <li>&#10004; &nbsp; Heat treatment furnaces</li>
              <li>&#10004; &nbsp; Flue linings</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our fire clay bricks offer numerous advantages for high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Good thermal stability</li>
              <li>&#10004; &nbsp; Excellent mechanical strength</li>
              <li>&#10004; &nbsp; Reliable resistance to thermal shock</li>
              <li>&#10004; &nbsp; Good load-bearing capacity at high temperatures</li>
              <li>&#10004; &nbsp; Resistance to slag and flux penetration</li>
              <li>&#10004; &nbsp; Consistent dimensional stability</li>
              <li>&#10004; &nbsp; Excellent resistance to spalling</li>
              <li>&#10004; &nbsp; Good abrasion resistance</li>
              <li>&#10004; &nbsp; Compatible with various mortars and cements</li>
              <li>&#10004; &nbsp; Cost-effective refractory solution</li>
              <li>&#10004; &nbsp; Long service life</li>
              <li>&#10004; &nbsp; Proven performance in traditional applications</li>
              <li>&#10004; &nbsp; Available in various shapes for specific applications</li>
              <li>&#10004; &nbsp; Suitable for both industrial and commercial applications</li>
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

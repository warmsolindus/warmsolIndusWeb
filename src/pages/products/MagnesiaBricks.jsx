"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function MagnesiaBricks() {
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
          className="max-w-md mx-auto my-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl"
        >
          <div className="md:flex">
            <div className="md:shrink-0">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="h-72 w-full object-cover md:h-full md:w-72"
                src="/images/MagnesiaBricks.png?height=288&width=288"
                alt="Magnesia Bricks"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Magnesia Bricks: Superior Resistance to Basic Slags and High Temperatures
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium magnesia bricks provide exceptional performance in applications requiring superior
                resistance to basic slags and extreme temperatures. Manufactured with high-purity magnesium oxide (MgO),
                these specialized refractory products offer outstanding chemical stability, excellent thermal
                conductivity, and remarkable resistance to corrosion in basic environments. Ideal for steel-making
                furnaces, cement kilns, and non-ferrous metal processing, our magnesia bricks ensure reliable operation
                and extended service life in the most demanding industrial applications.
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
            Our magnesia bricks are manufactured from high-purity magnesium oxide (MgO), carefully processed and fired
            to create superior refractory products for applications requiring excellent resistance to basic slags and
            high temperatures.
            <h5>MgO content: 85-98% (varies by grade)</h5>
            <h5>Available types: Direct-bonded, semi-rebonded, fully rebonded, fused</h5>
            <h5>Temperature rating: Up to 1800°C (3272°F)</h5>
            <h5>Density: 2800-3100 kg/m³ (175-194 lbs/ft³)</h5>
            <h5>Standard dimensions: 230mm x 114mm x 65mm (9" x 4.5" x 2.5"), custom sizes available</h5>
            <h5>Thermal conductivity: 3.0-5.0 W/mK (varies with temperature)</h5>
            <h5>Cold crushing strength: 40-100 MPa (depending on grade)</h5>
            <h5>Porosity: 15-22%</h5>
            <h5>Color: White to light brown</h5>
            <h5>Refractoriness under load (T0.5): 1650-1750°C</h5>
            <h5>Permanent linear change: -0.1 to -0.5% (after heating)</h5>
            <h5>Thermal expansion coefficient: 13-14 x 10⁻⁶/°C</h5>
            <h5>Special additives: Chrome oxide, zirconia, carbon (for specific applications)</h5>
            <h5>Special shapes: Arch, wedge, taper, nozzles, custom shapes available</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Magnesia bricks are utilized across various demanding high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Basic oxygen furnace (BOF) linings</li>
              <li>&#10004; &nbsp; Electric arc furnace (EAF) linings</li>
              <li>&#10004; &nbsp; Steel ladle linings</li>
              <li>&#10004; &nbsp; Cement rotary kiln burning zones</li>
              <li>&#10004; &nbsp; Secondary steel-making vessels</li>
              <li>&#10004; &nbsp; Copper converters</li>
              <li>&#10004; &nbsp; Non-ferrous metal processing furnaces</li>
              <li>&#10004; &nbsp; Glass tank furnace regenerators</li>
              <li>&#10004; &nbsp; Lime and dolomite kilns</li>
              <li>&#10004; &nbsp; Argon-oxygen decarburization (AOD) vessels</li>
              <li>&#10004; &nbsp; RH degasser vessels</li>
              <li>&#10004; &nbsp; Torpedo ladles</li>
              <li>&#10004; &nbsp; Areas exposed to basic slag attack</li>
              <li>&#10004; &nbsp; High-temperature zones requiring good thermal conductivity</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our magnesia bricks offer numerous advantages for demanding high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Exceptional resistance to basic slags</li>
              <li>&#10004; &nbsp; Superior performance in basic (alkaline) environments</li>
              <li>&#10004; &nbsp; Excellent high-temperature stability</li>
              <li>&#10004; &nbsp; Outstanding resistance to chemical attack</li>
              <li>&#10004; &nbsp; High refractoriness (up to 1800°C)</li>
              <li>&#10004; &nbsp; Excellent thermal conductivity</li>
              <li>&#10004; &nbsp; Good mechanical strength at elevated temperatures</li>
              <li>&#10004; &nbsp; Resistance to thermal shock (varies by grade)</li>
              <li>&#10004; &nbsp; Low iron penetration</li>
              <li>&#10004; &nbsp; Excellent volume stability</li>
              <li>&#10004; &nbsp; Good abrasion resistance</li>
              <li>&#10004; &nbsp; Extended service life in appropriate applications</li>
              <li>&#10004; &nbsp; Reduced maintenance and downtime</li>
              <li>&#10004; &nbsp; Available with various additives for enhanced performance</li>
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


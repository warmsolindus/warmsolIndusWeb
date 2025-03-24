"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function HighAluminaRefractoryBricks() {
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
                src="/images/HighAluminaFireBricks.png?height=288&width=288"
                alt="High Alumina Refractory Bricks"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                High Alumina Refractory Bricks: Premium Performance for Extreme Conditions
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium high alumina refractory bricks deliver exceptional performance in the most demanding
                high-temperature environments. Manufactured with elevated alumina content (45-99%) and advanced
                processing techniques, these superior refractory products offer outstanding heat resistance, excellent
                mechanical strength, and superior chemical resistance. Ideal for critical industrial applications where
                standard refractories are inadequate, our high alumina bricks ensure reliable operation and extended
                service life under extreme thermal and chemical conditions.
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
            Our high alumina refractory bricks are manufactured from premium raw materials with elevated alumina
            content, carefully processed and fired to create superior refractory products for the most demanding
            high-temperature applications.
            <h5>Available grades: 45%, 55%, 60%, 70%, 80%, 90%, 99% alumina content</h5>
            <h5>Temperature ratings: 1500°C (2732°F) to 1850°C (3362°F) depending on grade</h5>
            <h5>Density: 2200-3000 kg/m³ (137-187 lbs/ft³)</h5>
            <h5>Standard dimensions: 230mm x 114mm x 65mm (9" x 4.5" x 2.5"), custom sizes available</h5>
            <h5>Thermal conductivity: 1.2-2.5 W/mK (varies with temperature and alumina content)</h5>
            <h5>Cold crushing strength: 40-120 MPa (depending on grade)</h5>
            <h5>Porosity: 15-22%</h5>
            <h5>Color: Light buff to white (varies by alumina content)</h5>
            <h5>Refractoriness under load (T0.5): 1450-1750°C (depending on grade)</h5>
            <h5>Permanent linear change: ±0.1-0.3% (after heating)</h5>
            <h5>Special shapes: Arch, wedge, flow control shapes, custom shapes available</h5>
            <h5>Bonding types: Clay bonded, chemical bonded, direct bonded, fused cast</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            High alumina refractory bricks are utilized across various demanding high-temperature industrial
            applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Blast furnace linings (especially in the stack and bosh areas)</li>
              <li>&#10004; &nbsp; Steel ladle linings</li>
              <li>&#10004; &nbsp; Electric arc furnace linings</li>
              <li>&#10004; &nbsp; Glass melting furnaces (especially in corrosive areas)</li>
              <li>&#10004; &nbsp; Cement rotary kiln burning zones</li>
              <li>&#10004; &nbsp; Aluminum melting furnaces</li>
              <li>&#10004; &nbsp; Petrochemical reformer tubes and reactors</li>
              <li>&#10004; &nbsp; Copper and non-ferrous metal processing furnaces</li>
              <li>&#10004; &nbsp; Ceramic tunnel kilns (high-temperature zones)</li>
              <li>&#10004; &nbsp; Coke oven door jambs and sole flues</li>
              <li>&#10004; &nbsp; Waste incinerators (corrosive environments)</li>
              <li>&#10004; &nbsp; Flow control systems (slide gates, nozzles)</li>
              <li>&#10004; &nbsp; High-temperature reactor vessels</li>
              <li>&#10004; &nbsp; Areas exposed to severe slag attack</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our high alumina refractory bricks offer numerous advantages for demanding high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Superior high-temperature performance</li>
              <li>&#10004; &nbsp; Excellent resistance to chemical attack</li>
              <li>&#10004; &nbsp; Outstanding mechanical strength at elevated temperatures</li>
              <li>&#10004; &nbsp; Enhanced resistance to slag penetration</li>
              <li>&#10004; &nbsp; Excellent volume stability</li>
              <li>&#10004; &nbsp; Superior abrasion and erosion resistance</li>
              <li>&#10004; &nbsp; Good thermal shock resistance</li>
              <li>&#10004; &nbsp; Low creep at high temperatures</li>
              <li>&#10004; &nbsp; Excellent load-bearing capacity</li>
              <li>&#10004; &nbsp; Resistance to alkali attack</li>
              <li>&#10004; &nbsp; Extended service life in severe conditions</li>
              <li>&#10004; &nbsp; Reduced downtime in critical applications</li>
              <li>&#10004; &nbsp; Available in various alumina contents for specific requirements</li>
              <li>&#10004; &nbsp; Suitable for the most demanding industrial processes</li>
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

 
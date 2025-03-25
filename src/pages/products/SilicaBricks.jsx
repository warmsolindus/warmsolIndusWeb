"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function SilicaBricks() {
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
                src="/images/SilicaBricks.png?height=288&width=288"
                alt="Silica Bricks"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Silica Bricks: Exceptional Load-Bearing Capacity for High-Temperature Applications
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium silica bricks provide outstanding performance in high-temperature applications requiring
                excellent load-bearing capacity and volume stability. Manufactured with high-purity silica (greater than 93% SiO₂),
                these specialized refractory products offer exceptional resistance to acidic slags, remarkable
                dimensional stability after initial expansion, and superior creep resistance at elevated temperatures.
                Ideal for coke ovens, glass furnaces, and acid-resistant linings, our silica bricks ensure reliable
                operation and extended service life in demanding thermal environments.
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
            Our silica bricks are manufactured from high-purity silica raw materials, carefully processed and fired to
            create superior refractory products for applications requiring excellent load-bearing capacity and
            resistance to acidic environments.
            <h5>Silica content: greater than 93% SiO₂ (typically 94-97%)</h5>
            <h5>Alumina content: 0.2-1.5% Al₂O₃</h5>
            <h5>Temperature rating: Up to 1650°C (3000°F)</h5>
            <h5>Density: 1900-1950 kg/m³ (119-122 lbs/ft³)</h5>
            <h5>Standard dimensions: 230mm x 114mm x 65mm (9" x 4.5" x 2.5"), custom sizes available</h5>
            <h5>Thermal conductivity: 1.3-1.8 W/mK (varies with temperature)</h5>
            <h5>Cold crushing strength: 25-40 MPa</h5>
            <h5>Porosity: 20-25%</h5>
            <h5>Color: Light buff to white</h5>
            <h5>Refractoriness under load (T0.5): 1620-1650°C</h5>
            <h5>Permanent linear change: +1.5-2.0% (after initial heating)</h5>
            <h5>Thermal expansion coefficient: 13-15 x 10⁻⁶/°C (up to 600°C)</h5>
            <h5>Creep resistance: Excellent at high temperatures</h5>
            <h5>Special shapes: Arch, wedge, jamb, key, custom shapes available</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Silica bricks are utilized across various demanding high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Coke oven batteries (walls, crowns, regenerators)</li>
              <li>&#10004; &nbsp; Glass melting furnace superstructures and crowns</li>
              <li>&#10004; &nbsp; Glass tank regenerator chambers</li>
              <li>&#10004; &nbsp; Hot blast stove domes and upper sections</li>
              <li>&#10004; &nbsp; Acid-resistant linings in metallurgical furnaces</li>
              <li>&#10004; &nbsp; Copper converters and refineries</li>
              <li>&#10004; &nbsp; Electric arc furnace roofs</li>
              <li>&#10004; &nbsp; Soaking pit furnaces</li>
              <li>&#10004; &nbsp; Acid steel-making furnaces</li>
              <li>&#10004; &nbsp; Non-ferrous metal processing furnaces</li>
              <li>&#10004; &nbsp; High-temperature load-bearing structures</li>
              <li>&#10004; &nbsp; Ceramic kiln crowns</li>
              <li>&#10004; &nbsp; Areas requiring resistance to acidic slags</li>
              <li>&#10004; &nbsp; Applications requiring dimensional stability after initial expansion</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our silica bricks offer numerous advantages for demanding high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent load-bearing capacity at high temperatures</li>
              <li>&#10004; &nbsp; Superior resistance to acidic slags and environments</li>
              <li>&#10004; &nbsp; Exceptional dimensional stability after initial expansion</li>
              <li>&#10004; &nbsp; Outstanding creep resistance at elevated temperatures</li>
              <li>&#10004; &nbsp; High refractoriness</li>
              <li>&#10004; &nbsp; Good thermal conductivity</li>
              <li>&#10004; &nbsp; Excellent volume stability in service</li>
              <li>&#10004; &nbsp; Predictable expansion behavior</li>
              <li>&#10004; &nbsp; Resistance to deformation under load</li>
              <li>&#10004; &nbsp; Good resistance to thermal spalling (after initial heating)</li>
              <li>&#10004; &nbsp; Extended service life in appropriate applications</li>
              <li>&#10004; &nbsp; Ideal for structures requiring long-term dimensional stability</li>
              <li>&#10004; &nbsp; Cost-effective for specific high-temperature applications</li>
              <li>&#10004; &nbsp; Proven performance in traditional applications like coke ovens</li>
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


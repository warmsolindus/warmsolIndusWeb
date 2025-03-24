"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function SillimaniteBricks() {
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
                src="/images/SillimaniteBricks.png?height=288&width=288"
                alt="Sillimanite Bricks"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Sillimanite Bricks: Superior Thermal Shock Resistance for Critical Applications
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium sillimanite bricks provide exceptional performance in applications requiring superior
                thermal shock resistance and stability. Manufactured from high-quality sillimanite minerals (Al₂SiO₅),
                these specialized refractory products offer excellent load-bearing capacity at elevated temperatures,
                outstanding volume stability, and remarkable resistance to thermal cycling. Ideal for critical zones in
                industrial kilns and furnaces, our sillimanite bricks ensure reliable operation and extended service
                life in thermally demanding environments.
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
            Our sillimanite bricks are manufactured from high-quality sillimanite minerals (including sillimanite,
            kyanite, and andalusite), carefully processed and fired to create superior refractory products for
            applications requiring excellent thermal shock resistance.
            <h5>Composition: Al₂SiO₅ minerals (sillimanite, kyanite, andalusite)</h5>
            <h5>Alumina content: 60-65%</h5>
            <h5>Silica content: 30-35%</h5>
            <h5>Temperature rating: Up to 1650°C (3000°F)</h5>
            <h5>Density: 2400-2600 kg/m³ (150-162 lbs/ft³)</h5>
            <h5>Standard dimensions: 230mm x 114mm x 65mm (9" x 4.5" x 2.5"), custom sizes available</h5>
            <h5>Thermal conductivity: 1.5-2.0 W/mK (varies with temperature)</h5>
            <h5>Cold crushing strength: 50-80 MPa</h5>
            <h5>Porosity: 15-20%</h5>
            <h5>Color: Light cream to off-white</h5>
            <h5>Refractoriness under load (T0.5): 1550-1600°C</h5>
            <h5>Permanent linear change: ±0.1-0.2% (after heating)</h5>
            <h5>Thermal expansion coefficient: 4.5-5.5 x 10⁻⁶/°C</h5>
            <h5>Special shapes: Arch, wedge, custom shapes available</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Sillimanite bricks are utilized across various demanding high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Ceramic kiln furniture and supports</li>
              <li>&#10004; &nbsp; Glass tank furnace superstructures</li>
              <li>&#10004; &nbsp; Blast furnace hot blast stoves</li>
              <li>&#10004; &nbsp; Cement rotary kiln transition and upper zones</li>
              <li>&#10004; &nbsp; Aluminum melting furnace sidewalls</li>
              <li>&#10004; &nbsp; Ceramic tunnel kilns (roof and walls)</li>
              <li>&#10004; &nbsp; Coke oven regenerator chambers</li>
              <li>&#10004; &nbsp; Non-ferrous metal processing furnaces</li>
              <li>&#10004; &nbsp; Areas subject to frequent thermal cycling</li>
              <li>&#10004; &nbsp; Zones requiring excellent thermal shock resistance</li>
              <li>&#10004; &nbsp; High-temperature load-bearing applications</li>
              <li>&#10004; &nbsp; Petrochemical heaters and reformers</li>
              <li>&#10004; &nbsp; Critical zones in industrial kilns</li>
              <li>&#10004; &nbsp; Backup linings in severe thermal environments</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our sillimanite bricks offer numerous advantages for demanding high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Exceptional thermal shock resistance</li>
              <li>&#10004; &nbsp; Excellent volume stability at high temperatures</li>
              <li>&#10004; &nbsp; Superior resistance to thermal cycling</li>
              <li>&#10004; &nbsp; Low thermal expansion</li>
              <li>&#10004; &nbsp; Good load-bearing capacity at elevated temperatures</li>
              <li>&#10004; &nbsp; High refractoriness</li>
              <li>&#10004; &nbsp; Good resistance to slag attack</li>
              <li>&#10004; &nbsp; Excellent dimensional stability</li>
              <li>&#10004; &nbsp; Consistent performance in variable temperature conditions</li>
              <li>&#10004; &nbsp; Good spalling resistance</li>
              <li>&#10004; &nbsp; Moderate resistance to alkali attack</li>
              <li>&#10004; &nbsp; Extended service life in thermally demanding environments</li>
              <li>&#10004; &nbsp; Reduced maintenance and downtime</li>
              <li>&#10004; &nbsp; Ideal for applications with frequent heating and cooling cycles</li>
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


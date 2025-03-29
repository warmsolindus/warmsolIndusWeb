"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function InsulatingCastables() {
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
                src="/images/InsulatingCastables.png?height=288&width=288"
                alt="Insulating Castables"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Insulating Castables: Efficient Thermal Barriers with Installation Flexibility
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium insulating castables provide exceptional thermal efficiency with the versatility of
                cast-in-place installation. Engineered with lightweight aggregates and advanced binder systems, these
                specialized refractory materials offer excellent thermal insulation, good mechanical strength, and
                superior installation flexibility. Ideal for complex geometries, rapid turnarounds, and applications
                where preformed shapes are impractical, our insulating castables ensure optimal energy efficiency and
                reliable performance in high-temperature industrial environments.
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
            Our insulating castables are manufactured from carefully selected lightweight aggregates and
            high-performance binder systems, designed to provide excellent thermal insulation while maintaining adequate
            mechanical strength for high-temperature applications.
            <h5>Available types: Conventional, Low Cement (LC), Ultra-Low Cement (ULC), No Cement (NC)</h5>
            <h5>Temperature ratings: 800°C (1472°F) to 1600°C (2912°F) depending on grade</h5>
            <h5>Density range: 400-1200 kg/m³ (25-75 lbs/ft³) after drying</h5>
            <h5>Thermal conductivity: 0.1-0.4 W/mK (varies with temperature and density)</h5>
            <h5>Cold crushing strength: 0.5-5.0 MPa (depending on grade)</h5>
            <h5>Water addition: 45-90% (by weight of dry material)</h5>
            <h5>Setting time: 4-24 hours (depending on type and ambient conditions)</h5>
            <h5>Permanent linear change: -0.1 to -0.5% (after heating)</h5>
            <h5>Porosity: 50-85%</h5>
            <h5>Color: Off-white to light tan</h5>
            <h5>Installation methods: Casting, vibration casting, pumping</h5>
            <h5>Packaging: 25kg moisture-resistant bags, 1000kg bulk bags</h5>
            <h5>Shelf life: 6-12 months when stored properly in dry conditions</h5>
            Custom formulations available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Insulating castables are utilized across various high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Backup insulation for working linings in industrial furnaces</li>
              <li>&#10004; &nbsp; Kiln car tops and sides</li>
              <li>&#10004; &nbsp; Boiler insulation</li>
              <li>&#10004; &nbsp; Ladle covers and preheaters</li>
              <li>&#10004; &nbsp; Tundish linings</li>
              <li>&#10004; &nbsp; Furnace door linings</li>
              <li>&#10004; &nbsp; Peep sight frames</li>
              <li>&#10004; &nbsp; Flue and chimney linings</li>
              <li>&#10004; &nbsp; Thermal barriers in petrochemical equipment</li>
              <li>&#10004; &nbsp; Insulating layers in heat treatment furnaces</li>
              <li>&#10004; &nbsp; Complex shapes where preformed products are impractical</li>
              <li>&#10004; &nbsp; Rapid repair applications</li>
              <li>&#10004; &nbsp; Insulation for process vessels</li>
              <li>&#10004; &nbsp; Areas requiring monolithic (joint-free) construction</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our insulating castables offer numerous advantages for high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent thermal insulation properties</li>
              <li>&#10004; &nbsp; Low thermal conductivity</li>
              <li>&#10004; &nbsp; Lightweight yet structurally adequate</li>
              <li>&#10004; &nbsp; Installation flexibility for complex geometries</li>
              <li>&#10004; &nbsp; Monolithic (joint-free) construction</li>
              <li>&#10004; &nbsp; Good thermal shock resistance</li>
              <li>&#10004; &nbsp; Reduced heat storage capacity</li>
              <li>&#10004; &nbsp; Easy to install with conventional equipment</li>
              <li>&#10004; &nbsp; Can be pumped or vibration cast</li>
              <li>&#10004; &nbsp; Adaptable to irregular surfaces</li>
              <li>&#10004; &nbsp; Significant energy savings in thermal processes</li>
              <li>&#10004; &nbsp; Reduced cold face temperatures</li>
              <li>&#10004; &nbsp; Faster heat-up and cool-down cycles</li>
              <li>&#10004; &nbsp; Available in various formulations for specific applications</li>
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


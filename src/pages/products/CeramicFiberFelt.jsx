"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function CeramicFiberFelt() {
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
                src="/images/CFfelt.png?height=288&width=288"
                alt="Ceramic Fiber Felt"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Ceramic Fiber Felt: The Perfect Balance of Flexibility and Rigidity
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our ceramic fiber felts are wet laid uniform mats impregnated with a thermosetting resin, filling the
                gap between ceramic fiber blankets and boards. These unique materials are compressible yet resilient,
                with sufficient integrity to hold their shape in formed parts or gaskets. Their conformable nature makes
                them ideal for complex geometries while maintaining excellent thermal insulation properties in
                high-temperature applications.
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
            Our ceramic fiber felts are wet laid uniform mats manufactured from high-quality alumina-silica fibers and
            impregnated with a thermosetting resin. This unique manufacturing process creates a material that bridges
            the gap between flexible blankets and rigid boards.
            <h5>Manufacturing process: Wet laid, resin-impregnated</h5>
            <h5>Temperature ratings: 1000°C (1832°F), 1260°C (2300°F)</h5>
            <h5>Density range: 160-320 kg/m³ (10-20 lbs/ft³)</h5>
            <h5>Standard dimensions: 610mm x 1220mm, 1220mm x 1220mm (custom sizes available)</h5>
            <h5>Thickness range: 3mm to 25mm (1/8" to 1")</h5>
            <h5>Color: White to off-white</h5>
            <h5>Thermal conductivity: 0.07-0.15 W/mK (varies with temperature)</h5>
            <h5>Compressibility: 15-25% at 172 kPa (25 psi)</h5>
            <h5>Recovery: 80-90% after compression</h5>
            <h5>Resin content: 5-15% by weight</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Ceramic fiber felts are utilized across various high-temperature industrial applications where both
            conformability and shape retention are required:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; High-temperature gaskets and seals</li>
              <li>&#10004; &nbsp; Formed parts for complex geometries</li>
              <li>&#10004; &nbsp; Expansion joint fillers</li>
              <li>&#10004; &nbsp; Molten metal transfer systems</li>
              <li>&#10004; &nbsp; Die-cut insulation components</li>
              <li>&#10004; &nbsp; Backup insulation for refractory linings</li>
              <li>&#10004; &nbsp; Thermal barriers in foundries</li>
              <li>&#10004; &nbsp; Stress-relieving pads</li>
              <li>&#10004; &nbsp; Mold insulation in metal casting</li>
              <li>&#10004; &nbsp; Heat shields in metal processing</li>
              <li>&#10004; &nbsp; Insulation for irregular surfaces</li>
              <li>&#10004; &nbsp; Automotive heat shields</li>
              <li>&#10004; &nbsp; Appliance insulation components</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our ceramic fiber felts offer numerous advantages for high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Bridges the gap between blankets and boards</li>
              <li>&#10004; &nbsp; Compressible yet resilient structure</li>
              <li>&#10004; &nbsp; Excellent shape retention in formed parts</li>
              <li>&#10004; &nbsp; Uniform density and thickness</li>
              <li>&#10004; &nbsp; Conformable to complex geometries</li>
              <li>&#10004; &nbsp; Enhanced handling strength from resin content</li>
              <li>&#10004; &nbsp; Low thermal conductivity</li>
              <li>&#10004; &nbsp; High temperature stability</li>
              <li>&#10004; &nbsp; Good compression recovery</li>
              <li>&#10004; &nbsp; Resistant to most chemicals</li>
              <li>&#10004; &nbsp; Easy to cut and fabricate</li>
              <li>&#10004; &nbsp; Maintains integrity during installation</li>
              <li>&#10004; &nbsp; Excellent for die-cutting and forming</li>
              <li>&#10004; &nbsp; Available in various thicknesses and densities</li>
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


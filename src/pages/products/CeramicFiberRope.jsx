"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function CeramicFiberRope() {
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
                src="/images/CFrope.png?height=288&width=288"
                alt="Ceramic Fiber Rope"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Ceramic Fiber Rope: High-Temperature Sealing Solution
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium ceramic fiber rope provides exceptional thermal sealing and insulation in a flexible,
                resilient format. Manufactured by braiding or twisting high-quality ceramic fibers, this versatile
                material offers outstanding heat resistance, excellent compression recovery, and superior durability.
                Ideal for high-temperature gasketing, door seals, and expansion joints, our rope delivers reliable
                performance in demanding industrial environments up to 1260°C (2300°F).
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
            Our ceramic fiber rope is manufactured from high-quality ceramic fibers, braided or twisted into a flexible,
            resilient rope structure designed for high-temperature sealing and gasketing applications.
            <h5>Available forms: Round rope, square rope, twisted rope, braided rope</h5>
            <h5>Temperature ratings: 1000°C (1832°F), 1260°C (2300°F)</h5>
            <h5>Diameter/width range: 6mm to 50mm (¼" to 2")</h5>
            <h5>Density range: 300-600 kg/m³ (19-38 lbs/ft³)</h5>
            <h5>Color: White to off-white</h5>
            <h5>Construction: Braided, twisted, or knitted</h5>
            <h5>Reinforcement options: Fiberglass, wire insertion, inconel wire</h5>
            <h5>Compression recovery: Excellent (greate than 80%)</h5>
            <h5>Thermal conductivity: 0.08-0.16 W/mK (varies with temperature)</h5>
            <h5>Standard packaging: 10m, 25m, 50m rolls (custom lengths available)</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Ceramic fiber rope is utilized across various high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Furnace and kiln door seals</li>
              <li>&#10004; &nbsp; High-temperature expansion joints</li>
              <li>&#10004; &nbsp; Boiler door seals and gaskets</li>
              <li>&#10004; &nbsp; Pipe and flange insulation</li>
              <li>&#10004; &nbsp; Thermal barrier packing</li>
              <li>&#10004; &nbsp; Glass manufacturing equipment seals</li>
              <li>&#10004; &nbsp; Woodstove and fireplace door gaskets</li>
              <li>&#10004; &nbsp; Exhaust system sealing</li>
              <li>&#10004; &nbsp; Coke oven door seals</li>
              <li>&#10004; &nbsp; Crucible and ladle covers</li>
              <li>&#10004; &nbsp; Burner tube insulation</li>
              <li>&#10004; &nbsp; Catalytic converter sealing</li>
              <li>&#10004; &nbsp; Heat treating equipment</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our ceramic fiber rope offers numerous advantages for high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent thermal insulation properties</li>
              <li>&#10004; &nbsp; Superior compression recovery</li>
              <li>&#10004; &nbsp; Flexible and conformable to irregular surfaces</li>
              <li>&#10004; &nbsp; High temperature stability</li>
              <li>&#10004; &nbsp; Exceptional resistance to thermal shock</li>
              <li>&#10004; &nbsp; Low thermal conductivity</li>
              <li>&#10004; &nbsp; Resistant to most chemicals</li>
              <li>&#10004; &nbsp; Excellent vibration resistance</li>
              <li>&#10004; &nbsp; Easy to cut and install</li>
              <li>&#10004; &nbsp; Available with various reinforcements for increased durability</li>
              <li>&#10004; &nbsp; Good sound absorption properties</li>
              <li>&#10004; &nbsp; Long service life</li>
              <li>&#10004; &nbsp; Available in various diameters and constructions</li>
              <li>&#10004; &nbsp; Excellent sealing properties</li>
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

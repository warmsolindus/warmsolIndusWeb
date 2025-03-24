"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function CeramicFiberCloth() {
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
                src="/images/CFcloth.png?height=288&width=288"
                alt="Ceramic Fiber Cloth"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Ceramic Fiber Cloth: Textile-Grade High-Temperature Protection
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium ceramic fiber cloth provides exceptional thermal protection in a flexible, textile format.
                Woven from high-quality ceramic fiber yarns, this versatile material offers outstanding heat resistance,
                excellent handling characteristics, and superior durability. Ideal for applications requiring thin,
                conformable high-temperature barriers, our cloth delivers reliable performance in welding protection,
                expansion joints, gaskets, and various industrial heat shields.
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
            Our ceramic fiber cloth is woven from high-quality ceramic fiber yarns, creating a flexible, textile-grade
            material designed for high-temperature applications requiring thin, conformable thermal barriers.
            <h5>Available forms: Plain cloth, texturized cloth, coated cloth (vermiculite, silicone, etc.)</h5>
            <h5>Temperature ratings: 650°C (1200°F), 1000°C (1832°F), 1260°C (2300°F)</h5>
            <h5>Weight range: 400-1200 g/m² (12-36 oz/yd²)</h5>
            <h5>Standard widths: 910mm, 1000mm, 1520mm (36", 39", 60")</h5>
            <h5>Thickness range: 0.8mm to 3.0mm (1/32" to 1/8")</h5>
            <h5>Color: White to off-white (natural), black (with carbon coating)</h5>
            <h5>Weave patterns: Plain, satin, herringbone</h5>
            <h5>Tensile strength: 350-700 N/5cm (warp direction)</h5>
            <h5>Reinforcement options: Fiberglass, wire insertion, inconel wire</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Ceramic fiber cloth is utilized across various high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Welding curtains and blankets</li>
              <li>&#10004; &nbsp; Expansion joints and flexible connections</li>
              <li>&#10004; &nbsp; High-temperature gaskets and seals</li>
              <li>&#10004; &nbsp; Removable insulation covers</li>
              <li>&#10004; &nbsp; Furnace door linings and seals</li>
              <li>&#10004; &nbsp; Personnel protection shields</li>
              <li>&#10004; &nbsp; Molten metal splash protection</li>
              <li>&#10004; &nbsp; Thermal barriers in foundries</li>
              <li>&#10004; &nbsp; Exhaust system insulation</li>
              <li>&#10004; &nbsp; Fire barriers and curtains</li>
              <li>&#10004; &nbsp; Turbine insulation wraps</li>
              <li>&#10004; &nbsp; Heat treating operations</li>
              <li>&#10004; &nbsp; Cable and wire protection</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our ceramic fiber cloth offers numerous advantages for high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent thermal insulation in a thin profile</li>
              <li>&#10004; &nbsp; Superior flexibility and drapability</li>
              <li>&#10004; &nbsp; High tensile strength</li>
              <li>&#10004; &nbsp; Resistant to thermal shock</li>
              <li>&#10004; &nbsp; Excellent handling characteristics</li>
              <li>&#10004; &nbsp; Low thermal conductivity</li>
              <li>&#10004; &nbsp; Resistant to most chemicals</li>
              <li>&#10004; &nbsp; Easy to cut and fabricate</li>
              <li>&#10004; &nbsp; Conforms to irregular surfaces</li>
              <li>&#10004; &nbsp; Available with various coatings for enhanced performance</li>
              <li>&#10004; &nbsp; Reinforcement options for increased durability</li>
              <li>&#10004; &nbsp; Excellent resistance to mechanical vibration</li>
              <li>&#10004; &nbsp; Low heat storage capacity</li>
              <li>&#10004; &nbsp; Available in various weights and thicknesses</li>
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


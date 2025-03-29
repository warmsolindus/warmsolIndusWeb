"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function AcidProofBricks() {
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
                src="/images/AcidProofBricks.png?height=288&width=288"
                alt="Acid Proof Bricks"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Acid Proof Bricks: Superior Chemical Resistance for Corrosive Environments
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium acid proof bricks provide exceptional resistance to chemical attack in highly corrosive
                environments. Manufactured from carefully selected raw materials and fired at high temperatures, these
                specialized ceramic products offer outstanding durability, excellent impermeability, and superior
                resistance to acids, alkalis, and solvents. Ideal for chemical processing facilities, waste treatment
                plants, and industrial flooring, our acid proof bricks ensure long-lasting protection and reliable
                performance in the most demanding chemical environments.
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
            Our acid proof bricks are manufactured from high-quality ceramic materials, carefully processed and fired at
            high temperatures to create dense, impermeable products with exceptional resistance to chemical attack.
            <h5>Available types: Class A (General purpose), Class B (Heavy duty), Class C (Severe service)</h5>
            <h5>Silica content: 65-85% (varies by type)</h5>
            <h5>Alumina content: 10-25%</h5>
            <h5>Temperature rating: Up to 1100°C (2012°F)</h5>
            <h5>Density: 2100-2300 kg/m³ (131-144 lbs/ft³)</h5>
            <h5>Standard dimensions: 230mm x 114mm x 65mm (9" x 4.5" x 2.5"), custom sizes available</h5>
            <h5>
              Water absorption: {"<"}1% (Class A), {"<"}0.5% (Class B), {"<"}0.3% (Class C)
            </h5>
            <h5>Cold crushing strength: 35-70 MPa (depending on class)</h5>
            <h5>Acid resistance: {">"}98% (sulfuric acid test)</h5>
            <h5>Alkali resistance: Good to excellent (depending on class)</h5>
            <h5>Porosity: {"<"}6%</h5>
            <h5>Color: Red to dark red</h5>
            <h5>Chemical resistance pH range: 0-14</h5>
            <h5>Special shapes: Bullnose, cove base, corner, gutter, custom shapes available</h5>
            <h5>Surface finish: Smooth, textured, non-slip (for flooring applications)</h5>
            Custom specifications available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Acid proof bricks are utilized across various demanding chemical and industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Chemical processing plant floors and walls</li>
              <li>&#10004; &nbsp; Acid storage tanks and containment areas</li>
              <li>&#10004; &nbsp; Waste water treatment facilities</li>
              <li>&#10004; &nbsp; Pickling tanks in steel mills</li>
              <li>&#10004; &nbsp; Sulfuric acid plants</li>
              <li>&#10004; &nbsp; Fertilizer manufacturing facilities</li>
              <li>&#10004; &nbsp; Chemical reaction vessels</li>
              <li>&#10004; &nbsp; Neutralization tanks</li>
              <li>&#10004; &nbsp; Chimney linings in chemical plants</li>
              <li>&#10004; &nbsp; Dairy and food processing floors</li>
              <li>&#10004; &nbsp; Battery manufacturing facilities</li>
              <li>&#10004; &nbsp; Electroplating plants</li>
              <li>&#10004; &nbsp; Pharmaceutical manufacturing areas</li>
              <li>&#10004; &nbsp; Laboratory floors and drainage systems</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our acid proof bricks offer numerous advantages for demanding chemical environments:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Exceptional resistance to acids (including hydrofluoric, sulfuric, nitric)</li>
              <li>&#10004; &nbsp; Excellent resistance to alkalis and solvents</li>
              <li>&#10004; &nbsp; Superior chemical resistance across the full pH range (0-14)</li>
              <li>&#10004; &nbsp; Extremely low absorption rate</li>
              <li>&#10004; &nbsp; High density and low porosity</li>
              <li>&#10004; &nbsp; Excellent mechanical strength</li>
              <li>&#10004; &nbsp; Good abrasion resistance</li>
              <li>&#10004; &nbsp; Thermal stability in moderate temperature applications</li>
              <li>&#10004; &nbsp; Impermeable to liquids and gases</li>
              <li>&#10004; &nbsp; Easy to clean and maintain</li>
              <li>&#10004; &nbsp; Long service life in corrosive environments</li>
              <li>&#10004; &nbsp; Environmentally friendly and inert material</li>
              <li>&#10004; &nbsp; Available in various classes for different service conditions</li>
              <li>&#10004; &nbsp; Compatible with acid-resistant mortars and membranes</li>
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


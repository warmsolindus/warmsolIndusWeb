"use client"

import React, { useEffect } from "react"
import { Button, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function RammingMass() {
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
                src="/images/RammingMass.png?height=288&width=288"
                alt="Ramming Mass"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Ramming Mass: Versatile Monolithic Refractory Solution
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium ramming mass provides exceptional performance in high-temperature applications requiring
                custom-shaped monolithic linings. Engineered with carefully selected aggregates and binders, this
                versatile refractory material offers excellent thermal stability, superior mechanical strength, and
                outstanding resistance to thermal shock when properly installed. Ideal for furnace hearths, ladle
                bottoms, and complex-shaped linings, our ramming mass ensures reliable operation and extended service
                life in demanding industrial environments.
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
            Our ramming mass is manufactured from high-quality refractory aggregates and binders, designed to be
            installed by ramming or tamping to create monolithic linings that conform perfectly to the installation
            area.
            <h5>Available types: Silica, Alumina-Silica, High Alumina, Basic (Magnesia), Silicon Carbide</h5>
            <h5>Composition: Varies by type (40-99% primary oxide content)</h5>
            <h5>Temperature ratings: 1200°C (2192°F) to 1800°C (3272°F) depending on type</h5>
            <h5>Density range: 1800-2900 kg/m³ (112-181 lbs/ft³) after installation</h5>
            <h5>Thermal conductivity: 0.8-2.5 W/mK (varies with temperature and composition)</h5>
            <h5>Cold crushing strength: 25-80 MPa (depending on type and installation)</h5>
            <h5>Moisture content: 2-8% (as supplied)</h5>
            <h5>Grain size distribution: Optimized for maximum packing density</h5>
            <h5>Permanent linear change: -0.1 to -0.5% (after heating)</h5>
            <h5>Porosity: 15-25% (after installation)</h5>
            <h5>Color: Varies by composition (tan, gray, white, black)</h5>
            <h5>Installation methods: Pneumatic ramming, manual ramming, vibration</h5>
            <h5>Packaging: 25kg moisture-resistant bags, 1000kg bulk bags</h5>
            <h5>Shelf life: 6-12 months when stored properly in dry conditions</h5>
            <h5>Bonding types: Ceramic, chemical, hydraulic, carbon</h5>
            Custom formulations available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Ramming mass is utilized across various demanding high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Induction furnace linings</li>
              <li>&#10004; &nbsp; Electric arc furnace (EAF) hearths</li>
              <li>&#10004; &nbsp; Ladle bottoms and impact areas</li>
              <li>&#10004; &nbsp; Blast furnace troughs and runners</li>
              <li>&#10004; &nbsp; Cupola furnace linings</li>
              <li>&#10004; &nbsp; Aluminum melting furnace linings</li>
              <li>&#10004; &nbsp; Copper and non-ferrous metal processing furnaces</li>
              <li>&#10004; &nbsp; Tundish linings</li>
              <li>&#10004; &nbsp; Tap holes and tap hole repairs</li>
              <li>&#10004; &nbsp; Foundry equipment linings</li>
              <li>&#10004; &nbsp; Crucible furnace linings</li>
              <li>&#10004; &nbsp; Complex-shaped monolithic linings</li>
              <li>&#10004; &nbsp; Patching and repair of existing linings</li>
              <li>&#10004; &nbsp; Areas requiring custom-shaped refractory linings</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our ramming mass offers numerous advantages for demanding high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent conformity to complex shapes</li>
              <li>&#10004; &nbsp; Superior mechanical strength when properly installed</li>
              <li>&#10004; &nbsp; Good thermal shock resistance</li>
              <li>&#10004; &nbsp; Excellent volume stability at high temperatures</li>
              <li>&#10004; &nbsp; Monolithic (joint-free) construction</li>
              <li>&#10004; &nbsp; Good resistance to slag penetration</li>
              <li>&#10004; &nbsp; Excellent abrasion and erosion resistance</li>
              <li>&#10004; &nbsp; Adaptable to various installation methods</li>
              <li>&#10004; &nbsp; Can be installed in confined spaces</li>
              <li>&#10004; &nbsp; Suitable for both new installations and repairs</li>
              <li>&#10004; &nbsp; Extended service life when properly installed</li>
              <li>&#10004; &nbsp; Reduced downtime for installation compared to brick linings</li>
              <li>&#10004; &nbsp; Available in various compositions for specific applications</li>
              <li>&#10004; &nbsp; Cost-effective solution for complex-shaped linings</li>
            </ul>
          </AccordionBody>
        </Accordion>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-6 md:mx-20 my-10 px-6 py-8 bg-white rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Installation Guidelines</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4 text-indigo-600">Preparation</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">1.</span>
                <span>Ensure the installation area is clean, dry, and free of debris</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">2.</span>
                <span>Apply appropriate release agent to surfaces where the ramming mass should not adhere</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">3.</span>
                <span>Install anchors or reinforcement if required by the application</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">4.</span>
                <span>Ensure proper ventilation in the installation area</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">5.</span>
                <span>Verify that the ramming mass is at the recommended temperature (typically 10-30°C)</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4 text-indigo-600">Installation</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">1.</span>
                <span>Apply the ramming mass in layers of 50-100mm thickness</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">2.</span>
                <span>Compact each layer thoroughly using pneumatic rammers or manual tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">3.</span>
                <span>Ensure uniform compaction throughout the lining</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">4.</span>
                <span>Pay special attention to corners and complex shapes</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">5.</span>
                <span>Finish the surface as required for the application</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4 text-indigo-600">Drying & Firing</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">1.</span>
                <span>Allow the installed ramming mass to air dry for 24-48 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">2.</span>
                <span>Follow the recommended heat-up schedule (typically 25-50°C per hour)</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">3.</span>
                <span>Hold at critical temperatures as specified in the product documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">4.</span>
                <span>Continue heating to the operating temperature</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">5.</span>
                <span>Maintain proper ventilation during the entire heating process</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4 text-indigo-600">Safety Considerations</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">1.</span>
                <span>Always wear appropriate personal protective equipment (PPE)</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">2.</span>
                <span>Follow all safety guidelines provided in the product documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">3.</span>
                <span>Ensure proper ventilation during installation and initial heating</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">4.</span>
                <span>Be aware of potential dust hazards and take appropriate precautions</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">5.</span>
                <span>Follow all applicable safety regulations and company procedures</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <div>
        <FooterWithSitemap />
      </div>
    </div>
  )
}


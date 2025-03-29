"use client"

import React, { useEffect, useState } from "react"
import {
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar"
import FooterWithSitemap from "../../components/Footer"
import { motion } from "framer-motion"

export default function DenseRefractoryCastable() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [openAcc1, setOpenAcc1] = React.useState(true)
  const [openAcc2, setOpenAcc2] = React.useState(true)
  const [openAcc3, setOpenAcc3] = React.useState(true)
  const [activeTab, setActiveTab] = useState("low-cement")

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

  const tabData = [
    {
      label: "Low Cement Castables",
      value: "low-cement",
      image: "/images/lowCement.png",
      description:
        "Our Low Cement Castables (LCC) contain reduced calcium oxide content (1-2.5%), resulting in superior performance at high temperatures. These advanced formulations offer excellent thermal shock resistance, reduced porosity, and enhanced hot strength compared to conventional castables.",
      features: [
        "Calcium oxide content: 1-2.5%",
        "Superior hot strength and volume stability",
        "Reduced porosity and permeability",
        "Excellent thermal shock resistance",
        "Faster drying and heating schedules",
        "Reduced risk of explosive spalling",
      ],
    },
    {
      label: "High Alumina Castables",
      value: "high-alumina",
      image: "/images/highAluminaCastables.png",
      description:
        "Our High Alumina Refractory Castables contain elevated alumina content (70-95% Al₂O₃), providing exceptional performance in severe high-temperature environments. These premium formulations offer outstanding resistance to chemical attack, excellent mechanical strength, and superior refractoriness.",
      features: [
        "Alumina content: 70-95% Al₂O₃",
        "Exceptional resistance to chemical attack",
        "Superior mechanical strength at high temperatures",
        "Excellent resistance to slag penetration",
        "High refractoriness (up to 1800°C)",
        "Enhanced abrasion and erosion resistance",
      ],
    },
    {
      label: "Self Flow Castables",
      value: "self-flow",
      image: "/images/selfFlowCastable.png",
      description:
        "Our Self Flow Castables are engineered with advanced dispersing systems that enable placement without vibration. These innovative formulations offer exceptional flowability while maintaining excellent mechanical properties and thermal performance, making them ideal for complex shapes and difficult-to-access areas.",
      features: [
        "Self-leveling properties without vibration",
        "Excellent filling of complex shapes and reinforcements",
        "Reduced installation time and labor costs",
        "Consistent density and properties throughout the lining",
        "Minimized risk of installation defects",
        "Suitable for pumping applications",
      ],
    },
  ]

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
                src="/images/denseCastables.png?height=288&width=288"
                alt="Dense Refractory Castable"
              />
            </div>
            <div className="p-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="uppercase tracking-wide text-xl text-indigo-500 font-extrabold"
              >
                Dense Refractory Castables: Superior Performance for Extreme Conditions
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="my-2 text-sm text-slate-500"
              >
                Our premium dense refractory castables provide exceptional performance in the most demanding
                high-temperature applications. Engineered with carefully selected aggregates and advanced binder
                systems, these versatile monolithic materials offer outstanding mechanical strength, excellent thermal
                shock resistance, and superior durability. Available in various formulations including low cement, high
                alumina, and self-flowing types, our dense castables ensure reliable operation and extended service life
                in extreme industrial environments.
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
            Our dense refractory castables are manufactured from premium raw materials and advanced binder systems,
            designed to provide excellent mechanical strength and thermal performance in severe high-temperature
            applications.
            <h5>
              Available types: Conventional, Low Cement (LCC), Ultra-Low Cement (ULCC), No Cement (NCC), Self-Flow
            </h5>
            <h5>Alumina content: 40-95% (varies by grade)</h5>
            <h5>Temperature ratings: 1200°C (2192°F) to 1800°C (3272°F) depending on grade</h5>
            <h5>Density range: 2200-2800 kg/m³ (137-175 lbs/ft³) after drying</h5>
            <h5>Thermal conductivity: 1.0-2.5 W/mK (varies with temperature and composition)</h5>
            <h5>Cold crushing strength: 40-120 MPa (depending on grade)</h5>
            <h5>Water addition: 4-10% (by weight of dry material)</h5>
            <h5>Setting time: 4-24 hours (depending on type and ambient conditions)</h5>
            <h5>Permanent linear change: -0.1 to -0.3% (after heating)</h5>
            <h5>Porosity: 12-22%</h5>
            <h5>Color: Varies by composition (tan, gray, white)</h5>
            <h5>Installation methods: Casting, vibration casting, pumping, shotcreting</h5>
            <h5>Packaging: 25kg moisture-resistant bags, 1000kg bulk bags</h5>
            <h5>Shelf life: 6-12 months when stored properly in dry conditions</h5>
            Custom formulations available for specific requirements
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader onClick={handleOpenAcc2}>Applications</AccordionHeader>
          <AccordionBody>
            Dense refractory castables are utilized across various demanding high-temperature industrial applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Common Applications:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Steel ladle linings</li>
              <li>&#10004; &nbsp; Electric arc furnace (EAF) delta and sidewalls</li>
              <li>&#10004; &nbsp; Blast furnace troughs and runners</li>
              <li>&#10004; &nbsp; Cement kiln burner pipes and nose rings</li>
              <li>&#10004; &nbsp; Aluminum melting furnace linings</li>
              <li>&#10004; &nbsp; Glass furnace regenerator checkers</li>
              <li>&#10004; &nbsp; Petrochemical reactor linings</li>
              <li>&#10004; &nbsp; Incinerator linings</li>
              <li>&#10004; &nbsp; Copper converter linings</li>
              <li>&#10004; &nbsp; Tundish linings</li>
              <li>&#10004; &nbsp; Torpedo ladle linings</li>
              <li>&#10004; &nbsp; Areas subject to severe mechanical stress</li>
              <li>&#10004; &nbsp; Zones requiring excellent abrasion resistance</li>
              <li>&#10004; &nbsp; Applications requiring monolithic (joint-free) construction</li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader onClick={handleOpenAcc3}>Features and Benefits</AccordionHeader>
          <AccordionBody>
            Our dense refractory castables offer numerous advantages for demanding high-temperature applications:
            <ul>
              <li> &nbsp;</li>
              <li className="font-extrabold"> &nbsp; Key Features:</li>
              <li> &nbsp; </li>
              <li>&#10004; &nbsp; Excellent mechanical strength at high temperatures</li>
              <li>&#10004; &nbsp; Superior resistance to thermal shock</li>
              <li>&#10004; &nbsp; Outstanding resistance to slag penetration</li>
              <li>&#10004; &nbsp; Excellent abrasion and erosion resistance</li>
              <li>&#10004; &nbsp; Good chemical resistance</li>
              <li>&#10004; &nbsp; Monolithic (joint-free) construction</li>
              <li>&#10004; &nbsp; Installation flexibility for complex geometries</li>
              <li>&#10004; &nbsp; Adaptable to various installation methods</li>
              <li>&#10004; &nbsp; Reduced downtime for installation compared to brick linings</li>
              <li>&#10004; &nbsp; Excellent volume stability</li>
              <li>&#10004; &nbsp; Extended service life in severe conditions</li>
              <li>&#10004; &nbsp; Reduced maintenance and downtime</li>
              <li>&#10004; &nbsp; Available in various formulations for specific applications</li>
              <li>&#10004; &nbsp; Suitable for both new installations and repairs</li>
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
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Types of Dense Refractory Castables</h2>

        <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
          <TabsHeader className="bg-gray-100 p-1">
            {tabData.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className={activeTab === value ? "text-gray bg-orange-500 font-medium" : "text-black bg-orange-500 font-medium"}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {tabData.map(({ value, image, description, features }) => (
              <TabPanel key={value} value={value} className="py-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={image}
                      alt={value}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-gray-700 mb-4"
                    >
                      {description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">Key Features:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-indigo-500 mr-2">&#10004;</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </motion.div>

      <div>
        <FooterWithSitemap />
      </div>
    </div>
  )
}


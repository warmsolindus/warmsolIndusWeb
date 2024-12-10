import React, { useEffect } from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";
import FooterWithSitemap from "../components/Footer";

const serviceCategories = [
  "Pipes & Fittings",
  "Electrical & Instrumentation Materials",
  "Hand Tools & Consumables",
];

export default function ProcurementServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-amber-50">
      <NavigationbarWithDropdownMultilevelMenu />

      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <img
            src="/images/procurement.jpeg?height=800&width=1200"
            alt="Warehouse"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <Typography
            variant="h1"
            color="white"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
          >
            PROCUREMENT SERVICES
          </Typography>
        </div>
      </div>

      {/* Services Navigation */}
      <div className="bg-deep-orange-800 w-full overflow-x-auto sticky top-24 z-40">
        <div className="flex flex-nowrap justify-start md:justify-center gap-5 md:gap-10 p-4 min-w-max md:min-w-0">
          {serviceCategories.map((category, index) => (
            <Button
              key={index}
              variant="text"
              color="white"
              className="normal-case text-sm md:text-base"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-4">
                Our Procurement Expertise
              </Typography>
              <Typography className="text-gray-700">
                We specialize in sourcing and supplying a comprehensive range of
                industrial materials and equipment. Our procurement services are
                designed to streamline your supply chain and ensure you get the
                highest quality products at competitive prices.
              </Typography>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-4">
                Why Choose Our Services?
              </Typography>
              <ul className="list-disc list-inside text-gray-700 font-bol space-y-2">
                <li>Global sourcing network</li>
                <li>Quality-assured products</li>
                <li>Competitive pricing</li>
                <li>Timely delivery</li>
                <li>Technical support</li>
              </ul>
            </CardBody>
          </Card>
        </div>

        {/* Product Categories */}
        <Typography variant="h3" color="blue-gray" className="mb-8 text-center">
          Our Product Categories
        </Typography>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardBody> 
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {category}
                </Typography>
                <Typography className="text-gray-700">
                  High-quality {category.toLowerCase()} sourced from trusted manufacturers and suppliers worldwide.
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div> */}
      </div>

      <FooterWithSitemap />
    </div>
  );
}

// import React, {useState} from 'react';
// import {
//   Typography,
//   Card,
//   CardBody,
//   CardHeader,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from '@material-tailwind/react';
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import FooterWithSitemap from '../components/Footer';
// import NavigationbarWithDropdownMultilevelMenu from '../components/Navbar';

// export default function ProcurementServices() {
//   const [open, setOpen] = React.useState(1);

//   const handleOpen = (value) => setOpen(open === value ? 0 : value);

//   const categories = [
//     {
//       title: "Pipes & Fittings",
//       description: "HIGRON is a one stop solution for all your Pipes, Tubes, Pipe Fittings & Flanges requirements in a variety of sectors including oil and gas, petrochemicals, fertilizers, marine industry, paper industry, and many more. Our products comply with BS, ANSI, JIS, DIN & API standards.",
//       products: [
//         "Steel Pipes (CS, SS, ALLOY,DUPLEX etc)",
//         "Steel Tubes",
//         "Steel Plates",
//         "Steel Sheets",
//         "Steel Bars",
//         "Butt weld fittings",
//         "Forged Fittings",
//         "Compression Fittings",
//         "Any kind of Machined Components"
//       ]
//     },
//     {
//       title: "Pipes & Fittings",
//       description: "We offer a wide range of welding equipment, consumables, and accessories for all your welding and cutting needs in Middle East, Europe and North America.",
//       products: [
//         "Carbon Steel",
//         "ss",
//         "Welding Tig Rodes",
//         "Welding Machines",
//         "Welding Oven",
//         "Welding Consumables"
//       ]
//     },
//     {
//       title: "Capital Spares & Equipments",
//       description: "We offer a number of capital spares and equipments from renowned manufacturers. Our scope of supply include a wide range of valves which comply with BS, ANSI, JIS, DIN & API standards.",
//       products: [
//         "Industrial Boilers",
//         "Motorized Pulley",
//         "Conveyor Belt",
//         "Rollers",
//         "Scrapers",
//         "Idlers",
//         "Control Valve",
//         "Plug Valve",
//         "Butterfly Valve",
//         "Ball Valve",
//         "Check Valve",
//         "Gate Valve"
//       ]
//     }
//   ];

//   const navigationItems = [
//     "Pipes & Fittings",
//     "Welding",
//     "Capital Spares & Equipments",
//   ];

//   return (
//     <div className="min-h-screen bg-amber-50">
//         <NavigationbarWithDropdownMultilevelMenu />
//       {/* Hero Section */}
//       <div className="relative h-[70vh] w-full">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/images/procurement.jpeg?height=400&width=1200')",
//             backgroundColor: 'rgba(0, 0, 0, 0.6)',
//             backgroundBlend: 'overlay'
//           }}
//         >
//           <div className="container mx-auto h-full flex items-center justify-center">
//             <Typography variant="h1" color="white" className="text-center">
//               PROCUREMENT SERVICES
//             </Typography>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <div className="bg-deep-orange-800 sticky top-24 z-50">
//         <div className="container mx-auto overflow-x-auto">
//           <div className="flex whitespace-nowrap py-4 justify-center">
//             {navigationItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
//                 className="text-white px-4 hover:text-blue-200 transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-12">
//         {/* Introduction */}
//         <div className="max-w-4xl mx-auto mb-16">
//           <Typography variant="h2" color="blue-gray" className="mb-6">
//             PROCUREMENT SOLUTIONS TAILORED FOR YOU
//           </Typography>
//           <Typography variant="lead" className="mb-6">
//             HIGRON provides a one-stop shop for procurement of long-tail industrial products and high-value capital goods
//             used in a wide range of industries including oil, gas, and petrochemical industries.
//           </Typography>
//           <Typography variant="paragraph" className="text-gray-700">
//             We provide complete solutions consisting of Identifying, Analysing, Locating, Purchasing, and Supplying all
//             kinds of industrial materials and spare parts for oil, gas, and petrochemical industries. Specializing in
//             Maintenance, Repair & Operations (MRO) products across a wide range of categories.
//           </Typography>
//         </div>

//         {/* Categories */}
//         <div className="space-y-6">
//           {categories.map((category, index) => (
//             <Card key={index} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
//               <CardHeader
//                 color="deep-orange"
//                 className="p-6"
//                 onClick={() => handleOpen(index + 1)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <div className="flex items-center justify-between">
//                   <Typography variant="h5" color="white">
//                     {category.title}
//                   </Typography>
//                   <ChevronDownIcon
//                     className={`h-6 w-6 text-white transition-transform ${
//                       open === index + 1 ? "rotate-180" : ""
//                     }`}
//                   />
//                 </div>
//               </CardHeader>
//               {open === index + 1 && (
//                 <CardBody>
//                   <Typography className="mb-4">
//                     {category.description}
//                   </Typography>
//                   <ul className="list-disc list-inside space-y-2">
//                     {category.products.map((product, productIndex) => (
//                       <li key={productIndex} className="text-gray-700">
//                         {product}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardBody>
//               )}
//             </Card>
//           ))}
//         </div>
//       </div>
//       <FooterWithSitemap />
//     </div>
//   );
// }

// import React, { useEffect } from "react";
// import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
// import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";
// import FooterWithSitemap from "../components/Footer";

// const serviceCategories = [
//   "Pipes & Fittings",
//   "Electrical & Instrumentation Materials",
//   "Hand Tools & Consumables",
// ];

// export default function ProcurementServices() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="min-h-screen bg-amber-50">
//       <NavigationbarWithDropdownMultilevelMenu />

//       {/* Hero Section */}
//       <div className="relative h-[80vh] w-full">
//         <div className="absolute inset-0">
//           <img
//             src="/images/procurement.jpeg?height=800&width=1200"
//             alt="Warehouse"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/50" />
//         </div>
//         <div className="relative h-full flex items-center justify-center">
//           <Typography
//             variant="h1"
//             color="white"
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
//           >
//             PROCUREMENT SERVICES
//           </Typography>
//         </div>
//       </div>

//       {/* Services Navigation */}
//       <div className="bg-deep-orange-800 w-full overflow-x-auto sticky top-24 z-40">
//         <div className="flex flex-nowrap justify-start md:justify-center gap-5 md:gap-10 p-4 min-w-max md:min-w-0">
//           {serviceCategories.map((category, index) => (
//             <Button
//               key={index}
//               variant="text"
//               color="white"
//               className="normal-case text-sm md:text-base"
//             >
//               {category}
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//           <Card>
//             <CardBody>
//               <Typography variant="h4" color="blue-gray" className="mb-4">
//                 Our Procurement Expertise
//               </Typography>
//               <Typography className="text-gray-700">
//                 We specialize in sourcing and supplying a comprehensive range of
//                 industrial materials and equipment. Our procurement services are
//                 designed to streamline your supply chain and ensure you get the
//                 highest quality products at competitive prices.
//               </Typography>
//             </CardBody>
//           </Card>
//           <Card>
//             <CardBody>
//               <Typography variant="h4" color="blue-gray" className="mb-4">
//                 Why Choose Our Services?
//               </Typography>
//               <ul className="list-disc list-inside text-gray-700 font-bol space-y-2">
//                 <li>Global sourcing network</li>
//                 <li>Quality-assured products</li>
//                 <li>Competitive pricing</li>
//                 <li>Timely delivery</li>
//                 <li>Technical support</li>
//               </ul>
//             </CardBody>
//           </Card>
//         </div>

//         {/* Product Categories */}
//         <Typography variant="h3" color="blue-gray" className="mb-8 text-center">
//           Our Product Categories
//         </Typography>

//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {serviceCategories.map((category, index) => (
//             <Card key={index} className="hover:shadow-lg transition-shadow">
//               <CardBody>
//                 <Typography variant="h5" color="blue-gray" className="mb-2">
//                   {category}
//                 </Typography>
//                 <Typography className="text-gray-700">
//                   High-quality {category.toLowerCase()} sourced from trusted manufacturers and suppliers worldwide.
//                 </Typography>
//               </CardBody>
//             </Card>
//           ))}
//         </div> */}
//       </div>

//       <FooterWithSitemap />
//     </div>
//   );

import { useEffect } from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";
import FooterWithSitemap from "../components/Footer";
import { list } from "postcss";

const serviceCategories = [
  "Pipes & Fittings",
  "Electrical Materials",
  "Hazardous and Non-Hazardous Fittings",
  "Cables and Cable Ladders",
  "Instrumentation Tubes",
  "Tube Fittings for Petroleum Constructions",
  "Conduit and Conduit Fittings",
];

const productCategories = [
  {
    title: "Pipe and Fittings",
    image: "/images/pipesNfittings.png?height=200&width=300",
    description:
      "Comprehensive range of high-quality pipes and fittings for various industrial applications, including water supply, gas & oil distribution, and chemical processing. Our products ensure leak-free connections and long-lasting performance.",
  },
  {
    title: "Electrical Materials",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Wide selection of electrical components for industrial and domestic use, including switchgears, transformers, control panels, and wiring accessories. We provide reliable solutions for all your electrical needs.",
  },
  {
    title: "Hazardous and Non-Hazardous Fittings",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Specialized fittings designed for both hazardous and non-hazardous environments, ensuring safety and compliance in all conditions. Our products meet strict industry standards and regulations.",
  },
  {
    title: "Cables and Cable Ladders",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Extensive range of cables and cable management solutions, including power cables, fiber optics, and robust cable ladder systems. We offer products that ensure efficient and organized cable installations.",
  },
  {
    title: "Instrumentation Tubes",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Precision instrumentation tubes for various industrial applications, ensuring accurate measurements and reliable performance. Our tubes are suitable for high-pressure and corrosive environments.",
  },
  {
    title: "Tube Fittings for Petroleum Constructions",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Specialized tube fittings designed for the demanding requirements of petroleum industry constructions. Our fittings provide secure connections and resist extreme temperatures and pressures.",
  },
  {
    title: "Conduit and Conduit Fittings",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Comprehensive range of conduits and fittings for electrical and communication cable protection in diverse environments. We offer solutions that ensure safety and longevity of your electrical systems.",
  },
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
        {/* <Typography variant="h3" color="blue-gray" className="mb-8 text-center">
          Our Product Categories
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader floated={false} className="h-56">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {category.title}
                </Typography>
                <Typography className="text-gray-700">{category.description}</Typography>
              </CardBody>
            </Card>
          ))}
        </div> */}
        {/* Product Categories */}
        <Typography variant="h3" color="blue-gray" className="mb-8 text-center">
          Our Product Categories
        </Typography>
        <div className="space-y-8">
          {productCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6">
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {category.title}
                  </Typography>
                  <Typography className="text-gray-700">
                    {category.description}
                  </Typography>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <FooterWithSitemap />
    </div>
  );
}

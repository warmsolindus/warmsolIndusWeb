// import React, { useEffect } from "react";
// import { Typography, Button } from "@material-tailwind/react";
// import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";
// import FooterWithSitemap from "../components/Footer";
// import { Link } from "react-router-dom";
// export default function Home() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="bg-amber-100">
//       <NavigationbarWithDropdownMultilevelMenu />
//       <div>
//         <img
//           className="mt-2 h-95 w-[100%] object-cover object-center bg-fixed bg-center bg-cover"
//           src="./src/images/bgfactoryimg.jpg"
//           alt="factory image"
//         />
//       </div>
//       <div className="mt-16 text-left ml-9 max-w-[700px]">
//         <div>
//           <Typography variant="h4" className="">
//             ABOUT US
//           </Typography>
//           <Typography variant="paragraph" className="my-3 tracking-wider">
//             Welcome to Warmsol Industries, your trusted partner in premium
//             industrial solutions. With a steadfast commitment to excellence, we
//             specialize in providing top-tier Insulation Materials, Metal
//             Jacketing Materials and Accessories, and Refractory Materials,
//             alongside Comprehensive Procurement Services tailored to meet the
//             unique demands of our clients.
//           </Typography>
//           <Link to={"/about-us"}>
//           <Button className="rounded-full py-4 my-3" color="deep-orange">
//             View More!
//           </Button>
//           </Link>
//         </div>
//         <div className="my-8">
//           <Typography variant="h6" color="deep-purple" className="mt-5">
//             WHO WE ARE?
//           </Typography>
//           <Typography variant="paragraph" className="mt-3 tracking-wider">
//             At Warmsol Industries, we are driven by a passion for innovation and
//             quality. Our expertise lies in delivering products and services that
//             enhance operational efficiency, ensure durability, and provide
//             cost-effective solutions for industries worldwide. Whether
//             safeguarding systems from heat loss or ensuring structural integrity
//             with high-performance refractory materials, our solutions are
//             engineered to excel under the most challenging conditions.
//           </Typography>
//         </div>
//       </div>

//       <div className="px-10 w-[92%] mx-auto rounded-lg bg-[url('./src/images/tortoise-shell.svg')]">
//         <div>
//           <Typography
//             variant="h3"
//             className="pt-6 text-center"
//             color="blue-gray"
//           >
//             WHAT WE DO?
//           </Typography>
//         </div>
//         <div className="flex flex-wrap w-[100%] h-80">
//           <div className="md:w-1/2">
//             <div className="text-left text-2xl font-extrabold py-8">
//               Manufacturing Division
//             </div>
//             <div>
//               <div className="flex flex-wrap gap-2 w-[100%]">
//                 <Link to={"/insulation-materials"}>
//                   <Button className="rounded-full" color="">
//                     insulation materials
//                   </Button>
//                 </Link>
//                 <Link to={"/metal-jacketing-materials"}>
//                   <Button className="rounded-full" color="white">
//                     metal jacketing materials
//                   </Button>
//                 </Link>
//                 <Button className="rounded-full" color="white">
//                   Insulation &cladding Accessories
//                 </Button>
//                 <Button className="rounded-full" color="">
//                   refractory materials
//                 </Button>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <div className="text-left text-2xl font-extrabold py-8">
//               Industrial Material Supply
//             </div>
//             <div>
//               <div className="flex flex-wrap gap-2 w-[100%]">
//                 <Button className="rounded-full" color="">
//                   metal jacketing materials
//                 </Button>
//                 <Button className="rounded-full" color="white">
//                   insulation materials
//                 </Button>
//                 <Button className="rounded-full" color="white">
//                   Insulation &cladding Accessories
//                 </Button>
//                 <Button className="rounded-full" color="">
//                   refractory materials
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         WHO WE SERVE
//       </div>
//       <FooterWithSitemap />
//     </div>
//   );
// }

import React, { useEffect } from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@material-tailwind/react";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";
import FooterWithSitemap from "../components/Footer";
import { Link } from "react-router-dom";
import { ImageCarousel } from "../components/Carousel";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const industries = [
    { name: "Oil & Gas", image: "./src/images/oil-gas.png" },
    { name: "Petrochemical", image: "./src/images/petrochemical.png" },
    { name: "Fertilizer", image: "./src/images/fertilizer.png" },
    { name: "Steel", image: "./src/images/steel.png" },
    { name: "Water Treatment", image: "./src/images/water-treatment.png" },
    { name: "Power Generation", image: "./src/images/power-generation.png" },
  ];
  const clients = [
    "/placeholder.svg?height=80&width=160",
    "/placeholder.svg?height=80&width=160",
    "/placeholder.svg?height=80&width=160",
    "/placeholder.svg?height=80&width=160",
    "/placeholder.svg?height=80&width=160",
    "/placeholder.svg?height=80&width=160"
  ];

  return (
    <div className="bg-amber-100">
      <NavigationbarWithDropdownMultilevelMenu />
      <ImageCarousel />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Typography variant="h4" className="mb-4 text-center sm:text-left">
            ABOUT US
          </Typography>
          <Typography
            variant="paragraph"
            className="mb-6 tracking-wider text-center sm:text-left"
          >
            Welcome to Warmsol Industries, your trusted partner in premium
            industrial solutions. With a steadfast commitment to excellence, we
            specialize in providing top-tier Insulation Materials, Metal
            Jacketing Materials and Accessories, and Refractory Materials,
            alongside Comprehensive Procurement Services tailored to meet the
            unique demands of our clients.
          </Typography>
          <div className="text-center sm:text-left">
            <Link to={"/about-us"}>
              <Button className="rounded-full py-2 px-4" color="deep-orange">
                View More!
              </Button>
            </Link>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-12">
          <Typography
            variant="h6"
            color="deep-purple"
            className="mb-4 text-center sm:text-left"
          >
            WHO WE ARE?
          </Typography>
          <Typography
            variant="paragraph"
            className="tracking-wider text-center sm:text-left"
          >
            At Warmsol Industries, we are driven by a passion for innovation and
            quality. Our expertise lies in delivering products and services that
            enhance operational efficiency, ensure durability, and provide
            cost-effective solutions for industries worldwide. Whether
            safeguarding systems from heat loss or ensuring structural integrity
            with high-performance refractory materials, our solutions are
            engineered to excel under the most challenging conditions.
          </Typography>
        </div>
      </div>
      <div className=" w-[98%] mx-auto px-4 sm:px-6 py-12 lg:px-8 bg-[url('./src/images/protruding-squares.svg')] bg-fixed rounded-lg">
        <div className="max-w-7xl mx-auto">
          <Typography variant="h3" className="mb-8 text-center" color="white">
            WHAT WE DO?
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Typography
                variant="h4"
                color="lime"
                className="mb-4 font-bold text-center md:text-left"
              >
                MANUFACTURING DIVISION
              </Typography>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Link to={"/insulation-materials"}>
                  <Button className="rounded-full mb-2" color="blue-gray">
                    Insulation Materials
                  </Button>
                </Link>
                <Link to={"/metal-jacketing-materials"}>
                  <Button className="rounded-full mb-2" color="gray">
                    Metal Jacketing Materials
                  </Button>
                </Link>
                <Button className="rounded-full mb-2" color="gray">
                  Insulation & Cladding Accessories
                </Button>
                <Button className="rounded-full mb-2" color="blue-gray">
                  Refractory Materials
                </Button>
              </div>
            </div>
            <div>
              <Typography
                variant="h4"
                color="lime"
                className="mb-4 font-bold text-center md:text-left"
              >
                PROCUREMENT SERVICES
              </Typography>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Button className="rounded-full mb-2" color="blue-gray">
                  Pipe and fittings
                </Button>
                <Button className="rounded-full mb-2" color="gray">
                  Electrical and instrumentation materials
                </Button>
                <Button className="rounded-full mb-2" color="gray">
                  Hand tools and consumables
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 py-12 px-4 sm:px-6 lg:px-8 rounded-lg mx-4 my-12">
        <Typography variant="h3" color="blue-gray" className="text-center mb-8">
          WHO WE SERVE?
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="w-full">
              <CardBody className="flex flex-col items-center rounded-lg hover:bg-gray-400">
                <img
                  src={industry.image}
                  alt={`${industry.name} icon`}
                  className="w-20 h-20 mb-4"
                />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center"
                >
                  {industry.name}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <Card className="mb-8 overflow-hidden">
          <CardBody className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src="./src/images/why.jpg?height=300&width=400"
                  alt="WarmSol Industries Facility"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Typography
                  variant="h2"
                  color="blue-gray"
                  className="mb-4 text-2xl md:text-3xl font-semibold"
                >
                  WHY CHOOSE US?
                </Typography>

                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Extensive industry expertise</li>
                  <li>Commitment to quality and safety standards</li>
                  <li>Reliable and timely delivery</li>
                  <li>Innovative and cost-effective solutions</li>
                  <li>Unwavering dedication to customer success</li>
                </ul>
                <Typography
                  variant="paragraph"
                  className="mb-4 text-base md:text-lg text-gray-700"
                >
                  Join the many businesses that trust Warmsol Industries for
                  their insulation, metal jacketing, refractory, and procurement
                  needs. Together, we can build stronger, more efficient, and
                  sustainable industrial systems.
                </Typography> 
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Typography
                variant="small"
                color="deep-purple"
                className="mb-2 font-semibold uppercase tracking-wider"
              >
                OUR CLIENTS
              </Typography>
              <Typography variant="h2" color="blue-gray">
                Trusted By Industry Leaders
              </Typography>
            </div>
            <div className="flex overflow-x-auto gap-8 py-4">
              {clients.map((client, index) => (
                <img
                  key={index}
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="h-20 w-40 object-contain flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <FooterWithSitemap />
    </div>
  );
}

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
    { name: "Oil & Gas", image: "/images/oil-gas.png" },
    { name: "Petrochemical", image: "/images/petrochemical.png" },
    { name: "Fertilizer", image: "/images/fertilizer.png" },
    { name: "Steel", image: "/images/steel.png" },
    { name: "Water Treatment", image: "/images/water-treatment.png" },
    { name: "Power Generation", image: "/images/power-generation.png" },
  ];
  const clients = [
    "/images/ANCclient.jpg?height=160&width=320",
    // "/placeholder.svg?height=80&width=160",
    // "/placeholder.svg?height=80&width=160",
    // "/placeholder.svg?height=80&width=160",
    // "/placeholder.svg?height=80&width=160",
    // "/placeholder.svg?height=80&width=160"
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
            className="mb-6 tracking-wider sm:text-left"
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
              <Button
                className="rounded-full py-2 px-4 animate-bounce shadow-blue-500/50"
                color="deep-orange"
              >
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
      <div className=" w-[98%] mx-auto px-4 sm:px-6 py-12 lg:px-8 bg-[url('/images/bg6.png?react')] bg-fixed bg-repeat rounded-lg">
        <div className="max-w-7xl mx-auto">
          <Typography variant="h3" className="mb-8 text-center" color="white">
            WHAT WE DO?
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Typography
                variant="h4"
                color="white"
                className="mb-4 font-bold text-center md:text-left"
              >
                MANUFACTURING DIVISION
              </Typography>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link to={"/insulation-materials"}>
                  <Button className="rounded-full mb-2 hover:scale-105 focus:scale-105 focus:shadow-none active:scale-100" color="blue-gray">
                    Insulation Materials
                  </Button>
                </Link>
                <Link to={"/metal-jacketing-materials"}>
                  <Button className="rounded-full mb-2 hover:scale-105 focus:scale-105 focus:shadow-none active:scale-100" color="gray">
                    Metal Jacketing Materials
                  </Button>
                </Link>
                <Button className="rounded-full mb-2 hover:scale-105 focus:scale-105 focus:shadow-none active:scale-100" color="gray">
                  Insulation & Cladding Accessories
                </Button>
                <Button className="rounded-full mb-2 hover:scale-105 focus:scale-105 focus:shadow-none active:scale-100" color="blue-gray">
                  Refractory Materials
                </Button>
              </div>
            </div>
            <div>
              <Typography
                variant="h4"
                color="white"
                className="mb-4 font-bold text-center md:text-left"
              >
                PROCUREMENT SERVICES
              </Typography>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button className="rounded-full mb-2 hover:scale-105 focus:scale-105 focus:shadow-none active:scale-100" color="blue-gray">
                  Pipe and fittings
                </Button>
                <Button className="rounded-full mb-2 hover:scale-105 focus:scale-105 focus:shadow-none active:scale-100 " color="gray">
                  Electrical and instrumentation materials
                </Button>
                <Button className="rounded-full mb-2 hover:scale-105 focus:scale-105 focus:shadow-none active:scale-100 " color="gray">
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
              <CardBody className="flex flex-col items-center rounded-lg hover:bg-gray-200">
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
                  src="/images/why.jpg?height=300&width=400"
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
      {/* <div>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 font-semibold uppercase tracking-wider"
              >
                OUR CLIENTS
              </Typography>
              <Typography variant="h5" color="deep-purple">
                TRUSTED BY INDUSTRY LEADERS
              </Typography>
            </div>
            <div className="flex justify-center overflow-x-auto gap-8 py-4 mx-auto">
              {clients.map((client, index) => (
                <img
                  key={index}
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="h-40 w-80 object-contain flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </section>
      </div> */}

      {/* <div className="bg-orange-900 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg/8 font-semibold text-white">Trusted by the world’s most innovative teams</h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg" alt="Transistor"/>
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg" alt="Reform"/>
      <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg" alt="Tuple"/>
      <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal"/>
      <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg" alt="Statamic"/>
    </div>
  </div>
</div> */}

      <FooterWithSitemap />
    </div>
  );
}

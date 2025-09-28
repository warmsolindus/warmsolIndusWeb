import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import FooterWithSitemap from "../components/Footer";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // state for modal
  const [selectedImage, setSelectedImage] = useState(null);

  // certificate images
  const certificates = [
    "/images/cert1.jpg",
    "/images/cert2.jpg",
    "/images/cert3.jpg",
    "/images/cert4.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <NavigationbarWithDropdownMultilevelMenu />

      <div className="relative h-[60vh] md:h-[80vh] w-full">
        <div className="absolute inset-0 ">
          <img
            src="/images/industry.jpg?height=800&width=1200"
            alt="aboutUs"
            className="h-full w-full object-cover bg-fixed"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <Typography
            variant="h1"
            color="white"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
          >
            ABOUT WARMSOL INDUSTRIES
          </Typography>
        </div>
      </div>

      <div className="px-4 py-12">
        <Card className="mb-8 overflow-hidden">
          <CardBody className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src="/images/aboutus.png?height=300&width=400"
                  alt="WarmSol Industries Facility"
                  className="w-full h-auto rounded-lg shadow-lg brightness-75"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Typography
                  variant="h2"
                  color="blue-gray"
                  className="mb-4 text-2xl md:text-3xl font-semibold"
                >
                  Leading the Way in Insulation Solutions
                </Typography>
                <Typography
                  variant="paragraph"
                  className="mb-4 text-base md:text-lg text-gray-700"
                >
                  WarmSol Industries stands at the forefront of insulation
                  technology, manufacturing and distributing world-class
                  products that meet the most demanding industry standards. Our
                  comprehensive range includes:
                </Typography>
                <ul className="list-image-[url(/images/tick2.jpg)] list-outside mb-4 pl-4 text-gray-700">
                  <li>Hot and Cold insulation materials</li>
                  <li>Cladding and Jacketing solutions</li>
                  <li>Essential insulation accessories</li>
                  <li>Refractory materials</li>
                  <li>Procurement services</li>
                </ul>
                <Typography
                  variant="paragraph"
                  className="text-base md:text-lg text-gray-700"
                >
                  With expertise and a commitment to innovation, we are your
                  trusted partner in achieving efficient, effective, and
                  sustainable insulation solutions for both large-scale
                  industrial projects and commercial spaces.
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="overflow-hidden">
            <CardBody className="p-6">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 text-xl md:text-2xl font-semibold"
              >
                Our Mission
              </Typography>
              <Typography
                variant="paragraph"
                className="text-base text-gray-700"
              >
                At WarmSol Industries, our mission is to deliver exceptional
                insulation materials that ensure:
              </Typography>
              <ul className="list-image-[url(/images/tick2.jpg)] list-outside mt-2 pl-4 text-gray-700">
                <li>Optimal energy efficiency</li>
                <li>Enhanced safety in various applications</li>
                <li>Long-lasting durability in diverse environments</li>
                <li>Sustainable solutions for a greener future</li>
              </ul>
            </CardBody>
          </Card>

          <Card className="overflow-hidden">
            <CardBody className="p-6">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 text-xl md:text-2xl font-semibold"
              >
                Our Vision
              </Typography>
              <Typography
                variant="paragraph"
                className="text-base text-gray-700"
              >
                We aspire to become the most trusted partner in the insulation
                industry by:
              </Typography>
              <ul className="list-image-[url(/images/tick2.jpg)] list-outside mt-2 pl-4 text-gray-700">
                <li>
                  Providing top-tier insulation products for industrial and
                  commercial spaces
                </li>
                <li>Offering unparalleled professional knowledge and expertise</li>
                <li>
                  Delivering exceptional customer service at every touchpoint
                </li>
                <li>
                  Upholding the highest ethical standards in all our business
                  practices
                </li>
                <li>Continuously innovating to meet evolving market needs</li>
              </ul>
            </CardBody>
          </Card>
        </div>

        {/* Certificates Section - CHANGED PART */}
        <Card className="overflow-hidden">
          <CardBody className="p-8 bg-gradient-to-r from-amber-100 to-light-blue-100">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-4 text-2xl md:text-3xl font-semibold text-center"
            >
              Recognitions & Certifications
            </Typography>
            <Typography
              variant="paragraph"
              className="text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto"
            >
              We are proud to be recognized by government authorities for our
              excellence and commitment to quality. Here are some of our
              certifications:
            </Typography>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {certificates.map((src, index) => (
                <div
                  key={index}
                  className="cursor-pointer group relative"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md group-hover:opacity-80 transition"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-medium rounded-lg">
                    View
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full">
              <button
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Full certificate"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>

      <FooterWithSitemap />
    </div>
  );
}
export default AboutUs;

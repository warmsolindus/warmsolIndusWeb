import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import FooterWithSitemap from "../components/Footer";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";

function AboutUs() {
  const certificates = ["/images/cert1.jpg", "/images/cert2.jpg", "/images/cert3.jpg"];
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);

  const openModal = (index) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % certificates.length);

  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + certificates.length) % certificates.length);

  // Swipe support for mobile
  React.useEffect(() => {
    let startX = 0;
    const handleTouchStart = (e) => (startX = e.touches[0].clientX);
    const handleTouchEnd = (e) => {
      if (!startX) return;
      const diff = e.changedTouches[0].clientX - startX;
      if (diff > 50) prevImage();
      if (diff < -50) nextImage();
      startX = 0;
    };

    if (isModalOpen) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isModalOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <NavigationbarWithDropdownMultilevelMenu />

      <div className="relative h-[60vh] md:h-[80vh] w-full">
        <div className="absolute inset-0">
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
                  technology, manufacturing and distributing world-class products
                  that meet the most demanding industry standards. Our
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
              <Typography variant="paragraph" className="text-base text-gray-700">
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
              <Typography variant="paragraph" className="text-base text-gray-700">
                We aspire to become the most trusted partner in the insulation
                industry by:
              </Typography>
              <ul className="list-image-[url(/images/tick2.jpg)] list-outside mt-2 pl-4 text-gray-700">
                <li>
                  Providing top-tier insulation products for industrial and
                  commercial spaces
                </li>
                <li>Offering unparalleled professional knowledge and expertise</li>
                <li>Delivering exceptional customer service at every touchpoint</li>
                <li>
                  Upholding the highest ethical standards in all our business
                  practices
                </li>
                <li>Continuously innovating to meet evolving market needs</li>
              </ul>
            </CardBody>
          </Card>
        </div>

        {/* Recognition Certificates Section */}
        <Card className="overflow-hidden">
          <CardBody className="p-8 bg-gradient-to-r from-orange-100 to-amber-100">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-6 text-2xl md:text-3xl font-semibold text-center"
            >
              Recognition Certificates
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {certificates.map((src, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {isModalOpen && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 animate-fadeIn"
                onClick={closeModal}
              >
                <div
                  className="relative max-w-3xl w-full px-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-300 hover:text-white text-xl md:text-2xl"
                  >
                    ✕
                  </button>

                  <img
                    src={certificates[currentImage]}
                    alt={`Certificate ${currentImage + 1}`}
                    className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg transition-opacity duration-500 opacity-100"
                  />

                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white text-3xl"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white text-3xl"
                  >
                    ›
                  </button>
                </div>
              </div>
            )}
          </CardBody>
        </Card>

        {/* Last Card */}
        <Card className="overflow-hidden">
          <CardBody className="p-8 bg-gradient-to-r from-amber-100 to-light-blue-100">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-4 text-2xl md:text-3xl font-semibold text-center"
            >
              Our Promise to You
            </Typography>
            <Typography
              variant="paragraph"
              className="text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto"
            >
              At WarmSol Industries, we are committed to excellence in every
              aspect of our business. Our promise to you includes:
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <img src="images/quality.png" className="w-24 mx-auto" />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-2 font-semibold"
                >
                  Quality Assurance
                </Typography>
                <Typography variant="small" className="text-gray-700">
                  Rigorous testing and quality control for all our products
                </Typography>
              </div>
              <div className="text-center">
                <img src="images/support.png" className="w-24 mx-auto" />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-2 font-semibold"
                >
                  Expert Support
                </Typography>
                <Typography variant="small" className="text-gray-700">
                  Dedicated technical assistance throughout your project
                </Typography>
              </div>
              <div className="text-center">
                <img src="images/sustainable.png" className="w-28 mx-auto" />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-2 font-semibold"
                >
                  Sustainable Practices
                </Typography>
                <Typography variant="small" className="text-gray-700">
                  Eco-friendly solutions and responsible manufacturing
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <FooterWithSitemap />
    </div>
  );
}

export default AboutUs;

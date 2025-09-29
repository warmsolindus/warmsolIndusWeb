import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import FooterWithSitemap from "../components/Footer";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // use index so we can navigate prev/next
  const [selectedIndex, setSelectedIndex] = useState(null);

  // only 3 certificates
  const certificates = [
    "/images/cert1.jpg",
    "/images/cert2.jpg",
    "/images/cert3.jpg",
  ];

  // open modal by index
  const openAt = (idx) => setSelectedIndex(idx);

  // close modal
  const closeModal = () => setSelectedIndex(null);

  // navigate
  const showPrev = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((i) => {
      if (i === null) return null;
      return (i - 1 + certificates.length) % certificates.length;
    });
  };
  const showNext = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((i) => {
      if (i === null) return null;
      return (i + 1) % certificates.length;
    });
  };

  // keyboard: ESC to close, arrows to navigate
  useEffect(() => {
    function onKey(e) {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <NavigationbarWithDropdownMultilevelMenu />

      {/* Hero */}
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
        {/* About Card */}
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

        {/* Mission + Vision */}
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
                <li>Providing top-tier insulation products for industrial and commercial spaces</li>
                <li>Offering unparalleled professional knowledge and expertise</li>
                <li>Delivering exceptional customer service at every touchpoint</li>
                <li>Upholding the highest ethical standards in all our business practices</li>
                <li>Continuously innovating to meet evolving market needs</li>
              </ul>
            </CardBody>
          </Card>
        </div>

        {/* Certificates Section */}
        <Card className="overflow-hidden">
          <CardBody className="p-8 bg-gradient-to-r from-amber-100 to-light-blue-100">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-4 text-2xl md:text-3xl font-semibold text-center"
            >
              Recognitions & Certifications
            </Typography>

            <Typography variant="paragraph" className="text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto">
              We are proud to be recognized by government authorities for our excellence and commitment to quality. Click any thumbnail to view full A4 certificate.
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {certificates.map((src, idx) => (
                <div
                  key={idx}
                  className="group relative cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => openAt(idx)}
                >
                  <img
                    src={src}
                    alt={`Certificate ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold">
                    <div className="bg-black/40 px-3 py-1 rounded">View</div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Our Promise Card */}
        <Card className="overflow-hidden mt-8">
          <CardBody className="p-8 bg-gradient-to-r from-amber-100 to-light-blue-100">
            <Typography variant="h3" color="blue-gray" className="mb-4 text-2xl md:text-3xl font-semibold text-center">
              Our Promise to You
            </Typography>
            <Typography variant="paragraph" className="text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto">
              At WarmSol Industries, we are committed to excellence in every aspect of our business. Our promise to you includes:
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <img src="/images/quality.png" className="w-24 mx-auto" alt="Quality Assurance"/>
                <Typography variant="h6" color="blue-gray" className="mb-2 font-semibold">
                  Quality Assurance
                </Typography>
                <Typography variant="small" className="text-gray-700">
                  Rigorous testing and quality control for all our products
                </Typography>
              </div>
              <div className="text-center">
                <img src="/images/support.png" className="w-24 mx-auto" alt="Expert Support"/>
                <Typography variant="h6" color="blue-gray" className="mb-2 font-semibold">
                  Expert Support
                </Typography>
                <Typography variant="small" className="text-gray-700">
                  Dedicated technical assistance throughout your project
                </Typography>
              </div>
              <div className="text-center">
                <img src="/images/sustainable.png" className="w-28 mx-auto" alt="Sustainable Practices"/>
                <Typography variant="h6" color="blue-gray" className="mb-2 font-semibold">
                  Sustainable Practices
                </Typography>
                <Typography variant="small" className="text-gray-700">
                  Eco-friendly solutions and responsible manufacturing
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
          >
            {/* image container (relative) so buttons align with image */}
            <div
              className="relative max-w-5xl w-full max-h-[95vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* LEFT ARROW */}
              <button
                onClick={showPrev}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 md:p-3 backdrop-blur-sm"
                aria-label="Previous"
                title="Previous"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* IMAGE & close button top-right of image */}
              <div className="relative">
                {/* smaller lighter close button placed over image top-right */}
                <button
                  onClick={closeModal}
                  className="absolute -top-3 -right-3 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-1.5 md:p-2"
                  aria-label="Close"
                  title="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <img
                  src={certificates[selectedIndex]}
                  alt={`Certificate ${selectedIndex + 1}`}
                  className="object-contain max-h-[85vh] max-w-full rounded-md shadow-lg"
                />
              </div>

              {/* RIGHT ARROW */}
              <button
                onClick={showNext}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 md:p-3 backdrop-blur-sm"
                aria-label="Next"
                title="Next"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <FooterWithSitemap />
    </div>
  );
}

export default AboutUs;

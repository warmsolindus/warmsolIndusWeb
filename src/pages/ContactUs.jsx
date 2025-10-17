import React, { useEffect } from "react";
import {
  Button,
  Input,
  Textarea,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";
import FooterWithSitemap from "../components/Footer";

export function ContactSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-amber-100">
      <NavigationbarWithDropdownMultilevelMenu />

      {/* Banner */}
      <div className="relative h-[20vh] md:h-[58vh] w-full">
        <div
          className="absolute inset-0 bg-[url('/images/contact_us.jpg?height=448&width=1349')] bg-fixed bg-contain"
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
          <Typography
            variant="h1"
            color="white"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            CONTACT US
          </Typography>
          {/* email and phone */}
<div className="mt-4 flex flex-col items-center space-y-2 text-gray-200">
  <div className="flex items-center space-x-2 text-sm md:text-lg">
    <i className="fa fa-envelope" />
    <a
      href="mailto:sales@warmsolindus.com"
      className="text-blue-200 hover:text-white transition-colors"
    >
      sales@warmsolindus.com
    </a>
  </div>
  <div className="flex items-center space-x-2 text-sm md:text-lg">
    <i className="fa fa-phone" /> 
    <a
      href="tel:+966581858426"
      className="text-blue-200 hover:text-white transition-colors"
    >
      +966 58 185 8426
    </a>
    <span>,</span>
    <a
      href="tel:+971565963163"
      className="text-blue-200 hover:text-white transition-colors"
    >
      +971 56 596 33163
    </a>
  </div>
</div>

        </div>
      </div>

      {/* Main Section */}
      <section className="px-8 py-8 lg:py-16">
        <div className="container mx-auto text-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 !text-base lg:!text-2xl"
          >
            We&apos;re Here to Help
          </Typography>
          <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </Typography>

          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start text-start">
            {/* Left Info */}
            <div>
              <div>
                <Typography className="">
                  You need more information? Check what other persons are saying
                  about our product. They are very happy with their purchase.
                </Typography>
                <div className="justify-self-center">
                  <Typography
                    variant="h5"
                    className="py-4 !text-base lg:!text-2xl"
                  >
                    <i className="fa fa-building text-2xl" /> &nbsp; Corporate Office
                  </Typography>
                  <div className="py-4">
                    <Typography className="font-semibold">
                      Warmsol Industries FZC LLC
                    </Typography>
                    <Typography className="font-semibold">
                      Business Center,
                    </Typography>
                    <Typography className="font-semibold">
                      Sharjah Publishing City Free Zone,
                    </Typography>
                    <Typography className="font-semibold">Sharjah ,</Typography>
                    <Typography className="font-semibold">
                      United Arab Emirates
                    </Typography>
                    <Typography className="font-semibold">
                      <i className="fa fa-envelope" />{" "}
                      <a
                        href="mailto:sales.uae@warmsolindus.com"
                        className="hover:underline"
                      >
                        sales.uae@warmsolindus.com
                      </a>
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    className="py-4 !text-base lg:!text-2xl"
                  >
                    <i className="fa fa-phone text-2xl" color="deep-orange" /> &nbsp; GIVE US A RING
                  </Typography>
                  <div className="py-2">
                    <Typography className="font-semibold">
                      Business Development Manager
                    </Typography>
                    <Typography className="font-semibold">
                      <i className="fa fa-phone" />
                      <a href="tel:+971565963316"> +971 56 5963316</a>
                    </Typography>
                    <Typography className="font-semibold">
                      <i className="fa fa-envelope" />{" "}
                      <a href="mailto:bdm@warmsolindus.com">
                        bdm@warmsolindus.com
                      </a>
                    </Typography>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <IconButton className="rounded bg-[#1877F2] hover:shadow-[#1877F2]/20 focus:shadow-[#1877F2]/20 active:shadow-[#1877F2]/10">
                      <i className="fab fa-facebook text-lg" />
                    </IconButton>
                    <IconButton className="rounded bg-[#000000] hover:shadow-[#000000]/20 focus:shadow-[#000000]/20 active:shadow-[#000000]/10">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                      </svg>
                    </IconButton>
                    <IconButton className="rounded bg-[#0077B5] hover:shadow-[#0077B5]/20 focus:shadow-[#0077B5]/20 active:shadow-[#0077B5]/10">
                      <i className="fab fa-linkedin text-lg" />
                    </IconButton>
                    <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                      <i className="fab fa-github text-lg" />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col gap-4 bg-white rounded-lg p-8 ">
              <div>
                <Typography className="mb-4 !text-base lg:!text-2xl font-bold">
                  Contact Us
                </Typography>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    First Name
                  </Typography>
                  <Input
                    color="purple"
                    size="lg"
                    placeholder="First Name"
                    name="first-name"
                    className="focus:border-t-purple-700"
                    containerProps={{
                      className: "min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Last Name
                  </Typography>
                  <Input
                    color="purple"
                    size="lg"
                    placeholder="Last Name"
                    name="last-name"
                    className="focus:border-t-purple-700"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Email
                </Typography>
                <Input
                  color="purple"
                  size="lg"
                  placeholder="name@email.com"
                  name="email"
                  className="focus:border-t-purple-700"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  color="purple"
                  placeholder="Message"
                  name="message"
                  className="focus:border-t-purple-700"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Button className="w-full hover:scale-105" color="gray">
                Send message
              </Button>
            </form>
          </div>

          {/* Our Regional Presence */}
          <div className="mt-16">
            <Typography
              variant="h5"
              className="mb-10 !text-2xl font-bold text-center"
            >
              Our Regional Presence
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* KSA */}
              <div className="p-6 rounded-lg bg-amber-50 hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <Typography variant="h6" className="font-semibold mb-2">
                  KSA
                </Typography>
                <Typography className="mb-2 text-gray-700 text-sm">
                  Building No.2500, Al Madinah Al Munawarah St., Al Tawyah Dist, Al Jubail, KSA
                </Typography>
                <Typography className="text-sm text-blue-700 hover:underline">
                  <i className="fa fa-envelope mr-2" />{" "}
                  <a href="mailto:sales.ksa@warmsolindus.com">
                    sales.ksa@warmsolindus.com
                  </a>
                </Typography>
              </div>

              {/* QATAR */}
              <div className="p-6 rounded-lg bg-amber-50 hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <Typography variant="h6" className="font-semibold mb-2">
                  QATAR
                </Typography>
                <Typography className="mb-2 text-gray-700 text-sm">
                  Building no 2, Zone 25, Street 890, Abha Street, Doha - Qatar
                </Typography>
                <Typography className="text-sm text-blue-700 hover:underline">
                  <i className="fa fa-envelope mr-2" />{" "}
                  <a href="mailto:sales.qatar@warmsolindus.com">
                    sales.qatar@warmsolindus.com
                  </a>
                </Typography>
              </div>

              {/* INDIA */}
              <div className="p-6 rounded-lg bg-amber-50 hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <Typography variant="h6" className="font-semibold mb-2">
                  INDIA
                </Typography>
                <Typography className="mb-2 text-gray-700 text-sm">
                  No#242, Satra Plaza, Vashi, Sector 19d, Navi Mumbai 400 703. Maharashtra
                </Typography>
                <Typography className="text-sm text-blue-700 hover:underline">
                  <i className="fa fa-envelope mr-2" />{" "}
                  <a href="mailto:sales.in@warmsolindus.com">
                    sales.in@warmsolindus.com
                  </a>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterWithSitemap />
    </div>
  );
}

export default ContactSection;

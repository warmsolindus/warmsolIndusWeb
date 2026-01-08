import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";
import FooterWithSitemap from "../components/Footer";

export function ContactSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendSuccess(false);
    setSendError(null);

    const serviceID = "service_dkbko0m";
    const templateID = "template_rgbtdt9";
    const publicKey = "CY8UbZhw_TAHCCFEF";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          setSendSuccess(true);
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          setSendError("Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  // Data for Regional Presence
  const locations = [
   
    {
      title: "KSA",
      address: "No. 13, First Floor, Business Executive Center, Jubail-Dammam Highway, Al Jubail, Kingdom of Saudi Arabia",
      email: "sales.ksa@warmsolindus.com",
    },
    {
      title: "QATAR",
      address: "Building no 2, Zone 25, Street 890, Abha Street, Doha - Qatar",
      email: "sales.qatar@warmsolindus.com",
    },
    {
      title: "INDIA",
      address: "No#242, Satra Plaza, Vashi, Sector 19d, Navi Mumbai 400 703, Maharashtra",
      email: "sales.in@warmsolindus.com",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-amber-200 to-blue-gray-200">
      <NavigationbarWithDropdownMultilevelMenu />

      {/* Banner */}
      <div className="relative h-[20vh] md:h-[58vh] w-full">
        <div className="absolute inset-0 bg-[url('/images/contact_us.jpg')] bg-fixed bg-contain">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
          <Typography variant="h1" className="text-3xl md:text-4xl lg:text-5xl font-bold">
            CONTACT US
          </Typography>
          <div className="mt-4 flex flex-col items-center space-y-2 text-gray-200">
            <div className="flex items-center space-x-2 text-sm md:text-lg">
              <i className="fa fa-envelope" />
              <a href="mailto:sales@warmsolindus.com" className="text-blue-200 hover:text-white transition-colors">
                sales@warmsolindus.com
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm md:text-lg text-center">
              <i className="fa fa-phone" />
              <a href="tel:+966581858426" className="text-blue-200 hover:text-white">+966 58 185 8426</a>
              <span className="hidden md:inline">|</span>
              <a href="tel:+971565963163" className="text-blue-200 hover:text-white">+971 56 596 33163</a>
            </div>
          </div>
        </div>
      </div>

      <section className="px-8 py-8 lg:py-16">
        <div className="container mx-auto text-center">
          <Typography variant="h5" color="blue-gray" className="mb-4 !text-base lg:!text-2xl">
            We're Here to Help
          </Typography>
          <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
            Whether it's a question about our services or technical assistance, our team is eager to hear from you.
          </Typography>

          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start text-start">
            {/* Left Info */}
            <div className="flex flex-col h-full">
              <Typography className="text-gray-700">
                You need more information? Our technical team is ready to support your industrial requirements globally.
              </Typography>
              <div className="mt-6">
                <Typography variant="h5" className="py-4 !text-base lg:!text-2xl flex items-center">
                  <i className="fa fa-building text-2xl mr-3" /> Corporate Office
                </Typography>
                <div className="space-y-1 text-blue-gray-800">
                  <Typography className="font-bold">Warmsol Industries FZE LLC</Typography>
                  <Typography>Business Center, Sharjah Publishing City Free Zone,</Typography>
                  <Typography>Sharjah, United Arab Emirates</Typography>
                  <Typography className="pt-2 font-semibold">
                    <i className="fa fa-envelope mr-2" />
                    <a href="mailto:sales.uae@warmsolindus.com" className="text-blue-700 hover:underline">
                      sales.uae@warmsolindus.com
                    </a>
                  </Typography>
                </div>
                <img src="images/logo.png" alt="Warmsol Logo" className="mt-8 w-64 h-auto" />
              </div>
            </div>

            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 bg-white rounded-xl p-8 shadow-sm">
              <Typography className="mb-2 !text-xl font-bold">Send Message</Typography>
              <div className="grid grid-cols-2 gap-4">
                <Input color="amber" label="First Name" name="user_fname" required />
                <Input color="amber" label="Last Name" name="user_lname" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input color="amber" label="Your Email" name="user_email" type="email" required />
                <Input color="amber" label="Mobile Number" name="user_mobile" type="tel" required />
              </div>
              <Textarea rows={5} color="amber" label="Your Message" name="message" required />
              <Button type="submit" className="w-full" color="amber" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </Button>
              {sendSuccess && <Typography color="green" className="text-center text-sm">Great, Message sent successfully!</Typography>}
              {sendError && <Typography color="red" className="text-center text-sm">{sendError}</Typography>}
            </form>
          </div>

          {/* Regional Presence Section */}
          <div className="mt-20">
            <Typography variant="h4" className="mb-10 font-bold text-center text-blue-gray-900">
              Our Regional Presence
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {locations.map((loc, idx) => (
                <div 
                  key={idx}
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`, '_blank')}
                  className="group relative p-6 rounded-xl bg-white border border-amber-100 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <Typography variant="h6" className="font-bold text-blue-gray-900 leading-tight">
                        {loc.title}
                      </Typography>
                      <i className="fa fa-map-marker-alt text-amber-600 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <Typography className="mb-4 text-gray-600 text-xs leading-relaxed">
                      {loc.address}
                    </Typography>
                  </div>
                  
                  <div className="mt-auto">
                    <Typography className="text-[10px] text-blue-600 flex items-center mb-4">
                      <i className="fa fa-envelope mr-2" />
                      {loc.email}
                    </Typography>
                    <div className="w-full py-2 bg-amber-50 text-amber-900 text-center text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      VIEW ON MAP <i className="fa fa-arrow-right ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterWithSitemap />
    </div>
  );
}

export default ContactSection;

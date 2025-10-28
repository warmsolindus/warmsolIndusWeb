import React, { useEffect, useRef, useState } from "react"; // MODIFIED: Added useRef and useState
import emailjs from "@emailjs/browser"; // ADDED: EmailJS library
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

  // ADDED: Refs and state for the form
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(null);

  // ADDED: EmailJS send function
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendSuccess(false);
    setSendError(null);

    // --- REPLACE WITH YOUR EMAILJS IDs ---
    const serviceID = "service_dkbko0m";
    const templateID = "template_rgbtdt9";
    const publicKey = "CY8UbZhw_TAHCCFEF";
    // -------------------------------------

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setSendSuccess(true);
          setIsSending(false);
          form.current.reset(); // Resets the form after successful send
        },
        (error) => {
          console.log(error.text);
          setSendError("Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-amber-200 to-blue-gray-200">
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
                  {/* ... (rest of your info section remains the same) ... */}
                </div>
              </div>
            </div>

            {/* MODIFIED Contact Form */}
            <form
              ref={form} // ADDED: Form ref
              onSubmit={sendEmail} // ADDED: Submit handler
              className="flex flex-col gap-4 bg-white rounded-lg p-8 "
            >
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
                    name="user_fname" // MODIFIED: Name attribute
                    required // ADDED: Basic validation
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
                    name="user_lname" // MODIFIED: Name attribute
                    required // ADDED: Basic validation
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

              {/* MODIFIED: Put Email and Mobile in a grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    name="user_email" // MODIFIED: Name attribute
                    type="email" // ADDED: Email type validation
                    required // ADDED: Basic validation
                    className="focus:border-t-purple-700"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>

                {/* ADDED: Mobile Number Field */}
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Mobile Number
                  </Typography>
                  <Input
                    color="purple"
                    size="lg"
                    placeholder="+1 234 567 890"
                    name="user_mobile" // ADDED: Name attribute
                    type="tel" // ADDED: Telephone type
                    required // ADDED: Basic validation
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
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  color="purple"
                  placeholder="Message"
                  name="message" // MODIFIED: Name attribute
                  required // ADDED: Basic validation
                  className="focus:border-t-purple-700"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Button
                type="submit" // MODIFIED: Changed to type="submit"
                className="w-full hover:scale-105"
                color="gray"
                disabled={isSending} // ADDED: Disable button while sending
              >
                {isSending ? "Sending..." : "Send Message"}
              </Button>

              {/* ADDED: Success and Error Messages */}
              {sendSuccess && (
                <Typography color="green" className="text-center font-medium">
                  Message sent successfully!
                </Typography>
              )}
              {sendError && (
                <Typography color="red" className="text-center font-medium">
                  {sendError}
                </Typography>
              )}
            </form>
          </div>

          {/* ... (rest of your component remains the same) ... */}
          <div className="mt-16">
            <Typography
      _variant="h5"
              className="mb-10 !text-2xl font-bold text-center"
            >
              Our Regional Presence
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* KSA */}
              <div className="p-6 rounded-lg bg-amber-50 hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <Typography _variant="h6" className="font-semibold mb-2">
                  KSA
                </Typography>
className="mb-2 text-gray-700 text-sm">
                  Building No.2500, Al Madinah Al Munawarah St., Al Tawyah Dist, Al Jubail, KSA
                </Typography>
          _className="text-sm text-blue-700 hover:underline">
                  <i className="fa fa-envelope mr-2" />{" "}
                  <a href="mailto:sales.ksa@warmsolindus.com">
                    sales.ksa@warmsolindus.com
                  </a>
                </Typography>
id=0>
              </div>

              {/* QATAR */}
              <div _id="1" _className="p-6 rounded-lg bg-amber-50 hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <Typography _variant="h6" className="font-semibold mb-2">
                  QATAR
                </Typography>
className="mb-2 text-gray-700 text-sm">
                  Building no 2, Zone 25, Street 890, Abha Street, Doha - Qatar
                </Typography>
          _className="text-sm text-blue-700 hover:underline">
                  <i className="fa fa-envelope mr-2" />{" "}
s                 <a _href="mailto:sales.qatar@warmsolindus.com">
                    sales.qatar@warmsolindus.com
                  </a>
                </Typography>
              </div>

              {/* INDIA */}
              <div _id="2" _className="p-6 rounded-lg bg-amber-50 hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <Typography _variant="h6" className="font-semibold mb-2">
                t   INDIA
                </Typography>
s             <Typography _className="mb-2 text-gray-700 text-sm">
                  No#242, Satra Plaza, Vashi, Sector 19d, Navi Mumbai 400 703. Maharashtra
                </Typography>
          _className="text-sm text-blue-700 hover:underline">
                  <i className="fa fa-envelope mr-2" />{" "}
s                 <a _href="mailto:sales.in@warmsolindus.com">
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

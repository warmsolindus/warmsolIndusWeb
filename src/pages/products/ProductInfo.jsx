import React, { useEffect } from "react";
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import NavigationbarWithDropdownMultilevelMenu from "../../components/Navbar";
import FooterWithSitemap from "../../components/Footer";

export default function ProductInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeTab, setActiveTab] = React.useState("description");

  return (
    <div className="min-h-screen bg-amber-50">
      <NavigationbarWithDropdownMultilevelMenu />
      <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <Card className="mb-6 sm:mb-12 overflow-hidden">
          <CardBody className="p-0">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img
                  src="/images/cfb.avif?height=400&width=400"
                  alt="Product"
                  className="w-full h-auto object-contain lg:h-full scale-95 hover:scale-105 duration-700 cursor-zoom-in"
                />
              </div>
              <div className="lg:w-1/2 p-6 sm:p-8">
                <Typography
                  variant="h2"
                  color="blue-gray"
                  className="mb-2 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl"
                >
                  Ceramic Fiber Blanket
                </Typography>
                <Typography
                  variant="lead"
                  className="mb-2 sm:mb-4 text-sm sm:text-base"
                >
                  Ceramic Fiber Blanket is manufactured from spun ceramic fiber
                  and is needled to provide exceptional handling strength for
                  high-temperature insulation applications.
                </Typography>
                <Typography
                  variant="paragraph"
                  className="mb-2 sm:mb-4 text-xs sm:text-sm"
                >
                  Product code: CFB
                </Typography>
                <Typography
                  variant="h6"
                  color="blue"
                  className="mb-2 text-sm sm:text-base"
                >
                  Key Features:
                </Typography>
                <List className="space-y-1">
                  <ListItem className="text-sm">
                    <ListItemPrefix>
                      <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    </ListItemPrefix>
                    Excellent insulation properties
                  </ListItem>
                  <ListItem className="text-sm">
                    <ListItemPrefix>
                      <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    </ListItemPrefix>
                    Excellent chemical stability
                  </ListItem>
                  <ListItem className="text-sm">
                    <ListItemPrefix>
                      <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    </ListItemPrefix>
                    Lightweight
                  </ListItem>
                </List>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            color="deep-orange"
            className="relative h-12 sm:h-16 flex items-center"
          >
            <Typography
              variant="h4"
              color="white"
              className="text-lg sm:text-xl lg:text-2xl pl-4"
            >
              Product Details
            </Typography>
          </CardHeader>
          <CardBody>
            <Tabs value={activeTab}>
              <TabsHeader className="overflow-x-auto bg-amber-900">
                {[
                  "Description",
                  "Specifications",
                  "Benefits",
                  "Applications",
                ].map((tab) => (
                  <Tab
                    key={tab.toLowerCase()}
                    value={tab.toLowerCase()}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className="text-xs sm:text-sm lg:text-base"
                  >
                    {tab}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody className="mt-4">
                <TabPanel value="description">
                  <Typography
                    variant="paragraph"
                    className="text-sm sm:text-base max-w-[700px] mx-auto text-justify"
                  >
                    Ceramic Fiber Blanket is manufactured from spun ceramic
                    fiber and is needled to provide exceptional handling
                    strength for high-temperature insulation applications. It is
                    lightweight and thermally efficient, resulting in a material
                    that has the advantage of low heat storage and complete
                    resistance to thermal shock. This is approved for use
                    against cellulosic and hydrocarbon fires and for
                    dry-wrapping of structural steel. Ceramic Fiber Blankets
                    come in various chemical compositions, densities, and sizes,
                    making them one of the most versatile insulation products in
                    the industry.
                  </Typography>
                </TabPanel>
                <TabPanel value="specifications">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-4 text-base sm:text-lg"
                  >
                    Technical Specifications
                  </Typography>
                  <List className="space-y-1">
                    {[
                      "Specification 1: Value",
                      "Specification 2: Value",
                      "Specification 3: Value",
                      "Specification 4: Value",
                      "Specification 5: Value",
                    ].map((spec, index) => (
                      <ListItem key={index} className="text-sm sm:text-base">
                        {spec}
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
                <TabPanel value="benefits">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-4 text-base sm:text-lg"
                  >
                    Product Benefits
                  </Typography>
                  <List className="space-y-1">
                    {[
                      "Benefit 1: Description of the benefit",
                      "Benefit 2: Description of the benefit",
                      "Benefit 3: Description of the benefit",
                    ].map((benefit, index) => (
                      <ListItem key={index} className="text-sm sm:text-base">
                        <ListItemPrefix>
                          <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                        </ListItemPrefix>
                        {benefit}
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
                <TabPanel value="applications">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-4 text-base sm:text-lg"
                  >
                    Common Applications
                  </Typography>
                  <List className="space-y-1">
                    {[
                      "Application 1: Description",
                      "Application 2: Description",
                      "Application 3: Description",
                      "Application 4: Description",
                    ].map((application, index) => (
                      <ListItem key={index} className="text-sm sm:text-base">
                        {application}
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div>
      
      <FooterWithSitemap />
    </div>
  );
}

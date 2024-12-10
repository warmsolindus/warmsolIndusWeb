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
                  className="w-full h-auto object-contain lg:h-full"
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
                    className="text-sm sm:text-base"
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
                  <List className="space-y-2">
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
      {/* <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Card className="mb-12">
          <CardBody className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src="/images/cfb.avif?height=400&width=400"
                alt="Product"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <Typography variant="h2" color="blue-gray" className="mb-4">
                Ceramic Fiber Blanket
              </Typography>
              <Typography variant="lead" className="mb-4">
              Ceramic Fiber Blanket is manufactured from spun ceramic fiber
                and is needled to provide exceptional handling strength for
                high-temperature insulation applications.
              </Typography>
              <Typography variant="paragraph" className="mb-4">
                Product code: CFB
              </Typography>
              <Typography variant="h6" color="blue" className="mb-2">
                Key Features:
              </Typography>
              <List>
                <ListItem>
                  <ListItemPrefix>
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </ListItemPrefix>
                  Excellent insulation properties
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </ListItemPrefix>
                  Excellent chemical stability
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  </ListItemPrefix>
                  Lightweight
                </ListItem>
              </List>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            color="deep-orange"
            className="relative h-16 flex items-center"
          >
            <Typography variant="h4" color="white" className="pl-4">
              Product Details
            </Typography>
          </CardHeader>
          <CardBody>
            <Tabs value={activeTab}>
              <TabsHeader>
                <Tab value="description" onClick={() => setActiveTab("description")}>
                  Description
                </Tab>
                <Tab value="specifications" onClick={() => setActiveTab("specifications")}>
                  Specifications
                </Tab>
                <Tab value="benefits" onClick={() => setActiveTab("benefits")}>
                  Benefits
                </Tab>
                <Tab value="applications" onClick={() => setActiveTab("applications")}>
                  Applications
                </Tab>
              </TabsHeader>
              <TabsBody>
                <TabPanel value="description">
                  <Typography variant="paragraph" className=" max-w-[700px]">
                  Ceramic Fiber Blanket is manufactured from spun ceramic fiber and
              is needled to provide exceptional handling strength for
              high-temperature insulation applications. It is lightweight and
              thermally efficient, resulting in a material that has the
              advantage of low heat storage and complete resistance to thermal
              shock. This is approved for use against cellulosic and hydrocarbon
              fires and for dry-wrapping of structural steel. Ceramic Fiber
              Blankets come in various chemical compositions, densities, and
              sizes, making them one of the most versatile insulation products
              in the industry.
                  </Typography>
                </TabPanel>
                <TabPanel value="specifications">
                  <Typography variant="h6" color="blue-gray" className="mb-4">
                    Technical Specifications
                  </Typography>
                  <List>
                    <ListItem>Specification 1: Value</ListItem>
                    <ListItem>Specification 2: Value</ListItem>
                    <ListItem>Specification 3: Value</ListItem>
                    <ListItem>Specification 4: Value</ListItem>
                    <ListItem>Specification 5: Value</ListItem>
                  </List>
                </TabPanel>
                <TabPanel value="benefits">
                  <Typography variant="h6" color="blue-gray" className="mb-4">
                    Product Benefits
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemPrefix>
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      </ListItemPrefix>
                      Benefit 1: Description of the benefit
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      </ListItemPrefix>
                      Benefit 2: Description of the benefit
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      </ListItemPrefix>
                      Benefit 3: Description of the benefit
                    </ListItem>
                  </List>
                </TabPanel>
                <TabPanel value="applications">
                  <Typography variant="h6" color="blue-gray" className="mb-4">
                    Common Applications
                  </Typography>
                  <List>
                    <ListItem>Application 1: Description</ListItem>
                    <ListItem>Application 2: Description</ListItem>
                    <ListItem>Application 3: Description</ListItem>
                    <ListItem>Application 4: Description</ListItem>
                  </List>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div> */}
      <FooterWithSitemap />
    </div>
  );
}

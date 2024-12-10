import React from "react";
import {
  Navbar,
  MobileNav,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const insulationMaterial = [
  {
    title: "Ceramic Fiber Blankets",
    path: "/ceramic-fiber-blanket",
  },
  {
    title: "Cellular / Foam Glass",
    path: "/cellular-or-foam-glass",
  },
  {
    title: "PIR (Polyisocyanurate)",
    path: "/polyisocyanurate-PIR",
  },
  {
    title: "PUF (Polyurethane Foam)",
    path: "/polyurethane-foam-PUF",
  },
  {
    title: "Calcium Silicate ",
    path: "/calcium-silicate",
  },
  {
    title: "Perlite",
    path: "/perlite",
  },
];
const metalJacketing = [
  {
    title: "Aluminum Sheet with or without moisture barrier ",
    path: "/aluminium-sheet",
  },
  {
    title: "Stainless Steel Sheet",
    path: "/stainless-steel-sheet",
  },
  {
    title: "Perforated Sheet ",
    path: "/perforated-sheet",
  },
  {
    title: "Corrugated Sheet ",
    path: "/corrugated-sheet",
  },
  {
    title: "Welded Wire mesh SS",
    path: "/welded-wire-mesh",
  },
  {
    title: "Lead Sheet",
    path: "",
  },
  {
    title: "Mass Loaded Vinyl Sheet",
    path: "",
  },
];

const insAndCladAccessory = [
  {
    title: "Stainless Steel Band ",
    path: "",
  },
  {
    title: "Stainless Steel Wing Seal",
    path: "",
  },
  {
    title: "Stainless Steel self Tapping Screw",
    path: "",
  },
  {
    title: "Neoprene Washer",
    path: "",
  },
  {
    title: "Stainless Steel Tie Wire ",
    path: "",
  },
  {
    title: "Stainless Steel Toggle Clip",
    path: "",
  },
  {
    title: "Stainless Steel Expansion Ring",
    path: "",
  },
  {
    title: "Stainless Steel Blind River",
    path: "",
  },
  {
    title: "Aluminium Blind Rivet",
    path: "",
  },
  {
    title: "Ceramic Tape",
    path: "",
  },
  {
    title: "Fiber Glass Tape",
    path: "",
  },
  {
    title: "Inspection Plug",
    path: "",
  },
  {
    title: "Sealant and Adhesive",
    path: "",
  },
  {
    title: "Filament Tape",
    path: "",
  },
];
const refractoryMaterials = [
  {
    title: "Refractory Bricks",
    path: "",
  },
  {
    title: "Refractory Castables",
    path: "",
  },
  {
    title: "Mortar",
    path: "",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [insulationNestedMenu, setInsulationNestedMenu] = React.useState(false);
  const [metalNestedMenu, setMetalNestedMenu] = React.useState(false);
  const [accessoryNestedMenu, setAccessoryNestedMenu] = React.useState(false);
  const [refractoryNestedMenu, setRefractoryNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (menu) =>
    menu.map(({ title, path }, key) => (
      // <a href={path} key={key}>
      <Link to={path} key={key}>
        <MenuItem>{title}</MenuItem>
      </Link>
      // </a>
    ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="medium" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 text-orange font-sans no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Products
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={insulationNestedMenu}
            handler={setInsulationNestedMenu}
          >
            <Link to={"/insulation-materials"}>
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Insulation Materials
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      isMenuOpen ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
            </Link>
            <MenuList className="rounded-xl">
              {renderItems(insulationMaterial)}
            </MenuList>
          </Menu>

          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={metalNestedMenu}
            handler={setMetalNestedMenu}
          >
            <Link to={"/metal-jacketing-materials"}>
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Metal Jacketing Materials
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      isMenuOpen ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
            </Link>
            <MenuList className="rounded-xl">
              {renderItems(metalJacketing)}
            </MenuList>
          </Menu>

          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={accessoryNestedMenu}
            handler={setAccessoryNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Insulation & Cladding Accessories
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">
              {renderItems(insAndCladAccessory)}
            </MenuList>
          </Menu>

          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={refractoryNestedMenu}
            handler={setRefractoryNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Refractory Materials
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">
              {renderItems(refractoryMaterials)}
            </MenuList>
          </Menu>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={insulationNestedMenu}
            handler={setInsulationNestedMenu}
          >
            <Link to={"/insulation-materials"}>
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Insulation Materials
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      isMenuOpen ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
            </Link>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems(insulationMaterial)}
            </MenuList>
          </Menu>

          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={metalNestedMenu}
            handler={setMetalNestedMenu}
          >
            <Link to={"/metal-jacketing-materials"}>
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  Metal Jacketing Materials
                  <ChevronUpIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      isMenuOpen ? "rotate-90" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
            </Link>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems(metalJacketing)}
            </MenuList>
          </Menu>

          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={accessoryNestedMenu}
            handler={setAccessoryNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Insulation & Cladding Accessories
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems(insAndCladAccessory)}
            </MenuList>
          </Menu>

          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={refractoryNestedMenu}
            handler={setRefractoryNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Refractory Materials
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems(refractoryMaterials)}
            </MenuList>
          </Menu>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mb-6 mt-4 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1 gap-8 mr-6">
      <Typography
        as="a"
        href=""
        variant="medium"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/home"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-black font-sans no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform after:duration-350 after:ease-in-out hover:after:scale-x-105 focus:outline active-outline">
            Home
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/about-us"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-black font-sans no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-105">
            About Us
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/procurement-services"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-black font-sans no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-105">
            Procurement Services
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/contact-us"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-black font-sans no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-105 after:origin-right">
            Contact Us
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

export default function NavigationbarWithDropdownMultilevelMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      variant="gradient"
      color=""
      className="mx-auto min-w-full px-4 py-2 sticky top-0 z-50 h-max rounded-none lg:px-8 lg:py-4"
    >
      <div className="flex items-center justify-between text-blue-gray-900 ">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <Link to={"/home"}>
            <img
              className="h-16 w-full rounded-lg object-cover object-center"
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden"></div>
      </Collapse>
    </Navbar>
  );
}

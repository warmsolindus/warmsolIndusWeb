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
    title: "Aerogel Blankets",
    path: "/insulation-materials/aerogel-blanket",
  },
  {
    title: "Ceramic Fiber Blankets",
    path: "/insulation-materials/ceramic-fiber-blanket",
  },
  {
    title: "Cellular / Foam Glass",
    path: "/insulation-materials/cellular-or-foam-glass",
  },
  {
    title: "PIR (Polyisocyanurate)",
    path: "/insulation-materials/polyisocyanurate-PIR",
  },
  {
    title: "PUF (Polyurethane Foam)",
    path: "/insulation-materials/polyurethane-foam-PUF",
  },
  {
    title: "Calcium Silicate ",
    path: "/insulation-materials/calcium-silicate",
  },
  {
    title: "Perlite",
    path: "/insulation-materials/perlite",
  },
  
  {
    title: "Phinolic Insulation",
    path: "/insulation-materials/#",
  },
  {
    title: "Mineral Fiber Wool",
    path: "/insulation-materials/#",
  },
  {
    title: "Elastomeric Insulation",
    path: "/insulation-materials/#",
  },
];
const metalJacketing = [
  {
    title: "Aluminum Sheet with or without moisture barrier ",
    path: "/metal-jacketing-materials/aluminium-sheet",
  },
  {
    title: "Stainless Steel Sheet",
    path: "/metal-jacketing-materials/stainless-steel-sheet",
  },
  {
    title: "Perforated Sheet ",
    path: "/metal-jacketing-materials/perforated-sheet",
  },
  {
    title: "Corrugated Sheet ",
    path: "/metal-jacketing-materials/corrugated-sheet",
  },
  {
    title: "Welded Wire mesh SS",
    path: "/metal-jacketing-materials/welded-wire-mesh",
  },
  {
    title: "Lead Sheet",
    path: "/metal-jacketing-materials/lead-sheet",
  },
  {
    title: "Mass Loaded Vinyl Sheet",
    path: "/metal-jacketing-materials/mass-loaded-vinyl-sheet",
  },
   {
    title: "Aluminium Stucco",
    path: "/metal-jacketing-materials/aluminium-stucco",
  },
   {
    title: "Aluminized Steel",
    path: "/metal-jacketing-materials/aluminized-steel",
  },
   {
    title: "Galvanized Steel",
    path: "/metal-jacketing-materials/galvanized-steel",
  },
   {
    title: "Aluzinc",
    path: "/metal-jacketing-materials/aluzinc",
  },
];

const insAndCladAccessory = [
  {
    title: "Stainless Steel Wing Seal",
    path: "/insulation-and-cladding-accessories/stainless-steel-wing-seal",
  },
       {
    title: "Mass Loaded Vinyl Sheet",
    path: "/insulation-and-cladding-accessories/mass-loaded-vinyl-sheet",
  },
  {
    title: "Stainless Steel self Tapping Screw",
    path: "/insulation-and-cladding-accessories/stainless-steel-self-tapping-screw",
  },
  {
    title: "Neoprene Washer",
    path: "/insulation-and-cladding-accessories/neoprene-washer",
  },
  {
    title: "Stainless Steel Tie Wire ",
    path: "/insulation-and-cladding-accessories/stainless-steel-tie-wire",
  },
  {
    title: "Stainless Steel Toggle Clip",
    path: "/insulation-and-cladding-accessories/stainless-steel-toggle-clip",
  },
  {
    title: "Stainless Steel Expansion Spring",
    path: "/insulation-and-cladding-accessories/stainless-steel-expansion-spring",
  },
  {
    title: "Stainless Steel Blind Rivet",
    path: "/insulation-and-cladding-accessories/stainless-steel-blind-rivet",
  },
  {
    title: "Aluminium Blind Rivet",
    path: "/insulation-and-cladding-accessories/aluminium-blind-rivet",
  },
  {
    title: "Ceramic Tape",
    path: "/insulation-and-cladding-accessories/ceramic-tape",
  },
  {
    title: "Fiber Glass Tape",
    path: "/insulation-and-cladding-accessories/fiber-glass-tape",
  },
  {
    title: "Inspection Plug",
    path: "/insulation-and-cladding-accessories/inspection-plug",
  },
  {
    title: "Sealant and Adhesive",
    path: "/insulation-and-cladding-accessories/sealants-and-adhesives",
  },
  {
    title: "Filament Tape",
    path: "/insulation-and-cladding-accessories/filament-tape",
  },
];
const refractoryMaterials = [
  {
    title: "Ceramic Fiber Blanket",
    path: "/refractory-materials/ceramic-fiber-blanket"
  },
  {
    title: "Ceramic Fiber Wool",
    path: "/refractory-materials/ceramic-fiber-wool",
  },
  {
    title: "Ceramic Fiber Board",
    path: "/refractory-materials/ceramic-fiber-board",
  },
  {
    title: "Ceramic Fiber Cloth",
    path: "/refractory-materials/ceramic-fiber-cloth",
  },
  {
    title: "Ceramic Fiber Rope",
    path: "/refractory-materials/ceramic-fiber-rope",
  },
  {
    title: "Ceramic Fiber Felt",
    path: "/refractory-materials/ceramic-fiber-felt",
  },
  {
    title: "Insulation Bricks",
    path: "/refractory-materials/insulation-bricks",
  },
  {
    title: "Fire Clay Bricks",
    path: "/refractory-materials/fire-clay-bricks",
  },
  {
    title: "High Alumina Refractory Bricks",
    path: "/refractory-materials/high-alumina-refractory-bricks",
  },
  {
    title: "Sillimanite Bricks",
    path: "/refractory-materials/sillimanite-bricks",
  },
  {
    title: "Silica Bricks",
    path: "/refractory-materials/silica-bricks",
  },
  {
    title: "Magnesia Bricks",
    path: "/refractory-materials/magnesia-bricks",
  },
  {
    title: "Acid Proof Bricks",
    path: "/refractory-materials/acid-proof-bricks",
  },
  {
    title: "Insulating Castables",
    path: "/refractory-materials/insulating-castables",
  },
  {
    title: "Dense Refractory Castables",
    path: "/refractory-materials/dense-refractory-castables",
  },
  // {
  //   title: "Refractory Bricks",
  //   path: "/refractory-materials/refractory-bricks"
  // },
  // {
  //   title: "Refractory Castables",
  //   path: "/refractory-materials/refractory-castables",
  // },
  // {
  //   title: "Mortar",
  //   path: "/refractory-materials/mortar",
  // },
];
const sheetMetal = [

    {
     title: "Silicon Coated Cloth",
     path: "/sheet-metals/silicon-coated-cloth",
    },
  {
     title: "High Silica Cloth",
     path: "/sheet-metals/hight-silica-cloth",
    },
   {
     title: "Heat Textured Silica Cloth",
     path: "/sheet-metals/heat-textured-silica-cloth",
    },
{
     title: "Sewing Threads",
     path: "/sheet-metals/sewing-threads",
    },
  {
     title: "Lacing Hooks, Anchors",
     path: "/sheet-metals/lacing-hooks",
    },
  {
     title: "Quilting Pins",
     path: "/sheet-metals/quilting-pins",
    },
  {
     title: "Sheet Metal Hand Tools",
     path: "/sheet-metals/sheet-metal-hand-tools",
    },
  
];


function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [insulationNestedMenu, setInsulationNestedMenu] = React.useState(false);
  const [metalNestedMenu, setMetalNestedMenu] = React.useState(false);
  const [accessoryNestedMenu, setAccessoryNestedMenu] = React.useState(false);
  const [refractoryNestedMenu, setRefractoryNestedMenu] = React.useState(false);
  const [sheetmetalNestedMenu, setSheetmetalNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (menu) =>
    menu.map(({ title, path }, key) => (
    
      <Link to={path} key={key}>
        <MenuItem>{title}</MenuItem>
      </Link>
      
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
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 font-sans no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-deep-orange-700 after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-105"
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
            <Link to={"/insulation-and-cladding-accessories"}>
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
            </Link>
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
            <Link to={"/refractory-materials"}>
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
            </Link>
            <MenuList className="rounded-xl">
              {renderItems(refractoryMaterials)}
            </MenuList>
          </Menu>
 {/* New menu item start */}
 <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={sheetmetalNestedMenu}
            handler={setSheetmetalNestedMenu}
          >
            <Link to={"/sheet-metal"}>
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  High Temperature Fabrics & Accessories
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
              {renderItems(sheetMetal)}
            </MenuList>
          </Menu>
          {/* New menu item end */}
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
            <Link to={"/insulation-and-cladding-accessories"}>
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
            </Link>
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
            <Link to={"/refractory-materials"}>
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
            </Link>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems(refractoryMaterials)}
            </MenuList>
          </Menu>

<Menu
            placement="bottom"
            allowHover
            offset={6}
            open={sheetmetalNestedMenu}
            handler={setSheetmetalNestedMenu}
          >
            <Link to={"/sheet-metal"}>
              <MenuHandler className="flex items-center justify-between">
                <MenuItem>
                  High Temperature Fabrics & Accessories
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
              {renderItems(sheetMetal)}
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
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-black font-sans no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-deep-orange-700 after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-105 focus:outline active-outline">
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
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-black font-sans no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-deep-orange-700 after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-105">
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
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-black font-sans no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-deep-orange-700 after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-105">
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
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-black font-sans no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-deep-orange-700 after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-105">
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
              className="sm:h-12 w-full rounded-lg object-cover object-center "
              src="/images/logo.svg"
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

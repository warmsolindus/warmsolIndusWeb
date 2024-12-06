import React, { useEffect } from "react";

import {
  Typography,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";
import FooterWithSitemap from "../components/Footer";
import Card from "../components/Cards";
import metalJacketingMaterials from "../data/metalJacketingMaterials";
export default function MetalJacketingMaterials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

  return (
    <div className="bg-amber-100">
      <NavigationbarWithDropdownMultilevelMenu />
      <div className="flex flex-wrap gap-8 justify-center py-6">
        {metalJacketingMaterials.map((item) => {
          return (
            <Card
              title={item.title}
              subTitle={item.subTitle}
              imgUrl={item.imgUrl}
              links={item.links}
            />
          );
        })}
      </div>
      <div>
        <FooterWithSitemap />
      </div>
    </div>
  );
}

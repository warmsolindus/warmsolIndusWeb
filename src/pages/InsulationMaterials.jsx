import React, { useEffect } from "react";
import NavigationbarWithDropdownMultilevelMenu from "../components/Navbar";
import FooterWithSitemap from "../components/Footer";
import insulationMaterials from "../data/insulationMaterials";
import Card from "../components/Cards";

export default function InsulationMaterials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-amber-100">
      <NavigationbarWithDropdownMultilevelMenu />
      <div className="flex flex-wrap gap-8 justify-center py-6">
        {insulationMaterials.map((item) => {
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
        <FooterWithSitemap />
    </div>
  );
}

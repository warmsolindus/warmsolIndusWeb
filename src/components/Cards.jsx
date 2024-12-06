import React from "react";
import { Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,

 } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Cards = ({ title, subTitle, imgUrl, links }) => {
  return (
    // <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-2">
    //   <div class="md:flex">
    //     <div class="md:shrink-0">
    //       <img
    //         class="h-72 w-full object-cover md:h-full md:w-72 hover:scale-105"
    //         src={imgUrl}
    //         alt="Product Image"
    //       />
    //     </div>
    //     <div class="p-8">
    //       <div class="uppercase tracking-wide text-xl text-indigo-500 font-extrabold">
    //         {title}
    //       </div>
    //       <p class="py-3 text-sm text-slate-500">{subTitle}</p>
    //       <Link to ={links}>
    //       <Button variant="gradient">
    //         View More
    //       </Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    // <div className="flex flex-wrap gap-3">
    <Card className="mt-6 w-96 flex">
      <CardHeader color="white" className="relative h-56">
        <img
        className="hover:scale-105"
          src={imgUrl}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-indigo-500">
        {title}
        </Typography>
        <Typography>
        {subTitle}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={links}>
        <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
    // </div>
  );
};

export default Cards;

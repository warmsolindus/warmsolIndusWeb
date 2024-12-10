import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Cards = ({ title, subTitle, imgUrl, links }) => {
  return (
    <Card className="mt-6 w-96 flex">
      <CardHeader color="white" className="relative h-56">
        <img className="hover:scale-105" src={imgUrl} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-indigo-500"
        >
          {title}
        </Typography>
        <Typography>{subTitle}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={links}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Cards;

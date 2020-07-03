import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Product = (props) => {
  const items = props.data.map((item) => {
    const { id, productName, icon } = item;
    return (
      <li className="Product">
        <Link key={id} to={`/product/${id}`}>
          <Card>
            <CardImg />
            <CardBody>
              <CardTitle>{productName}</CardTitle>
              <CardSubtitle>{icon}</CardSubtitle>
              <CardText></CardText>
              <Button></Button>
            </CardBody>
          </Card>
        </Link>
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Product </h3>
      <ul className="Products">{items}</ul>
    </React.Fragment>
  );
};

export default Product;

import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const ProductInfo = (props) => {
  console.log(props);
  // const selectedItem = props.data.filter((item) => item.id == match.params.id);
  const selectedItem = props.data.filter((item) => item.id == props.id);
  const moreInfo = selectedItem.map((item) => {
    const { id, productName, icon } = item;
    return (
      <div className="cards-container" key={id}>
        <Card>
          <CardImg />
          <CardBody>
            <CardTitle>{productName}</CardTitle>
            <CardSubtitle>{icon}</CardSubtitle>
            <CardText></CardText>
            <Button></Button>
          </CardBody>
        </Card>
      </div>
    );
  });
  return (
    <React.Fragment>
      <h3>Product further infos</h3>
      {moreInfo}
    </React.Fragment>
  );
};

export default ProductInfo;

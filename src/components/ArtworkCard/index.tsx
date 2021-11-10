import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Artwork } from "../../store/artworkDetails/types";

export default function ArtworkCard(props: Artwork) {
  return (
    <>
      <Card border="col">
        <Card.Img src={props.imageUrl} alt="Card image" />
        <strong>{props.title}</strong>
        <Link to={`/artworks/${props.id}`}>
          <Button>See details</Button>
        </Link>
        <Container>
          <Row>
            <Col>
              {props.hearts}
              <span role="img" aria-label="heart">
                &#10084;
              </span>
            </Col>
            <Col>
              {props.numberOfBids}
              <span role="img" aria-label="Money-Mouth Face">
                &#129297;
              </span>
            </Col>
          </Row>
        </Container>
      </Card>
      <br />
    </>
  );
}

import React from 'react';
import { Card, CardText, CardBody, CardHeader, Row, Col } from 'reactstrap';

const Instructions = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardHeader className="text-white bg-primary">
            Apples vs Bananas
          </CardHeader>
          <CardBody>
            <CardText>
              Pick the fruit that you like the most (for a quick snack) between
              Option A and B.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Instructions;

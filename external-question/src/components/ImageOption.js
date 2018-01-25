import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class ImageOption extends Component {
  render() {
    const { src, title, alt } = this.props;
    return (
      <Card>
        <CardImg top width="100%" height="300px" src={src} alt={alt} />
        <CardBody>
          <CardTitle>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="choice"
                  value={this.props.value}
                  required
                />
                {title}
              </Label>
            </FormGroup>
          </CardTitle>

          {this.props.children}
        </CardBody>
      </Card>
    );
  }
}

export default ImageOption;

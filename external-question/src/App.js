import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import ImageOption from 'src/components/ImageOption';
import Instructions from 'src/components/Instructions';
import QuestionForm from 'src/components/QuestionForm';

class App extends Component {
  render() {
    return (
      <Container>
        <Instructions />
        <QuestionForm>
          <Row style={{ marginTop: '20px' }}>
            <Col xs="6">
              <ImageOption
                title="Option A"
                value="apple"
                alt="Apple"
                src="https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg">
                <div style={{ fontSize: '8px' }}>
                  Photo by Abhijit Tembhekar from Mumbai, India (Nikon D80
                  Apple) [
                  <a href="http://creativecommons.org/licenses/by/2.0">
                    CC BY 2.0
                  </a>],
                  <a href="https://commons.wikimedia.org/wiki/File%3ARed_Apple.jpg">
                    via Wikimedia Commons
                  </a>
                </div>
              </ImageOption>
            </Col>
            <Col xs="6">
              <ImageOption
                title="Option B"
                value="banana"
                alt="Banana"
                src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg">
                <div style={{ fontSize: '8px' }}>
                  Photo by Evan-Amos (Own work) [
                  <a href="https://creativecommons.org/licenses/by-sa/3.0">
                    CC BY-SA 3.0
                  </a>],
                  <a href="https://commons.wikimedia.org/wiki/File%3ABanana-Single.jpg">
                    via Wikimedia Commons
                  </a>
                </div>
              </ImageOption>
            </Col>
          </Row>
        </QuestionForm>
      </Container>
    );
  }
}

export default App;

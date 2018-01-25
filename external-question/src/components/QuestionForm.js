import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import queryString from 'query-string';

import config from 'src/config/config.json';

// const ENV = process.env.NODE_ENV;
const ENV = 'development';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.qs = queryString.parse(props.location.search);
    this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          {this.props.children}

          <Row style={{ marginTop: '20px' }}>
            <Col xs={{ size: 4, offset: 4 }}>
              <Button
                type="submit"
                size="lg"
                color="primary"
                block
                disabled={!this.hasAcceptedHIT()}>
                Submit
              </Button>
            </Col>
          </Row>
        </form>
        <form id="turkForm" method="POST" />
      </div>
    );
  }

  hasAcceptedHIT() {
    return (
      this.qs.assignmentId &&
      this.qs.assignmentId !== 'ASSIGNMENT_ID_NOT_AVAILABLE'
    );
  }

  getMTurkUrl() {
    const url = `${config['submit'][ENV]}/?assignmentId=${
      this.qs.assignmentId
    }`;
    return url;
  }

  submit(event) {
    event.preventDefault();
    const choice = document.querySelector('input[name="choice"]:checked').value;
    let form = document.getElementById('turkForm');
    form.action = `${this.getMTurkUrl()}&choice=${choice}`;
    form.submit();
  }
}

export default withRouter(QuestionForm);

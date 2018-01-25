import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import queryString from 'query-string';
import axios from 'axios';

import config from 'src/config/config.json';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.qs = queryString.parse(props.location.search);
    this.submit = this.submit.bind(this);
    this.getAnswer = this.getAnswer.bind(this);
    this.postToMturk = this.postToMturk.bind(this);
    this.postToApi = this.postToApi.bind(this);
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
    const url = `${config.mturk[config.mode]}/?assignmentId=${
      this.qs.assignmentId
    }`;
    return url;
  }

  submit(event) {
    event.preventDefault();

    if (config.server) {
      this.postToApi();
    } else {
      this.postToMturk();
    }
  }

  postToMturk() {
    const choice = this.getAnswer();
    let form = document.getElementById('turkForm');
    form.action = `${this.getMTurkUrl()}&choice=${choice}`;
    form.submit();
  }

  getAnswer() {
    return document.querySelector('input[name="choice"]:checked').value;
  }

  postToApi() {
    let payload = {
      choice: this.getAnswer(),
      assignmentId: this.qs.assignmentId,
      hitId: this.qs.hitId,
      workerId: this.qs.workerId,
      userAgent: navigator.userAgent
    };

    axios
      .post(`${config.server}/v1/answers`, payload)
      .then(response => this.postToMturk())
      .catch(error => {
        console.error(error);
        this.postToMturk();
      });
  }
}

export default withRouter(QuestionForm);

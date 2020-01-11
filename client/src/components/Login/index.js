import React, { Component } from 'react';

import API from '../../utils/API';
import { Redirect, Link } from 'react-router-dom';

import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from '../Form';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          if (res.status === 200) {
            this.props.authenticate();
            return <Redirect to='/mymonthly' />;
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='12'>
            <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name='email'
                placeholder='email (required)'
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name='password'
                placeholder='(required)'
                type='password'
              />
              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                <Link to='/signup'> Sign up </Link>
              </FormBtn>

              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                sign in
              </FormBtn>
            </form>
          </Col>
        </Row>

        {/* Redirect on authentication */}
        {this.props.authenticated ? <Redirect to='/mymonthly' /> : <div></div>}
      </Container>
    );
  }
}

export default Login;

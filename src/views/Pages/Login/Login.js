import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './login.css';
import axios from 'axios';
import ApiUrl from '../../../enviorment';
import {unregister} from '../../../intercepter';
class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {visible: false};
    this.state = {
      username: '',
      password: '',
      formErrors: {username: '', password: ''},
      usernameValid: false,
      passwordValid: false,
      formValid: false,
      succss:false,
      forgotEmail:''
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'username':
        usernameValid = value.length >0;
        fieldValidationErrors.username = usernameValid ? '' : 'Please enter the username';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': 'Password should atleast 6 char long';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  authUser()
  {
    axios.post(ApiUrl+'/'+ 'users')
      .then(res => {
         this.setState({succss:"true"})
        this.props.history.push('/home');
      })
  }

  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

render() {
    return (

      <div className="app flex-row align-items-center backgroundImg" >
      <div className="layer">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <div className="p-3">
                  <img className="logo" src="/assets/img/logo.png"></img>
                   <div>
                    <p className="text-muted"></p>
                    <label className="Remember" for="Username">Username</label>
                    <InputGroup className="mb-3">
                      <Input type="text" name="username" value={this.state.username} onChange={this.handleUserInput}   size="4" placeholder="Username" />
                    </InputGroup>
                    <p className="onerror Remember">{this.state.formErrors.username}</p>
                    <label className="Remember" for="Password">Password</label>
                      <InputGroup className="mb-3">
                      <Input type="password"  name="password" size="4" value={this.state.password} onChange={this.handleUserInput} placeholder="Password" />
                    </InputGroup>
                    <p className="onerror Remember"> {this.state.formErrors.password}</p>
                    <Row>
                      <Col xs="6" className="Remember">
                        <input className="checkbox-align" type="checkbox"/> Remember me
                      </Col>
                      <Col xs="6" className="text-right">
                        <a href="#" class="active">Forgot password?</a>
                      </Col>
                    </Row>
                  </div>
                  <p></p>
                   <Button color="danger" onClick={((e) => this.authUser())}   disabled={!this.state.formValid} className="loginbtn">Sign In</Button>
                </div>
             
              </CardGroup>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    );
  }
}

export default Login;

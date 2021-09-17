import "../viewsstyle/SignUpView.css";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { signUpUserToApi } from "../services/signUpService";

const SignUpView = () => {
  const [newuser, setnewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const history = useHistory();

  function validateForm() {
    return newuser.email.length > 0 && newuser.password.length > 0;
  }

  function handleChange(event) {
    setnewUser({
      ...newuser,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const userResponse = await signUpUserToApi(newuser);
    setnewUser({
      name: "",
      email: "",
      password: "",
      role: "",
    });
    history.push("/");
    window.location.reload();
    alert("Your profile was succesfully created! Try signing in!");
  }

  return (
    <section className="mainSignUp">
      <div className="Signup">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={newuser.name}
              placeholder="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={newuser.email}
              placeholder="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="password"
              value={newuser.password}
              onChange={handleChange}
            />
          </Form.Group>
          <label>Do you wish to be a customer or a provider?</label>
          {/* <select
                    onChange={handleChange}
                    name="role"
                    className="form-control"
                  >
                    <option>Select a role</option>
                    <option value={newuser.role = 'CUSTOMER'}> Customer</option>
                    <option value={newuser.role = 'PROVIDER'}> Provider</option>
                  </select> */}
          <div>
            <input type="checkbox" name="role" checked />
            <label value={newuser.role = 'CUSTOMER'}>Customer</label>
            <input type="checkbox" name="role" />
            <label value={newuser.role = 'PROVIDER'}>Provider</label>
            
          </div>
          <Button
            size="lg"
            type="submit"
            disabled={!validateForm()}
            className="loginButton"
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default SignUpView;

import "../viewsstyle/LoginView.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { loginUserToApi } from "../services/authService";
import { isAuthenticated } from "../services/authService";

const LoginView = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  function validateForm() {
    return user.email.length > 0 && user.password.length > 0;
  }

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const userResponse = await loginUserToApi(user);
    setUser({
      email: "",
      password: "",
    });
    if (isAuthenticated() && isAuthenticated().user.role === "USER") {
      history.push("/customerportal");
    }
    if (isAuthenticated() && isAuthenticated().user.role === "PROVIDER") history.push("/");
    
    window.location.reload();
  }

  return (
    <section className="main">
      <div className="Login">
        <Form >
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={user.email}
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
              value={user.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
          onClick={handleSubmit}
            size="lg"
            type="submit"
            disabled={!validateForm()}
            className="loginButton"
          >
            Login
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default LoginView;

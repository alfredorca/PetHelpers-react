import "../viewsstyle/SignUpView.css";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const SchedulePet = () => {
  const [newSession, setNewSession] = useState({
    date: "",
    service: "",
  });

  const history = useHistory();

  function handleChange(event) {
    setNewSession({
      ...newSession,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setNewSession({
      date: "",
      service: "",
    });
    history.push("/");
    window.location.reload();
    alert("Your appointment was succesfully scheduled! See you soon!");
  }

  return (
    <section className="CustomerPortalViewMain">
      <div className="customerContainer">
        <div className="customerSection">
          <div className="contentContainer">
            <h2>Good to see you!</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group size="lg" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  name="date"
                  type="date"
                  value={newSession.date}
                  placeholder="date"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="service">
                <Form.Label>Service</Form.Label>
                <Form.Control
                  name="service"
                  type="text"
                  value={newSession.service}
                  placeholder="service"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button size="lg" type="submit" className="loginButton">
                Schedule
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulePet;

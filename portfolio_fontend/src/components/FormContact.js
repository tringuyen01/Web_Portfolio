import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios'
export default function FormContact() {
  const [form, setForm] = useState({
    email: "",
    feedBack: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
  function submitForm(e) {
    e.preventDefault();
    const { email, feedBack } = form;
    axios.post('http://localhost:5000/feedback', {
      email: email,
      desc: feedBack
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    
  }
  
  return (
    <Form onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email address to contact</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={form.email}
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          as="textarea"
          rows={7}
          placeholder="Feedback"
          onChange={handleChange}
          value={form.feedBack}
          name="feedBack"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

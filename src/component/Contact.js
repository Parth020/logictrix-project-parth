import React, { useState } from 'react'
import {Form, Row, Col,InputGroup, Button} from "react-bootstrap"

function Contact() {

  const handleSubmit = (event) => {
    if(event.target[2].value < 25 || event.target[2].value > 45 ){
      alert("Please Enter valid age")
    }
    if(event.target[3].value.length > 255 ){
      alert("Message is more longer then expected")
    }
  
    event.preventDefault();   

  };
    return (
      
        <div className="container mt-4">
            <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" >
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Name"
            autoFocus
            required
            name = "name"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="8" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name = "email"
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" >
          <Form.Label>Enter Age</Form.Label>
          <Form.Control name = "age" type="Number" placeholder="Age" required />
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="12" >
      <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
      name = "comments"
      required
   />
     </Form.Group>
    </Row>
     <Button type="submit">Submit form</Button>
    </Form>
        </div>
    )
}

export default Contact

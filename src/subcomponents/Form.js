import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SimpleForm() {
    return (
    <Container id="form_container">
                    <h2 id="contact_h2">Or leave your information below:</h2>
      <Form>
        <Form.Group controlId="formName">
            <Form.Label>Name
            <Form.Control type="text" placeholder="Enter name." />
            </Form.Label>
            <Form.Label>Phone Number
            <Form.Control role="phone-number" type="tel" placeholder="Enter phone number." />
            </Form.Label>
            <Form.Label>Email
            <Form.Control type="email" placeholder="Enter email." />
            </Form.Label>
            <Form.Label>Best date to contact you
            <Form.Control type="date"/>
            </Form.Label>
            <Form.Label>Best time to contact you
            <Form.Control type="time"/>
            </Form.Label>
            <Form.Label>Time zone
            <Form.Control type="text"/>
            </Form.Label>
            <Form.Label>Additional information
            <Form.Control as="textarea" rows={3} />
            </Form.Label>
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    </Container>
    );
       
}

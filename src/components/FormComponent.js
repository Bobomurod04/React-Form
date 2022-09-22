import React from 'react'
import { Form, Button } from 'react-bootstrap'

class FormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { handler } = this.props
    return (
      <div>
        <h1>Add User</h1>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handler}
              type="tex"
              placeholder="Username"
              name="username"
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handler}
              type="text"
              placeholder="Name"
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handler}
              type="email"
              placeholder="Email"
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={handler}
              type="tel"
              placeholder="Phone"
              name="phone"
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              onChange={handler}
              type="text"
              placeholder="Company Name"
              name="company"
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={handler}
              type="City"
              placeholder=" City"
              name="city"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default FormComponent

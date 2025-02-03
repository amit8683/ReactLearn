import React,{ useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Bootstrap = () => {
    const [hover, setHover] = useState(false);
  return (
    <div>
        <h1>Install Bootstrap</h1>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Label>Range</Form.Label>
      <Form.Range />
    </Form>
      <Button style={{border:"2px solid black",backgroundColor:hover?"blue":"black"}} variant="primary" onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

export default Bootstrap

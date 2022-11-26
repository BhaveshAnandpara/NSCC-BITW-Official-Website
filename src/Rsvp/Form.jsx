


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import './Form.css'

function FormRsvp() {
  return (
    <>
 <section >

<Button variant="outline-light " className='m-3 mb-0' size="sm">Back</Button>{' '}
    <div className="container">
      
    <Form className='formInput'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  className="textcolor" >Your Name</Form.Label>
        <Form.Control className='formInput textcolor' type="text" placeholder="Bhavesh Anadpara" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="textcolor" >Email address</Form.Label>
        <Form.Control   type="email" placeholder="name@example.com" className='formInput textcolor' />
      </Form.Group>
      
      <Form.Select aria-label="Default select example" className="mb-3 formInput textcolor">
      <option>Select Current Study Year</option>
      <option value="1">First Year</option>
      <option value="2">Second Year</option>
      <option value="3">Third Year</option>
      <option value="4">Fourth Year</option>

    </Form.Select> 

    <Form.Select aria-label="Default select example"className="mb-3 formInput textcolor">
      <option>Select Branch</option>
      <option value="1">Computer Engineering</option>
      <option value="2">Electrical Engineering</option>
      <option value="3">Mechanical Engineering</option>
      <option value="4">Civil Engineering</option>

    </Form.Select> 

    <Form.Select aria-label="Default select example" className="mb-3 formInput textcolor ">
      <option>Select Batch</option>
      <option value="1">B1</option>
      <option value="2">B2</option>
      <option value="3">B3</option>
      

    </Form.Select> 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="textcolor" >Whatsapp Number</Form.Label>
        <Form.Control className='formInput' type="number" placeholder="7058775710" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="textcolor" >Suggestion For Event</Form.Label>
        <Form.Control className='formInput' as="textarea" rows={3} />
      </Form.Group>
      <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">RSVP</strong>
        <small>3 sec ago</small>
      </Toast.Header>
      <Toast.Body  className=" bg-Primary">Click on RSVP to register.</Toast.Body>
    </Toast>
      <Button variant="outline-light " className='m-3 mb-0 center' data-toggle="tooltip" data-placement="bottom" title="Click on RSVP to register"
 size="sm" >RSVP</Button>{' '}
    </Form>
    </div>
    </section>
    </>
    
  );
}

export default FormRsvp;
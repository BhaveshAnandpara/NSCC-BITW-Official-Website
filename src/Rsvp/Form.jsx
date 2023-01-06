


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import './Form.css'

function FormRsvp() {
  return (
    <>
      <section className='rsvpSec' >

        <div className="RSVPcontainer glass">

          <h2>NSCC BITW CodeRush-X</h2>
          <p className="formDesc">The TIME has finally arrived for the 3rd Edition of Code Rush X (Formerly known as Grand Coding Contest) 📣
            <br />
            | 𝐏𝐫𝐢𝐳𝐞 𝐌𝐨𝐧𝐞𝐲 & 𝐆𝐢𝐟𝐭 𝐕𝐨𝐮𝐜𝐡𝐞𝐫𝐬 𝐰𝐨𝐫𝐭𝐡- ₹ 10,00,000/- <b> &#128176; </b>
            <br />
            *Get placement and internship opportunities in Top Tech Companies*
            <br />
            Exclusive 𝗙𝗿𝗲𝗲 𝗕𝗲𝗴𝗶𝗻𝗻𝗲𝗿 𝗳𝗿𝗶𝗲𝗻𝗱𝗹𝘆 Coding Course & Internship Opportunities. 😎<br />
            Language Used: c/c++/Java/Javascript/Python. <br />
            <br />
            𝗗𝗮𝘁𝗲 𝗼𝗳 𝗖𝗼𝗻𝘁𝗲𝘀𝘁: 28𝘁𝗵 Jan 𝟮𝟬𝟮3 𝗮𝘁 𝟮𝟭:𝟬𝟬 - 00:00 📆<br />
            Eligibility- Open to Coder and Non-Coders <br />
            <br />
            𝗣.𝗦. This event happens only twice a year and you are part of the best Global Coding Contest. ⏰ <br />
            <br />
            Person with most referrals will have a chance to win exciting goodies 📢</p>

          <Form className='formInput'>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

              <Form.Label className="textcolor" >Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" className='formInput textcolor glass' />

            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

              <Form.Label className="textcolor" >Name</Form.Label>
              <Form.Control className='formInput textcolor glass' type="text" placeholder="Bhavesh Anandpara" />

            </Form.Group>

            <Form.Label className="textcolor" >Year</Form.Label>
            <Form.Select aria-label="Default select example" style={{ 'opacity': '0.3' }} defaultValue={0} className="mb-3 formInput textcolor glass" onChange={(e) => { e.target.style.opacity = '1' }} >

              <option value='0' >Select Current Study Year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>

            </Form.Select>

            <Form.Label className="textcolor" >Branch</Form.Label>
            <Form.Select aria-label="Default select example" style={{ 'opacity': '0.3' }} defaultValue={0} className="mb-3 formInput textcolor glass" onChange={(e) => { e.target.style.opacity = '1' }}>

              <option value='0'>  Select Branch</option>
              <option value="1">  Computer Engineering</option>
              <option value="2">  Electrical Engineering</option>
              <option value="3">  Mechanical Engineering</option>
              <option value="4">  Civil Engineering</option>

            </Form.Select>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

              <Form.Label className="textcolor" >Phone No. ( WhatsApp )</Form.Label>
              <Form.Control className='formInput glass' type="text" maxLength={10} placeholder="Your Answer" />

            </Form.Group>

            <Button variant="outline-light " style={{ 'border': 'none' }} className=' mb-0 mt-4 glass' data-toggle="tooltip" data-placement="bottom" size="sm" >Submit</Button>
          </Form>


        </div>
      </section>
    </>

  );
}

export default FormRsvp;
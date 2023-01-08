


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { useEffect, useRef, useState } from 'react';
import './Form.css'
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import { create } from '@mui/material/styles/createTransitions';
import { CloseFullscreen, WindowOutlined } from '@mui/icons-material';

function FormRsvp() {

  const [formData, setformData] = useState()
  const [userData, setUserData] = useState({status : false})
  const rsvpCon = useRef()
  const selectCon = useRef()

  useEffect(() => {

    const title = (window.location.href).split('/').reverse()[0]

    var config = {
      method: 'get',
      url: `https://nscc-bitw-website-backend.vercel.app/home/forms?title=${title}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.date)

        const today = new Date()
        const lastDate = new Date(response.data.date)

        if (today > lastDate) {
          window.location.href = `/rsvp/${title}/formClosed`
        }


        setformData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });


  }, [])

  useEffect(() => {

    // console.log(formData);

    const root = createRoot(rsvpCon.current)

    try {

      const formFields = []

      formFields.push(
        <Form className='formInput'>

          {
            addFormFields(formData.fields)
          }

          <Button variant="outline-light " style={{ 'border': 'none' }} className=' mb-0 mt-4 glass' data-toggle="tooltip" data-placement="bottom" size="sm" onClick={() => { handleSubmit() }} >Submit</Button>
        </Form>
      )

      root.render(
        <>
          <h2> {formData.title} </h2>
          <p className="formDesc">{formData.desc}</p>

          {formFields}

        </>
      )

    } catch (e) { }


  }, [formData])


  function addFormFields(data) {

    const fieldStructure = []


    data.forEach(element => {

      const field = element['field']

      if (field.type) {

        fieldStructure.push(
          <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

              <Form.Label className="textcolor" >{field.name}</Form.Label>
              <Form.Control id={field.id} defaultValue={""} type={field.type} placeholder={field.placeholder} className='formInput textcolor glass' />

            </Form.Group>
          </>
        )

      }
      else if (field.options) {


        fieldStructure.push(
          <>

            <Form.Label className="textcolor" >{field.name}</Form.Label>
            <Form.Select id={field.id} ref={selectCon} aria-label="Default select example" style={{ 'opacity': '0.3' }} defaultValue={0} className="mb-3 formInput textcolor glass" onChange={(e) => { e.target.style.opacity = '1' }} >
              {pushOptions(field.options)}
            </Form.Select>
          </>
        )


      }




    });

    return fieldStructure;

  }

  function pushOptions(data) {

    const arr = []

    try {

      data.forEach((opt, index) => {
        arr.push(
          <>
            <option value={index}> {opt} </option>
          </>
        )
      })

      return arr

    } catch (e) { }

  }

  function handleSubmit() {

    let data = {}
    formData.fields.forEach((field) => {
      if (field['field'].type)
        data[field['field'].id] = document.getElementById(field['field'].id).value
      else {
        data[field['field'].id] = (field['field'].options)[document.getElementById(field['field'].id).value]
      }
    })

    setUserData({ status : true , title: formData.title, data: data })



  }

  useEffect(() => {

    console.log(userData);

    if( userData.status ){


    var config = {
      method: 'post',
      url: 'http://localhost:9001/home/addDataIntoExcel',
      headers: {
        'Content-Type': 'application/json'
      },
      data: userData
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === 200) {
          alert('Response Saved')
          window.location.href = '/'
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }


  }, [userData])


  return (
    <>
      <section className='rsvpSec' >

        <div className="RSVPcontainer glass" ref={rsvpCon} >




        </div>
      </section>
    </>

  );
}

export default FormRsvp;
import React, { useCallback, useRef, useState } from 'react'
import { Form, Button, FormGroup, Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

import LoadingSpinner from '../../../../components/LoadingSpinner'

const AddDriverForm = ({ addDriver }) => {
  const [validated, setValidated] = useState(false)
  const [uploading, setUploading] = useState(false)

  const inputDriverFirstName = useRef(null)
  const inputDriverLastName = useRef(null)
  const inputDriverAge = useRef(null)
  const inputDriverEmail = useRef(null)
  const inputCarLicensePlate = useRef(null)
  const inputCarModel = useRef(null)
  const inputCarYear = useRef(null)

  const buildPayload = () => ({
    firstName: inputDriverFirstName.current.value,
    lastName: inputDriverLastName.current.value,
    age: inputDriverAge.current.value,
    email: inputDriverEmail.current.value,
    carLicensePlate: inputCarLicensePlate.current.value,
    carModel: inputCarModel.current.value,
    carYear: inputCarYear.current.value
  })

  const clearInputs = () => {
    inputDriverFirstName.current.value = ''
    inputDriverLastName.current.value = ''
    inputDriverAge.current.value = ''
    inputDriverEmail.current.value = ''
    inputCarLicensePlate.current.value = ''
    inputCarModel.current.value = ''
    inputCarYear.current.value = ''
  }

  const handleSubmit = useCallback(
    (event) => {
      const form = event.currentTarget

      event.preventDefault()
      event.stopPropagation()

      if (form.checkValidity() === false) {
        setValidated(true)
      } else {
        setUploading(true)
        addDriver(buildPayload()).then((driverAdded) => {
          if (driverAdded) {
            clearInputs()
          }
          setUploading(false)
        })
      }
    },
    [addDriver]
  )

  return (
    <>
      <br />
      <h2 className='text-center'>Formulario para añadir a un conductor</h2>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='justify-content-md-center'>
          <Col sm='7'>
            <h5>Datos del conductor</h5>
            <FormGroup controlId='driverFirstName'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control ref={inputDriverFirstName} required readOnly={uploading} type='text' placeholder='Ingresar nombre'></Form.Control>
            </FormGroup>
            <FormGroup controlId='driverLastName'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control ref={inputDriverLastName} required readOnly={uploading} type='text' placeholder='Ingresar apellido'></Form.Control>
            </FormGroup>
            <FormGroup controlId='driverAge'>
              <Form.Label>Edad</Form.Label>
              <Form.Control ref={inputDriverAge} required readOnly={uploading} type='number' placeholder='Ingresar edad'></Form.Control>
            </FormGroup>
            <FormGroup controlId='driverEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control ref={inputDriverEmail} required readOnly={uploading} type='email' placeholder='Ingresar email'></Form.Control>
              <Form.Control.Feedback type='invalid'>Por favor ingrese una dirección de correo electrónico válida</Form.Control.Feedback>
              <Form.Text className='text-muted'>
                Tu dirección de email nunca va a ser compartida con otras entidades.
              </Form.Text>
            </FormGroup>
          </Col>
          <Col sm='5'>
            <h5>Datos del vehículo</h5>
            <FormGroup controlId='driverCarLicensePlate'>
              <Form.Label>Patente vehículo</Form.Label>
              <Form.Control ref={inputCarLicensePlate} required readOnly={uploading} type='text' placeholder='Ingresar patente'></Form.Control>
            </FormGroup>
            <FormGroup controlId='driverCarModel'>
              <Form.Label>Modelo vehículo</Form.Label>
              <Form.Control ref={inputCarModel} required readOnly={uploading} type='text' placeholder='Ingresar modelo'></Form.Control>
            </FormGroup>
            <FormGroup controlId='driverCarYear'>
              <Form.Label>Año vehículo</Form.Label>
              <Form.Control ref={inputCarYear} required readOnly={uploading} type='text' placeholder='Ingresar año'></Form.Control>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm='12'>
            <Button variant='primary' type='submit' disabled={uploading}>Agregar conductor</Button>
            {uploading && <LoadingSpinner />}
          </Col>
        </Row>
      </Form>
    </>
  )
}

AddDriverForm.propTypes = {
  addDriver: PropTypes.func.isRequired
}

export default AddDriverForm

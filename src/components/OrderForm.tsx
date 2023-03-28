import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  adress: Yup.string().required(),
  city: Yup.string().required(),
  zip: Yup.string().required(),
  email: Yup.string().email('Invalid email address').required(),
  phone: Yup.string()
    .required()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  terms: Yup.bool()
    .required()
    .oneOf([true], 'You must click it '),
});

export type OrderDetails = Yup.InferType<typeof schema>

const initialValues: OrderDetails = {
  firstName: '',
  lastName: '',
  adress: '',
  city: '',
  zip: '',
  email: '',
  phone: '',
  terms: false,
}


export function OrderForm() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h2 style={{textAlign: 'center'}}>Order Details</h2></div>
    <StyledFormContainer className="d-flex justify-content-center align-items-center">
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values)
        }}
        initialValues = {initialValues}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form data-cy="customer-form" noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik01"
                >
                <Form.Label>First name</Form.Label>
                <Form.Control
                  data-cy="customer-name"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback data-cy="customer-name-error">Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik03"
              >
                <Form.Label>Adress</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    data-cy="customer-address"
                    type="text"
                    name="adress"
                    value={values.adress}
                    onChange={handleChange}
                    placeholder="Adress"

                   
                  isValid={touched.adress && !errors.adress}
                />
                <Form.Control.Feedback data-cy="customer-address-error" type="invalid">
                  {errors.adress}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>City</Form.Label>
              <Form.Control
                data-cy="customer-city"
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik07">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                data-cy="customer-zipcode"
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>email</Form.Label>
              <Form.Control
                data-cy="customer-email"
                type="text"
                placeholder="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback data-cy="customer-email-error" type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik06">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                data-cy="customer-phone"
                type="text"
                placeholder="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />

              <Form.Control.Feedback data-cy="customer-phone-error" type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button style={{marginTop: '1rem'}} type="submit">Submit order and pay</Button>
        </Form>
      )}
    </Formik>
    </StyledFormContainer>
    </>
  );
}

const StyledFormContainer = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  background-color: lightgray;
  padding: 1rem;
  height: 70vh;

  @media (max-width: 768px) {
    height: 110vh;
  }
`;

/*x `data-cy="customer-form"` formulär för att fylla i kunduppgifter på checkout-sidan.
--------- `data-cy="customer-name"` kundens namn (som fylls i på checkout-sidan).
---------`data-cy="customer-address"` kundens gatuadress (som fylls i på checkout-sidan).
--------- `data-cy="customer-zipcode"` kundens postnummer (som fylls i på checkout-sidan).
x `data-cy="customer-city"` kundens stad (som fylls i på checkout-sidan).
x `data-cy="customer-email"` kundens emailadress (som fylls i på checkout-sidan).
x `data-cy="customer-phone"` kundens telefonnummer (som fylls i på checkout-sidan).
x `data-cy="customer-name-error"` felmeddelande vid felaktigt angivet namn.
x `data-cy="customer-address-error"` felmeddelande vid felaktigt angiven adress.
x `data-cy="customer-email-error"` felmeddelande vid felaktigt angiven emailadress.
x `data-cy="customer-phone-error"` felmeddelande vid felaktigt angivet telefonnummer. */
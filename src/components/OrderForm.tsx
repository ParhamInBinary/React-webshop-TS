import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as Yup from 'yup';


const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address: Yup.string().required(),
  city: Yup.string().required(),
  email: Yup.string().email('Invalid email address').required(),
  phone: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').required().test('len', 'Phone number must be exactly 10 digits', val => val && val.toString().length === 10),
  terms: Yup.bool().required().oneOf([true], 'You must click it '),
});


export function OrderForm() {
  return (
    <Formik 
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        email: '',
        phone: '',
        terms: false,
      }}
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
        <Form  noValidate onSubmit={handleSubmit} >
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  name="adress"
                  value={values.address}
                  onChange={handleChange}
                  isValid={touched.address && !errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>City</Form.Label>
              <Form.Control
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
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                placeholder="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik06">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />

              <Form.Control.Feedback type="invalid">
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
          <Button type="submit">Submit order and pay</Button>
        </Form>
      )}
    </Formik>
  );
}


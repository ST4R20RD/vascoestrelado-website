import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Must include your first name"),
  lastName: Yup.string().required("Must include your last name"),
  email: Yup.string().email().required("Must include your email"),
  subject: Yup.string().required("Must include the subject"),
  message: Yup.string().required("Must include your message"),
});

export function Contact() {
  const onSubmit = () => {};
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Label>
              First Name <Text>*</Text>
              {touched.firstName && errors.firstName && (
                <Text>{errors.firstName}</Text>
              )}
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                border={errors.firstName && "1px solid red"}
                type="text"
                id="firstName"
                name="firstName"
              />
            </Label>
            <Label>
              Last Name <Text>*</Text>
              {touched.lastName && errors.lastName && (
                <Text>{errors.lastName}</Text>
              )}
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                border={errors.lastName && "1px solid red"}
                type="text"
                id="lastName"
                name="lastName"
              />
            </Label>
            <Label>
              Email <Text>*</Text>
              {touched.email && errors.email && <Text>{errors.email}</Text>}
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                border={errors.email && "1px solid red"}
                type="email"
                id="email"
                name="email"
              />
            </Label>
            <Label>
              Subject <Text>*</Text>
              {touched.subject && errors.subject && (
                <Text>{errors.subject}</Text>
              )}
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                border={errors.subject && "1px solid red"}
                type="text"
                id="subject"
                name="subject"
              />
            </Label>
            <Label>
              Message <Text>*</Text>
              {touched.message && errors.message && (
                <Text>{errors.message}</Text>
              )}
              <FieldArea
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                border={errors.message && "1px solid red"}
                type="text"
                id="message"
                name="message"
              />
            </Label>
            <Button type="submit">Send Email</Button>
          </Form>
        )}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  padding: 10px 13px 10px 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Field = styled.input`
  width: 100%;
  height: 30px;
  margin: 1rem 0;
  border: none;
  border-radius: 5px;
`;

const FieldArea = styled.textarea`
  width: 100%;
  height: 30px;
  border: none;
  margin: 1rem 0;
  border-radius: 5px;
  resize: none;
`;

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  color: orange;
  width: 70%;
  margin: 1rem 0;
  #message {
    height: 100px;
  }
`;

const Text = styled.span`
  color: red;
`;

const Button = styled.button`
  color: black;
  font-weight: 800;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  background-color: orange;
`;

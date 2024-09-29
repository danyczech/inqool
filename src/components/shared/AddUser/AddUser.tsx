import { ReactElement } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { TUser } from '@/components/customTypes';
import Button from '../Button/Button';
import style from './AddUser.module.css';

type TFormValues = Omit <TUser, 'id'>

const AddUser = ():ReactElement => {

  const initialValues:TFormValues={
    name:'',
    gender:'other',
    banned: false,
  };

  const submitValues = (values:TFormValues) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    fetch('https://inqool-interview-api.vercel.app/api/users', requestOptions)
    .then (async response => {
      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson && await response.json();

      if (!response.ok) {
        const error = (data && data.message) || response.status;
          return Promise.reject(error);
      }
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Jméno je povinné'),
  });

  return(
    <div className={style.container}>
      <h3>Add user</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values:TFormValues, actions) => {
          submitValues(values);
          actions.setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >

      {({ errors, touched }) => (
        <Form className={style.form}>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Name" className="input"/>
            {errors.name && touched.name ? (<div className={style.error}>{errors.name}</div>) : null}
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <Field name="gender" as="select" className="input">
              <option value="other">Other</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </Field>
          </div>
          <div>
            <label htmlFor="banned">Banned</label>
            <Field id="banned" name="banned" type="checkbox" className={style.checkbox} />
          </div>
          <Button type="submit" variant="basic">Submit</Button>
        </Form>
      )}
      </Formik>
    </div>
  );
};

export default AddUser;

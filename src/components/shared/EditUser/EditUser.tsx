import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { TUser } from '@/components/customTypes';
import Button from '../Button/Button';
import style from './EditUser.module.css';

const EditUser = (user:TUser):ReactElement => {

  const router = useRouter();

  const initialValues = {
    id: user.id,
    name: user.name,
    banned: user.banned,
    gender: user.gender,
  }; 

  const submitValues = (values:TUser) => {
    const requestOptions = {
      method: 'PATCH',
      body: JSON.stringify(values),
    };

    fetch(`https://inqool-interview-api.vercel.app/api/users/${user.id}`, requestOptions)
    .then (async response => {
      await response.json();

      if (!response.ok) {
        const error = response.status;
          return Promise.reject(error);
      }

      router.push('/users');
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
      <h3>Edit user</h3>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={(values:TUser, actions) => {
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

export default EditUser;

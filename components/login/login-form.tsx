import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from './login-form.module.css'

interface Values {
    username: string, 
    password: string, 
}

export default function LoginForm() {
    return (
        <div className={styles.login_box + ' p-3'}>
            <Formik
                initialValues={{
                    username: '',
                    password: '', 
                }}

                onSubmit={(
                    values: Values, 
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2)); 
                        setSubmitting(false); 
                    }, 500);
                }}
            >
                <Form>
                    <div className='mb-3'>
                        <Field className='form-control' id='username' name='username' placeholder='Username' />
                    </div>
                    <div className='mb-3'>
                        <Field className='form-control' id='password' name='password' placeholder='Password' />
                    </div>
                    <button type='submit' className={styles.button + ' btn'}>Hello world</button>
                </Form>
            </Formik>
        </div>
    )
}
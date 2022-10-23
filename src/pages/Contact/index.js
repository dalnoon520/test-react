import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import React, { useCallback, useState } from 'react';
import { Button, Form, FormLayout, TextField } from '@shopify/polaris';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const cx = classNames.bind(styles);

let SignupSchema = Yup.object().shape({
    messages: Yup.string().min(2, 'Too Short!').max(156, 'Too Long!').required('Required'),
    subject: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});



function Contact() {
    const formik = useFormik({
        initialValues: {
            subject: '',
            messages: '',
            email: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            axios
                .post('https://testapi.io/api/anhez/contact-us', { values })
                .then(function (response) {
                    console.log(response.data.msg);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    });
    const handleChange = (value, id) => {
        formik.setFieldValue(id, value);
    };
    const { values, errors, touched } = formik;
    console.log('touched.email', touched);
    return (
        <div className={cx('contact-form')}>
            <h3 className={cx('contact-heading')}>Contact</h3>
            <Form onSubmit={formik.handleSubmit} className={cx('form-submit')}>
                <div className={cx('contact-description')}>
                    <div>
                        Don't hesitate to contact us if you're facing any problem or have any question about the app. We
                        are happy to help you.
                    </div>
                    <div>
                        Please give us permission to access your Shopify Admin. So we could support you quickly. We need
                        to access <span>App</span> and <span>Online Store Themes</span>. Our email address for creating
                        staff account is: <span>contact@globosoftware.net</span>
                    </div>
                </div>
                <FormLayout>
                    <TextField
                        value={values.email}
                        onChange={handleChange}
                        label="Your Email"
                        type="email"
                        autoComplete="email"
                        id="email"
                        error={touched.email && errors.email}
                    />
                    <TextField
                        value={values.subject}
                        onChange={handleChange}
                        label="Subject"
                        type="text"
                        id="subject"
                        error={touched.subject && errors.subject}
                    />
                    <TextField
                        value={values.messages}
                        onChange={handleChange}
                        label="Message"
                        type="text"
                        id="messages"
                        error={touched.messages && errors.messages}
                    />
                    <div></div>
                    <Button submit primary>Send</Button>
                </FormLayout>
            </Form>
        </div>
    );
}

export default Contact;

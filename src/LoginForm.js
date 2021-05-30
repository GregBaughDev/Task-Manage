import React from 'react';
import { useFormik } from 'formik';
import './LoginForm.css';

function LoginForm(){
    //Validate that there are values in the Username and Password inputs
    const validate = values => {
        const errors = {};
        if(!values.username) {
            errors.username = 'Username required';
        } 
        if(!values.password) {
            errors.password = 'Password required'
        }
        return errors;
    }
    //Hold the values from the input form
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const userValidation = formik.errors.username;
    const passValidation = formik.errors.password;
    //Input form built with Formik
    return(
        <div className="logFormHolder">
            <div className="logForm">
                <h2>Log In</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="formItem">
                            <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                    placeholder={formik.touched.username && formik.errors.username ? userValidation : null}
                                    />
                        </div>
                        <div className="formItem">
                            <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    placeholder={formik.touched.password && formik.errors.password ? passValidation : null}
                                    />
                        </div>
                    <button type="submit">Submit</button>
                    <button type="submit">New User</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
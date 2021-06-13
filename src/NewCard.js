import React from 'react';
import { useFormik } from 'formik';
import './NewCard.css';

function NewCard(){
    const formik = useFormik({
        initialValues: {
            title: "",
            dateTime: "",
            user: "",
            description: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    const onClick = () => {
        alert('close')
    }

        return(
            <div className="new-card">
                <div className="new-card-content">
                    <form className="new-card-form" onSubmit={formik.handleSubmit}>
                        <label htmlFor="newTask"></label>
                            <input id="title"
                                    name="title"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.title}
                                    placeholder="Task name" 
                                    />
                            <input id="dateTime"
                                    name="dateTime"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.dateTime}
                                    placeholder="Date and time (to configure so it automatically inserts)"
                                    />
                            <input id="user"
                                    name="user"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.user}
                                    placeholder="User"
                                    />
                            <textarea id="description"
                                    name="description"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}
                                    placeholder="Task description"
                                    cols="10"
                                    rows="10"
                                    />
                            <button type="submit">Submit</button>
                    </form>
                    <button onClick={onClick}>X</button>
                </div>
            </div>
        )
    }

export default NewCard;
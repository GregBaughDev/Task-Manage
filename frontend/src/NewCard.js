import React from 'react';
import { useFormik} from 'formik';
import './NewCard.css';

function NewCard(){
    const formik = useFormik({
        initialValues: {
            title: "",
            date: null,
            user: "",
            description: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })
    //Click handler
    const onClick = (e) => {
        if(e.target.innerText === "Cancel"){
            cancelForm(e);
        }
        if(e.target.innerText === "Submit"){
            formik.submitForm();
        }
    }
    //Reset the form if 'cancel' is clicked on new form
    const cancelForm = (e) => {
        formik.resetForm();
        e.target.offsetParent.className = "no-display";
    }

        return(
            // <div className="new-card">
                <div className="new-card-content">
                        <form className="new-card-form" onSubmit={formik.handleSubmit}>
                            <label htmlFor="newTask">Add a new item</label>
                                <input id="title"
                                        name="title"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.title}
                                        placeholder="Task name" 
                                        />
                                <input id="date"
                                        name="date"
                                        type="date"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.date}
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
                                        />
                                <div className="form-buttons"> 
                                    <button type="submit">Submit</button>
                                    <button type="reset" onClick={onClick}>Cancel</button>
                                </div>
                        </form>
                </div>
            // </div>
        )
    }

export default NewCard;
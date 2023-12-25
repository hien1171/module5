import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

 function BookUpdate() {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id)

    const [book, setBook] = useState({
        title: "",
        quantity: "",
    });

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        quantity: Yup.number().required("Quantity is required").positive().integer(),
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/books/${id}`)
            .then((response) => {
                setBook(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);


    return (
        <>
            <Formik
                initialValues={
                    {
                        title: book.title,
                        quantity: book.quantity,
                    }
                }
                enableReinitialize={true}

                validationSchema={validationSchema}

                onSubmit={(values) => {

                    axios.put(`http://localhost:8080/books/${id}`, values)
                        .then((response) => {
                            navigate("/books/list");
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }}
            >

                {
                    <div className="container-fluid">
                        <h1 className="text-light bg-success p-3 text-center text-uppercase">Edit Book</h1>
                        <Link to="/books/list" className="btn btn-primary">Back to list</Link>
                        <Form>
                            <div className="form-group">
                                <label>Title:</label>
                                <Field type="text" name="title" className="form-control" />
                                <ErrorMessage name="title" component="div" className="error" />
                            </div>
                            <div className="form-group">
                                <label>Quantity:</label>
                                <Field type="number" name="quantity" className="form-control" />
                                <ErrorMessage name="quantity" component="div" className="error" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </Form>
                    </div>
                }

            </Formik>
        </>
    )
}

export default BookUpdate;
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function BookCreate() {
    const navigate = useNavigate();
    const initValue = {
        title:"",
        quantity:0
    }
    const validateSchema = {
        title: Yup.string().required("Title is not empty")
            .min(3, "Title too short")
            .max(100, "Title too long"),
        quantity: Yup.number().min(1, "Quantity min is 1")
    }

    const createBook = async (values) => {
        try {
            await axios.post("http://localhost:8080/books", values);
            toast("Thêm mới thành công");
            navigate("/books/list")
        } catch(e) {
            console.log(e);
        }
    }
    return (
        <>
            <div className='container'>
                <h1>Create Book</h1>
                <Formik initialValues={initValue}
                        onSubmit={(values, {setSubmitting}) => {
                            setSubmitting(false);
                            createBook(values);

                        }}
                        validationSchema={Yup.object(validateSchema)}
                >
                    {
                        ({isSubmitting}) => (
                            <Form>
                                <div className='mb-3'>
                                    <label htmlFor='bookTitle' className='form-label'>Title</label>
                                    <Field type='text' className='form-control' id='bookTitle' name="title"/>
                                    <ErrorMessage name="title" component="span" style={{color: "red"}}></ErrorMessage>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='bookQuantity' className='form-label'>Quantity</label>
                                    <Field type='number' className='form-control' id='bookQuantity' name="quantity"/>
                                    <ErrorMessage name="quantity" component="span" style={{color: "red"}}></ErrorMessage>
                                </div>

                                {
                                    isSubmitting ? <></> :
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                }
                            </Form>
                        )}

                </Formik>
            </div>
        </>
    )
}

export default BookCreate;

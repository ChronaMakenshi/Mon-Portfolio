import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";


const schema = yup.object({
    name: yup.string().min(5).max(30).required(),
    email: yup.string().email().required(),
    message: yup.string().min(20).required(),
});



function Formulaire() {

    const SendEmail = (serviceId : any, templateId : any, variables : any) => {
        emailjs
            .send(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, variables, import.meta.env.VITE_APP_USER_ID)
            .then((res) => {
                console.log('succes');
                alert("Votre message est envoyer");
            })
            .catch((error) => console.error('il y a une erreur'));
    }

    return (

        <Formik
        
            validationSchema={schema}
            onSubmit={(values : any, { resetForm }) => {
                SendEmail(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                })
                setTimeout(() => {
                    resetForm(values);
                }, 500);
            }}
            initialValues={{
                name: '',
                email: '',
                message: '',
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
                isSubmitting,
            }) =>
                <Form noValidate onSubmit={handleSubmit} className='mx-xl-8 my-5'>
                    <Form.Control.Feedback type="valid">
                                Votre message est envoyé
                    </Form.Control.Feedback>
                    <Form.Group className="mb-4" >
                        <Form.Control
                            className="bg-dark text-white"
                            name="name"
                            type="text"
                            placeholder="Votre nom et prénom"
                            onBlur={handleBlur}
                            value={values.name}
                            onChange={handleChange}
                            isInvalid={touched.name && errors.name ? true: undefined}          
                        />
                        <Form.Control.Feedback type="invalid">
                            Votre nom et prénom<br></br> entre 5 et 30 caractères,
                            s'il vous plaît.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Control
                            className="bg-dark text-white"
                            type="email"
                            name="email"
                            placeholder="Votre adresse e-mail"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            isInvalid={touched.email && errors.email ? true: undefined}
                        />
                        <Form.Control.Feedback type="invalid">
                            Votre Email, s'il vous plaît.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Control
                            className="bg-dark text-white"
                            type="text"
                            name="message"
                            as="textarea"
                            rows={3}
                            placeholder="Votre message"
                            value={values.message}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            isInvalid={touched.message && errors.message ? true: undefined}
                        />
                        <Form.Control.Feedback type="invalid">
                            Votre Message <br></br> 20 caractères minimum, s'il vous plaît.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button className='text-white border w-xl-50 mt-3' variant="primary" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Message entrain de s'envoyer" : "Envoyé"}
                    </Button>
                </Form>
            }
        </Formik>
    );
}

export default Formulaire;
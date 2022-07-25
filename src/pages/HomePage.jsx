import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAnswers } from "../context/AnswersProvider";

function HomePage() {
  const navigate = useNavigate();
  const { addName } = useAnswers();

  const handleSubmit = (values, { setSubmitting }) => {
    addName(values.name);
    navigate("/form");
  };

  return (
    <main className="container py-4">
      <h1 className="display-5 ">Hola, Bienvenido a mi proyecto.</h1>
      <h2 className="display-5">
        Te pondré a prueba con preguntas del estado de emergencia
      </h2>

      <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="container-fluid">
            <label className="form-label">Ingresa tu nombre:</label>
            <Field
              type="text"
              name="name"
              className="form-control mt-2 mb-4"
              required
              placeholder="nombre"
            />

            <button className="btn btn-primary btn-lg text-center" disabled={isSubmitting}>
              Presioname para empezar
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
}

export default HomePage;

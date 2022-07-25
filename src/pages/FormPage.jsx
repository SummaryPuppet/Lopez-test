import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import FormOptions from "../components/FormOptions";
import { useAnswers } from "../context/AnswersProvider";

function FormPage() {
  const { allAnswers, addAnswers } = useAnswers();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    const { firstGroup, secondGroup, thirdGroup, fourthGroup, fifthGroup } =
      values;

    addAnswers({
      firstGroup,
      secondGroup,
      thirdGroup,
      fourthGroup,
      fifthGroup,
    });

    setSubmitting(false);

    navigate("/result");
  };

  return (
    <Formik initialValues={{ firstGroup: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="container py-2">
          <FormOptions
            question="1) ¿En qué horario se rige el toque de queda?"
            answers={allAnswers.firstGroup}
            groupName="firstGroup"
          />

          <FormOptions
            question="2) ¿Donde se reporto el primer caso? "
            answers={allAnswers.secondGroup}
            groupName="secondGroup"
          />

          <FormOptions
            question="3) ¿Por qué todos debemos usar mascarilla?"
            answers={allAnswers.thirdGroup}
            groupName="thirdGroup"
          />

          <FormOptions
            question="4) ¿Cuál es el número telefónico para registrar un caso sospechoso?"
            answers={allAnswers.fourthGroup}
            groupName="fourthGroup"
          />

          <FormOptions
            question="5) ¿En qué año inicio la pandemia?"
            answers={allAnswers.fifthGroup}
            groupName="fifthGroup"
          />

          <br />

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-success btn-lg"
          >
            Ver resultados
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormPage;

import { Field } from "formik";

function FormOptions({ groupName, question, answers }) {
  const style = {
    label: "form-check-label",
    input: "form-check-input",
  };

  return (
    <section className="py-2">
      <h2>{question}</h2>
      <label className={style.label}>
        <Field
          required
          type="radio"
          name={groupName}
          value="a"
          className={style.input}
        />
        {answers[1]}
      </label>
      <br />
      <label className={style.label}>
        <Field type="radio" name={groupName} value="b" className={style.input} />
        {answers[2]}
      </label>
      <br />
      <label className={style.label}>
        <Field type="radio" name={groupName} value="c" className={style.input} />
        {answers[3]}
      </label>
      <br />
      <label className={style.label}>
        <Field type="radio" name={groupName} value="d" className={style.input} />
        {answers[4]}
      </label>
    </section>
  );
}

export default FormOptions;

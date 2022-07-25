import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAnswers } from "../context/AnswersProvider";

function ResultPage() {
  const navigate = useNavigate();
  const { name, isCorrect, score, cleanAll } = useAnswers();

  const handleNavigate = () => {
    cleanAll();
    navigate("/");
  };

  useEffect(() => {
    isCorrect();
  }, []);

  return (
    <main className="container py-4">
      <h1 className="display-5 fw-bold">
        Gracias por participar {name || ""} en mi proyecto de programación:)
        Lograste alcanzar {score} puntos{" "}
      </h1>
      <button onClick={handleNavigate} className="btn btn-primary btn-lg">
        Volver a participar
      </button>
    </main>
  );
}

export default ResultPage;

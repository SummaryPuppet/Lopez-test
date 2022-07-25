import { useContext, useState } from "react";
import { AnswersContext } from "./AnswersContext";

export const useAnswers = () => {
  const context = useContext(AnswersContext);

  if (!context) {
    throw new Error("useAnswers must be used within a AnswersContextProvider");
  }

  return context;
};

const allAnswers = {
  firstGroup: {
    1: "a) 7:00 p.m. a 7:00 a.m.",
    2: "b) 8:00 p.m. a 4:00 a.m.",
    3: "c) 6:00 p.m. a 5:00 a.m.",
    4: "d) 4:00 p.m. a 7:00 a.m.",
  },
  secondGroup: {
    1: "a) España",
    2: "b) Estados Unidos",
    3: "c) China",
    4: "d) Rusia",
  },
  thirdGroup: {
    1: "a) Reducir la tasa de contagio",
    2: "b) Para vernos bien",
    3: "c) Para no oler feos olores",
    4: "d) Todas las anteriores",
  },
  fourthGroup: {
    1: "a) 118",
    2: "b) 911",
    3: "c) 115",
    4: "d) 113",
  },
  fifthGroup: {
    1: "a) 2019",
    2: "b) 2020",
    3: "c) 2018",
    4: "d) 2017",
  },
};

const correctAnswers = {
  1: "b",
  2: "c",
  3: "a",
  4: "d",
  5: "b",
};

export const AnswersContextProvider = ({ children }) => {
  const [answers, setAnswers] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });
  const [name, setName] = useState("");
  const [score, setScore] = useState(20);

  const addAnswers = (ans) => {
    if (!ans) return;
    const { firstGroup, secondGroup, thirdGroup, fourthGroup, fifthGroup } =
      ans;

    setAnswers({
      1: firstGroup,
      2: secondGroup,
      3: thirdGroup,
      4: fourthGroup,
      5: fifthGroup,
    });
  };

  const addName = (name) => setName(name);

  const minusScore = () => setScore(score - 4);

  const isCorrect = () => {
    // console.table(answers)
    // console.table(correctAnswers)
    if (answers[1] !== correctAnswers[1]) minusScore();
    if (answers[2] !== correctAnswers[2]) minusScore();
    if (answers[3] !== correctAnswers[3]) minusScore();
    if (answers[4] !== correctAnswers[4]) minusScore();
    if (answers[5] !== correctAnswers[5]) minusScore();
  };

  const cleanAll = () => {
    setName("");
    setAnswers({ 1: "", 2: "", 3: "", 4: "", 5: "" });
    setScore(20);
  };

  return (
    <AnswersContext.Provider
      value={{
        allAnswers,
        correctAnswers,
        addAnswers,
        name,
        addName,
        isCorrect,
        score,
        cleanAll,
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
};

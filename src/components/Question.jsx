import Timer from "./Timer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";

export default function Question({
  activeQuestionIndex,
  handleSkipAnswer,
  userAnswers,
  answerState,
  handleSelectAnswer,
}) {
  return (
    <div id="question">
      <Timer timeout={10000} onTimeout={handleSkipAnswer} />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}

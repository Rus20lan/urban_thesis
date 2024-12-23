import { useState } from "react";
import Btn from "../btn/Btn";
import "./style.css";
import QuizQuestion from "../quizQuestion/QuizQuestion";
import { useAppSelector } from "../../redux/store/hooks";
import QuizForm from "../quizForm/QuizForm";

export type TSurvey = {
  firstAnswer: string[];
  secondAnswer: string[];
};

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const { firstAnswer, secondAnswer } = useAppSelector((state) => state.quiz);

  const handleClick = () => {
    console.log(firstAnswer.length, secondAnswer.length);
    if (
      (questionNumber === 1 && firstAnswer.length > 0) ||
      (questionNumber === 2 && secondAnswer.length > 0) ||
      questionNumber === 3
    ) {
      if (questionNumber <= 4)
        setQuestionNumber((questionNumber) => questionNumber + 1);
    } else {
      console.log(
        "Чтобы перейти к следующему шагу нужно выбрать хотя бы один вариант"
      );
    }
  };

  return (
    <div className="quiz_area">
      <div id="quiz" className="quiz_container">
        <div className="quiz_card">
          {questionNumber < 4 ? (
            <>
              <h2 className="quiz_title">Мы подберем идеальную пару для вас</h2>
              <p className="quiz_title_note">
                Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
                для вас моделями
              </p>
            </>
          ) : (
            <>
              <h2 className="quiz_title">Ваша подборка готова!</h2>
              <p className="quiz_title_note_small">
                Оставьте свои контактные данные, чтобы бы мы могли отправить
                подготовленный для вас каталог
              </p>
            </>
          )}

          <div className="quiz_sep"></div>
          <div className="quiz_question_container">
            {questionNumber < 4 ? (
              <>
                <QuizQuestion questionNumber={questionNumber} />
              </>
            ) : (
              <div className="quiz_form_wrapper">
                <h2 className="quiz_form_title">Получить предложение</h2>
                <p>Получите подборку подходящих для вас моделей на почту</p>
                <QuizForm />
              </div>
            )}
          </div>
          {questionNumber < 4 && (
            <>
              <div className="quiz_sep"></div>
              <div className="quiz_btn_group">
                <div className="quiz_question_counter">
                  <span>{questionNumber}</span>
                  <span> из </span>
                  <span>3</span>
                </div>
                <Btn
                  handleClick={handleClick}
                  text="Следующий шаг"
                  style={{
                    border: "1px solid var(--text)",
                    borderRadius: "4px",
                    padding: "16px 41px",
                    width: "211px",
                    height: "50px",
                    background: "rgba(196, 196, 196, 0)",
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

import './style.css';
import { questionOne, questionTwo } from '../../const/consts';
import { FC } from 'react';
import sneaker from '../../images/sneaker.webp';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import {
  addAnswerInFirstPool,
  addAnswerInSecondPool,
  removeAnswerInFirstPool,
  removeAnswerInSecondPool,
} from '../../redux/quiz/quizSlice';

type Props = {
  questionNumber: number;
};

const QuizQuestion: FC<Props> = ({ questionNumber }) => {
  let children: null | JSX.Element = null;
  const dispatch = useAppDispatch();
  const { firstAnswer, secondAnswer } = useAppSelector((state) => state.quiz);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (questionNumber === 1) {
      if (target.checked) {
        dispatch(addAnswerInFirstPool(target.value));
      } else {
        const index = firstAnswer.indexOf(target.value);
        dispatch(removeAnswerInFirstPool(index));
      }
    }

    if (questionNumber === 2) {
      if (target.checked) {
        dispatch(addAnswerInSecondPool(target.value));
      } else {
        const index = secondAnswer.indexOf(target.value);
        dispatch(removeAnswerInSecondPool(index));
      }
    }
  };

  switch (questionNumber) {
    case 1:
      children = (
        <>
          <h3>{questionOne.question}</h3>
          <div className="quiz_question_var_1">
            {questionOne.variants?.map((sneak, index) => (
              <div key={index}>
                <div className="quiz_var_1_img_wrapper">
                  <img src={sneak.img}></img>
                </div>
                <div className="quiz_checkbox_wrapper">
                  <input
                    className="custom_checkbox"
                    type="checkbox"
                    name={`sneak_${sneak.id}`}
                    id={`sneak_${sneak.id}`}
                    value={sneak.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label htmlFor={`sneak_${sneak.id}`}>{sneak.name}</label>
                </div>
              </div>
            ))}
          </div>
        </>
      );
      break;
    case 2:
      children = (
        <>
          <h3>{questionTwo.question}</h3>
          <div className="quiz_question_var_2">
            <div className="quiz_question_size_wrapper">
              {questionTwo.variants.map((size, index) => (
                <div key={index}>
                  <input
                    className="custom_checkbox"
                    type="checkbox"
                    name={`size_${index}`}
                    id={`size_${index}`}
                    value={size}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label htmlFor={`size_${index}`}>{size}</label>
                </div>
              ))}
            </div>
            <div className="quiz_var_2_img_wrapper">
              <img src={sneaker}></img>
            </div>
          </div>
        </>
      );
      break;
    case 3:
      children = (
        <div>
          <h3>Уточните какие-либо моменты</h3>
          <textarea
            placeholder="Введите сообщение"
            className="font_family"
          ></textarea>
        </div>
      );
      break;
    case 4:
      break;
  }

  return (
    <div
      className="quiz_question_container"
      style={
        questionNumber === 1
          ? { marginBottom: '40px' }
          : { marginBottom: '20px' }
      }
    >
      {children}
    </div>
  );
};

export default QuizQuestion;

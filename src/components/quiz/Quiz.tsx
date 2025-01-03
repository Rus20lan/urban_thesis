import { useState } from 'react';
import Btn from '../btn/Btn';
import './style.css';
import QuizQuestion from '../quizQuestion/QuizQuestion';
import { useAppSelector } from '../../redux/store/hooks';
import FeedbackForm from '../feedbackForm/FeedbackForm';
import Modal from '../modal';
import InfoModal from '../infoModal/InfoModal';
import ContentTitle from '../contentTitle/ContentTitle';

export type TSurvey = {
  firstAnswer: string[];
  secondAnswer: string[];
};

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isModalActive, setModalActive] = useState(false);
  const { firstAnswer, secondAnswer } = useAppSelector((state) => state.quiz);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  const handleClick = () => {
    if (
      (questionNumber === 1 && firstAnswer.length > 0) ||
      (questionNumber === 2 && secondAnswer.length > 0) ||
      questionNumber === 3
    ) {
      if (questionNumber <= 4)
        setQuestionNumber((questionNumber) => questionNumber + 1);
    } else {
      handleModalOpen();
    }
  };

  return (
    <div className="quiz_area">
      <div id="quiz" className="quiz_container">
        <div className="quiz_card">
          {questionNumber < 4 ? (
            <>
              <ContentTitle
                text={'Мы подберем идеальную пару для вас'}
                color={{ color: 'var(--text)' }}
              />
              <p className="quiz_title_note font_family">
                Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
                для вас моделями
              </p>
            </>
          ) : (
            <>
              <ContentTitle
                text={'Ваша подборка готова!'}
                color={{ color: 'var(--text)' }}
              />
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
                <FeedbackForm
                  style={{ width: '80%', marginTop: '24px' }}
                  btnProps={{
                    text: 'Получить',
                    style: {
                      marginTop: '10px',
                      background: 'var(--accent)',
                      color: '#fff',
                      fontFamily: 'var(--second-family)',
                      height: '60px',
                    },
                  }}
                  isEmailField={true}
                />
              </div>
            )}
          </div>
          {questionNumber < 4 && (
            <>
              <div className="quiz_sep"></div>
              <div className="quiz_btn_group">
                <div className="quiz_question_counter">
                  <span className="font_family">{questionNumber}</span>
                  <span> из </span>
                  <span>3</span>
                </div>
                <Btn
                  handleClick={handleClick}
                  text="Следующий шаг"
                  style={{
                    border: '1px solid var(--text)',
                    borderRadius: '4px',
                    padding: '12px 41px',
                    width: '211px',
                    height: '50px',
                    background: 'rgba(196, 196, 196, 0)',
                    color: 'var(--text)',
                    fontFamily: 'var(--second-family)',
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
      {isModalActive && (
        <Modal onClose={handleModalClose} isInfoModal={true}>
          <InfoModal
            message={
              'Чтобы перейти к следующему шагу нужно выбрать хотя бы один вариант'
            }
          />
        </Modal>
      )}
    </div>
  );
};

export default Quiz;

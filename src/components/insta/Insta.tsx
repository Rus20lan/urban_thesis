import FeedbackForm from '../feedbackForm/FeedbackForm';
import './style.css';
import instagram from '../../images/instagram.png';
import collage from '../../images/collage.png';

const Insta = () => {
  return (
    <div className="insta_area">
      <div className="insta_container">
        <div className="insta_feedback_form_wrapper">
          <div className="insta_feedback_form_intro">
            <h2 className="insta_title">Есть вопросы?</h2>
            <p className="font_family">
              Заполните форму и наш менеджер свяжется с вами
            </p>
          </div>
          <FeedbackForm
            style={{ marginTop: '40px' }}
            btnProps={{
              text: 'Отправить',
              style: {
                background: 'var(--accent)',
                padding: '22px 47px',
                borderRadius: '4px',
                fontFamily: 'var(--second-family)',
                fontSize: '1rem',
                color: '#fff',
              },
            }}
            isPhoneField={true}
          />
        </div>
        <div className="insta_logo_and_foto_wrapper">
          <div className="insta_logo">
            <img src={instagram} alt="insta_logo"></img>
          </div>
          <div className="insta_foto_wrapper">
            <img src={collage}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insta;

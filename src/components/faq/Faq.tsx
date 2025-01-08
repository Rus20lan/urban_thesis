import { Accordion } from '../accordion/Accordion';
import ContentTitle from '../contentTitle/ContentTitle';
import './style.scss';

const Faq = () => {
  return (
    <div className="faq_area">
      <div className="faq_container">
        <ContentTitle
          text={'Часто задаваемые вопросы'}
          color={{ color: 'var(--text)' }}
        />
        <div className="accordion_wrapper">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;

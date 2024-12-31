import { Accordion } from '../accordion/Accordion';
import './style.css';

const Faq = () => {
  return (
    <div className="faq_area">
      <div className="faq_container">
        <h2 className="content_title">Часто задаваемые вопросы</h2>
        <div className="accordion_wrapper">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;

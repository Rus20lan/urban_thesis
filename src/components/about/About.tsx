import "./style.css";
import group from "../../images/group44.png";
import line6 from "../../images/line6.svg";
import pex from "../../images/pex.png";
const About = () => {
  return (
    <div className="about_area">
      <div className="img_round_wrapper">
        <img src={group}></img>
      </div>
      <div className="about_text_wrapper">
        <h2 id="about">Пара слов о нас</h2>
        <p>
          Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт
          мы можем менять жизни. В том числе с помощью воодушевляющих историй
          спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
        </p>
        <div className="cite_wrapper">
          <img src={line6} />
          <span className="cite">SneakMax</span>
        </div>
      </div>
      <div className="img2_wrapper">
        <img src={pex} />
      </div>
    </div>
  );
};

export default About;

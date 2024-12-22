import Btn from "../btn/Btn";
import "./style.css";

const QuizForm = () => {
  return (
    <form className="quiz_form">
      <input type="text" placeholder="Ваше имя" required></input>
      <input type="email" placeholder="E-mail" required></input>
      <Btn
        text="Получить"
        style={{
          marginTop: "10px",
          background: "var(--accent)",
          color: "#fff",
          fontFamily: "var(--second-family)",
          height: "60px",
        }}
      />
    </form>
  );
};

export default QuizForm;

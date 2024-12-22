import Btn from "../btn/Btn";
import FilterForm from "../filterForm/FilterForm";
import SneakersCards from "../sneakersCards/SneakersCards";
import "./style.css";

const Catalog = () => {
  return (
    <div className="catalog_area">
      <div className="catalog_container">
        <div className="col_first">
          <h2 id="catalog" className="catalog_title">
            Каталог
          </h2>
          <FilterForm />
        </div>
        <div className="col_second">
          <SneakersCards />
          <Btn
            text="Показать еще"
            style={{
              display: "flex",
              margin: "40px auto 60px auto",
              width: "200px",
              height: "60px",
              background: "var(--accent)",
              padding: "22px 46px",
              color: "#fff",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;

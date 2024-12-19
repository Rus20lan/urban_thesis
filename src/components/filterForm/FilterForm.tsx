import Nouislider from 'nouislider-react';
// import 'nouislider/distribute/nouislider.css';
import './style.css';
import { useState } from 'react';
import Btn from '../btn/Btn';

const FilterForm = () => {
  const [priceRange, setPriceRange] = useState({ low: '1850', high: '25768' });
  const range = { min: 1850, max: 25768 };
  const start = [1850, 25768];
  const step = 1;
  const onChangeSlide = (data: string[]) => {
    setPriceRange({
      low: data[0].split('.')[0],
      high: data[1].split('.')[0],
    });
  };
  return (
    <div className="form_wrapper">
      <form>
        <h3 className="title_filter_form">Подбор по параметрам</h3>

        <div className="price_filter_wrapper">
          <span>Цена, руб</span>
          <div>
            <div className="nouislider_data">
              <span className="span_nouislider">{priceRange.low}</span>
              <div className="separator"></div>
              <span className="span_nouislider">{priceRange.high}</span>
            </div>
            <Nouislider
              start={start}
              step={step}
              range={range}
              onSlide={onChangeSlide}
            />
          </div>
        </div>

        <div className="gender_filter_wrapper">
          <span>Пол</span>
          <div className="gender_filter_input_group">
            <input
              className="custom_checkbox"
              type="checkbox"
              name="male"
              id="male"
            />
            <label htmlFor="male">мужской</label>
            <input
              className="custom_checkbox"
              type="checkbox"
              name="female"
              id="female"
            />
            <label htmlFor="female">женский</label>
          </div>
        </div>
        <div className="size_filter_wrapper">
          <span>Размер</span>
          <div className="size_filter_chart">
            <div>
              <input type="checkbox" id="size-35" value="35" name="size-35" />
              <label htmlFor="size-35">35</label>
            </div>
            <div>
              <input type="checkbox" id="size-36" value="36" name="size-36" />
              <label htmlFor="size-36">36</label>
            </div>
            <div>
              <input type="checkbox" id="size-37" value="37" name="size-37" />
              <label htmlFor="size-37">37</label>
            </div>
            <div>
              <input type="checkbox" id="size-38" value="38" name="size-38" />
              <label htmlFor="size-38">38</label>
            </div>
            <div>
              <input type="checkbox" id="size-39" value="39" name="size-39" />
              <label htmlFor="size-39">39</label>
            </div>
            <div>
              <input type="checkbox" id="size-40" value="40" name="size-40" />
              <label htmlFor="size-40">40</label>
            </div>

            <div>
              <input type="checkbox" id="size-41" value="41" name="size-41" />
              <label htmlFor="size-41">41</label>
            </div>
            <div>
              <input type="checkbox" id="size-42" value="42" name="size-42" />
              <label htmlFor="size-42">42</label>
            </div>
            <div>
              <input type="checkbox" id="size-43" value="43" name="size-43" />
              <label htmlFor="size-43">43</label>
            </div>
          </div>
        </div>
        <div className="btns_filter_wrapper">
          <Btn
            text="Применить"
            style={{
              padding: '22px 48px',
              width: '100%',
              height: '60px',
              background: 'var(--text)',
              color: '#fff',
            }}
          />
          <Btn
            text="сбросить"
            style={{
              background: 'none',
              margin: '20px auto',
              display: 'flex',
              color: 'var(--text)',
              padding: '0',
              boxSizing: 'border-box',
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default FilterForm;

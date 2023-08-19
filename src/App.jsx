import React, { Fragment, useState } from "react";
import Values from "values.js";
import SingleColor from "./components/SingleColor";

function App() {
  const [colors, setColors] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const colorChangeHandler = (event) => {
    setColors(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    try {
      let color = new Values(colors).all(10);
      setList(color);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setError(false);
  };

  return (
    <Fragment>
      <section className="container">
        <h2>color generator</h2>
        <form onSubmit={formSubmitHandler}>
          <input
            type="text"
            name="colors"
            id="colors"
            value={colors}
            onChange={colorChangeHandler}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              rgb={color.rgb}
              weight={color.weight}
              index={index}
              hex={color.hex}
            />
          );
        })}
      </section>
    </Fragment>
  );
}

export default App;

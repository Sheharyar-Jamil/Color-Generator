import React, { useEffect, useState } from "react";

const SingleColor = (props) => {
  
  const [alert, setAlert] = useState(false);  
  const bcg = props.rgb.join(",");
  const hexColor = `#${props.hex}`;

  const copiedToClipboardHandler = () =>{
    setAlert(true);
    navigator.clipboard.writeText(hexColor);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
        setAlert(false);
    }, 3000)
    return () => {
        clearTimeout(timeout);
    }
  }, [alert])
  return (
    <article
      className={`color ${props.index > 10 ? (
        'color-light'
      ): ('')}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={copiedToClipboardHandler}
    >
      <p className="percent-value">{props.weight}%</p>
      <p className="color-value">{hexColor}</p>
      {alert ? (
        <p className="alert">copied to clipboard</p>
      ): (' ')}
    </article>
  );
};

export default SingleColor;

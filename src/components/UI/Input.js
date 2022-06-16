import React from "react";

const Input = React.forwardRef((props, ref) => {
  return <input type="number" ref={ref} {...props.input} />;
});

export default Input;

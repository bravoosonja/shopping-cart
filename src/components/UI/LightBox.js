import React, { useState } from "react";

const LightBox = ({ children, src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper onClick={toggleIsOpen}>
      {children}
      {!isOpen ? (
        <Gallery onClick={toggleIsOpen}>
          <img src={src} alt={alt} />
        </Gallery>
      ) : null}
    </Wrapper>
  );
};

export default LightBox;

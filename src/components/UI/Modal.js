import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalOverlay = (props) => {
  return <StyledModalOverlay>{props.children}</StyledModalOverlay>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 12vh;
  right: 100px;
  width: max-content;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Modal;

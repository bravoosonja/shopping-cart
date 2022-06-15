import ReactDOM from "react-dom";
// Styles
import { StyledModalOverlay, Content } from "./Modal.styles";

const ModalOverlay = (props) => {
  return (
    <StyledModalOverlay>
      <Content>{props.children}</Content>
    </StyledModalOverlay>
  );
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

export default Modal;

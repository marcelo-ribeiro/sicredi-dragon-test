import React from "react";
import { StyledModal } from "./style";

interface IProps {
  title: string;
  children: React.ReactNode;
}

const Modal = ({ title, children }: IProps) => {
  return (
    <StyledModal>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        {children}
      </div>
    </StyledModal>
  );
};

export default Modal;

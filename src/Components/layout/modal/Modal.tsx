import { ModalSection, ModalContainer, IconClose } from "./style";

interface IModalProps {
  children: React.ReactNode;
  name?: string;
  description?: string;
}

const Modal = ({ children, name, description }: IModalProps) => {
  return (
    <ModalSection>
      <ModalContainer>
        <IconClose>{children}</IconClose>
        <div className="Modalcontent">
          <h1>{name}</h1>
          <br />
          <p>{description ? description : "Não possui descrição"}</p>
        </div>
      </ModalContainer>
    </ModalSection>
  );
};

export default Modal;

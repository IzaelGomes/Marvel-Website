import { MoonLoader } from "react-spinners";
import { ModalSection, ModalContainer, IconClose } from "./style";
import { AiOutlineClose } from "react-icons/ai";

interface IModalProps {
  children: React.ReactNode,
  name?: string,
  description?: string
}

const Modal: React.FC<IModalProps> = ({
  children,
  name,
  description
}):JSX.Element => {

  return (
    <ModalSection>
      <ModalContainer>
        <IconClose>
          {children}
        </IconClose>
        <span>{name}</span>
        <br />
        <span>{description}</span>
      </ModalContainer>
    </ModalSection>
  );
};

export default Modal;
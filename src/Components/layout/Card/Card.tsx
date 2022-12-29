import React, { useEffect, useState } from "react";
import { ContainerCard } from "./style";
import { AiFillHeart, AiOutlineHeart, AiFillInfoCircle } from "react-icons/ai";
import Modal from "react-modal";
import Swal from "sweetalert2";

interface CardProps {
  name: string;
  description: string;
  thumbnail: string;
  path: string;
  extension: string;
  id: number;
}

const customStyles = {
  content: {
    width: "70vw",
    height: "70vh",
    top: "50%",
    left: "50%",
    right: "auto",
    display: "flex",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Card = ({
  description,
  thumbnail,
  name,
  extension,
  id,
  characterObject,
}: CardProps) => {
  const [ishas, setIsHas] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function save(saveCharacter: CardProps) {
    const charactersSaved: any = localStorage.getItem("marvel");
    const elements = JSON.parse(charactersSaved) || [];

    if (elements.some((chara: any) => chara.id == id)) {
      return  Swal.fire({
        title: "Personagem já salvo !",
        icon: "info",
        showConfirmButton: false,
        timer: 1500,
        iconColor: "#842524",
      });
    }

    elements.push(saveCharacter);
    localStorage.setItem("marvel", JSON.stringify(elements));

    Swal.fire({
      title: "Salvo com sucesso",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      iconColor: "#842524",
    });
  }

  function isSaved() {
    const charactersSaved: any = localStorage.getItem("marvel");
    const elements = JSON.parse(charactersSaved) || [];
    setIsHas(elements.some((chara: any) => chara.id == id));
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    console.log(description);
  }

  useEffect(() => {
    isSaved();
  }, []);

  return (
    <ContainerCard>
      <h2>{name}</h2>
      <div className="img-container">
        <img src={`${thumbnail}.${extension}`} alt={name} />
        <div className="layer">
          <div className="layer-content">
            {ishas ? (
              <AiFillHeart
                onClick={() => save(characterObject)}
                style={{ height: 100, width: 60, cursor: "pointer" }}
              />
            ) : (
              <AiOutlineHeart
                onClick={() => save(characterObject)}
                style={{ height: 100, width: 60, cursor: "pointer" }}
              />
            )}
            <AiFillInfoCircle
              onClick={openModal}
              style={{ height: 100, width: 60, cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="modal">
          <div className="modal-content">
            <div className="modal-img">
              <img src={`${thumbnail}.${extension}`} alt={name} />
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Modal>
    </ContainerCard>
  );
};

export default Card;

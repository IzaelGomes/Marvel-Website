import React, { useEffect, useState, useContext } from "react";
import { Container, ContainerCard } from "./style";
import { AiFillHeart, AiOutlineHeart, AiFillInfoCircle, AiOutlineClose } from 'react-icons/ai';
import * as Dialog from "@radix-ui/react-dialog";
import Swal from "sweetalert2";
import Modal from "../modal/Modal";

interface CardProps {
  name: string;
  description: string;
  thumbnail: string;
  path?: string;
  extension: string;
  id: number;
  characterObject: any
}


const Card = ({
  description,
  thumbnail,
  name,
  extension,
  id,
  characterObject
}: CardProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fav = {
    saved : "saved",
    notsaved:"notsaved"
  }

  function save(saveCharacter: CardProps) {
    const charactersSaved: any = localStorage.getItem("marvel");
    const elements = JSON.parse(charactersSaved) || [];

    if (elements.some((chara: any) => chara.id == id)) {
      return Swal.fire({
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

    checkIfIsSaved()
  }

  function checkIfIsSaved() {
    const charactersSaved: any = localStorage.getItem("marvel");
    const elements = JSON.parse(charactersSaved) || [];
    setIsFavorite(elements.some((chara: any) => chara.id == id));
  }

  useEffect(() => {
    checkIfIsSaved()
  },[])

  return (
    <>
      <Container>
        <ContainerCard>
          <h2>{name}</h2>
          <div className="img-container">
            <img src={`${thumbnail}.${extension}`} alt={name} />
            <div className="layer">
              <div className="layer-content">
                {isFavorite ? (
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
                  style={{ height: 100, width: 60, cursor: "pointer" }}
                  onClick={() => {
                    setIsModalOpen(true)
                  }}
                />
              </div>
            </div>
          </div>
        </ContainerCard>
        {isModalOpen && (
          <Modal name={name} description={description}>
            <AiOutlineClose onClick={() => setIsModalOpen(false)} />
          </Modal>
        )}
      </Container>
    </>
  );
};

export default Card;
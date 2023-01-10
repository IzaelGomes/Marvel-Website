import React, { useEffect, useState, useContext } from "react";
import { ContainerCard } from "./style";
import { AiFillHeart, AiOutlineHeart, AiFillInfoCircle } from "react-icons/ai";
import * as Dialog from "@radix-ui/react-dialog";
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


const Card = ({
  description,
  thumbnail,
  name,
  extension,
  id,
  characterObject,
}: CardProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);


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

  useEffect(() =>{
    checkIfIsSaved()
  },[])



 
  return (
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
            />
          </div>
        </div>
      </div>
    </ContainerCard>
  );
};

export default Card;

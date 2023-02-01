import React, { useEffect, useState, useContext } from "react";
import { Container, ContainerCard } from "./styleComic";
import {
  AiFillInfoCircle,
  AiOutlineClose,
} from "react-icons/ai";
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
  characterObject: any;
}

const ComicCard = ({
  description,
  thumbnail,
  name,
  extension,
}: CardProps) => {
  
 
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  return (
    <>
      <Container>
        <ContainerCard>
          <h2>{name}</h2>
          <div className="img-container">
            <img src={`${thumbnail}.${extension}`} alt={name} />
            <div className="layer">
              <div className="layer-content">
                <AiFillInfoCircle
                  style={{ height: 100, width: 60, cursor: "pointer" }}
                  onClick={() => {
                    setIsModalOpen(true);
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

export default ComicCard;

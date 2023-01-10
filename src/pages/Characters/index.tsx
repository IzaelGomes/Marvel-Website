import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

import { time, apiKey, md5 } from "../../services/Api";

import { Container } from "./style";

import SideMenu from "../../Components/layout/Menu/SideMenu";
import Card from "../../Components/layout/Card/Card";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

interface CharactersTypes {
  name: string;
  key: number;
  id: number;
  thumbnail: thumbnail;
  index: number;
  description: string;
}

interface thumbnail {
  path: string;
  extension: string;
}

const Characters = () => {
  const [characters, setCharacters] = useState<[]>([]);
 

  const ref = useRef<HTMLDivElement>(null);

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${apiKey}&hash=${md5}`
      );
      setCharacters(response.data.data.results);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <SideMenu />
      <Container>
        <h1>
          <span>MARVEL</span> CHARACTERS
        </h1>
        <div className="Cards-wrapper">
          {characters.map((character: CharactersTypes, index) => {
            return (
              <Card
                key={character.index}
                id={character.id}
                name={character.name}
                thumbnail={character.thumbnail.path}
                extension={character.thumbnail.extension}
                characterObject={character}
                description={character.description}
              />
            );
          })}
        </div>

        <div className="arrow" ref={ref} onClick={() => scrollTo(0, 0)}>
          <BsFillArrowUpCircleFill
            style={{ height: 40, width: 40, cursor: "pointer" }}
          />
        </div>
      </Container>
    </>
  );
};

export default Characters;

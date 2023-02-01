import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { time, apiKey, md5 } from '../../services/Api';
import { CharactersTypes } from '../Characters';
import ComicCard from '../../Components/layout/Card/ComicCard'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import { Container } from '../../pages/Comics/style';
import SideMenu from '../../Components/layout/Menu/SideMenu';

const index = () => {

    const [characters, setCharacters] = useState<[]>([]);

    const getCharacters = async () => {
      try {
        const response = await axios.get(
          `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${apiKey}&hash=${md5}`
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
          <span>MARVEL</span> COMICS
        </h1>
        <div className="Cards-wrapper">
          {characters.map((character: CharactersTypes, index) => {
            return (
              <ComicCard
                key={index}
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

        <div className="arrow" onClick={() => scrollTo(0, 0)}>
          <BsFillArrowUpCircleFill
            style={{ height: 40, width: 40, cursor: "pointer" }}
          />
        </div>
    </Container>
    </>
  )
}

export default index
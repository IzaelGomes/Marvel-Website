import React, { useContext, useEffect, useState } from "react";
import { useAuth, AuthContext } from "../../Contexts/AuthContext";

import SideMenu from "../../Components/layout/Menu/SideMenu";

import { HomeContainer } from "./style";

interface CardProps {
  name: string;
  description: string;
  thumbnail: string;
  key: number;
}

const Home = () => {
  return (
    <HomeContainer>
      <SideMenu />

      <div id="main-gif">
        <div id="main-text">
          <h1>
            Dizem que a melhor arma{" "}
            <span>é aquela que nunca temos que disparar.</span>
          </h1>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;

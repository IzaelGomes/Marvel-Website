import React, { ReactNode, useContext, useState } from "react";
import { Aside, MenuOptions } from "./style";
import { FiAlignJustify } from "react-icons/fi";
import logo_user from "../../../assets/user-logo.png";
import AuthContext, { useAuth } from "../../../Contexts/AuthContext";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

const SideMenu = () => {
  const { user } = useAuth();
  const { email } = user;
  const [menu, setMenu] = useState<boolean>(true);
  const [isLogOut, setIsLogOut] = useState<boolean>(false);
  const navigate = useNavigate();

  function logOut() {
    setIsLogOut(true);
    auth.signOut().then(() => {
      navigate("/");
    });
  }

  return (
    <Aside>
      <div>{isLogOut ? <p style={{ fontSize: 200 }}>CARREGANDO</p> : null}</div>

      <div id="header-menu">
        {menu ? (
          <span id="closebutton" onClick={() => setMenu(!menu)}>
            {" "}
            <FiAlignJustify
              style={{
                height: 40,
                width: 40,
                cursor: "pointer",
                marginLeft: 50,
              }}
            />
          </span>
        ) : (
          <span id="closebutton2" onClick={() => setMenu(!menu)}>
            <FiAlignJustify
              style={{
                height: 40,
                width: 40,
                cursor: "pointer",
                color: "#fff",
              }}
            />
          </span>
        )}
        <div id="menu-icon-exit" onClick={logOut}>
          <BsBoxArrowInRight
            style={{
              height: 40,
              width: 40,
              marginRight: 50,
              cursor: "pointer",
              color: "#fff",
            }}
          />
        </div>
      </div>

      {menu ? (
        <div id="container">
          <header>
            <span onClick={() => setMenu(!menu)}>
              <FiAlignJustify
                style={{ height: 40, width: 40, cursor: "pointer" }}
              />
            </span>
          </header>

          <MenuOptions>
            <ul>
              <li>
                <Link to={"/characters"}> Personagens </Link>
              </li>
              <li>
                <Link to={""}>Séries </Link>
              </li>
              <li>
                <Link to={""}>Filmes</Link>
              </li>
              <li>
                <Link to={""}>Produtores</Link>
              </li>
            </ul>
          </MenuOptions>

          <footer>
            <img src={logo_user} alt="user" />
            <span>Vingador(a) : {email}</span>
          </footer>
        </div>
      ) : null}
    </Aside>
  );
};

export default SideMenu;

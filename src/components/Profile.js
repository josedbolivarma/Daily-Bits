import React, { useContext, useEffect, useState } from "react";
import { logout } from "../actions/authAction";
import { AuthContext } from "../context/AuthContext";
import { getUserInfo } from "../helpers/userInfo";
import { CInfoP, Email, Image, LogoutBtn, TP, User } from "../styleComponents/styleProfile";
import Footer from "./Footer";

const Profile = ()=>{
    let initialState = {
        name: "Jonh",
        lastname: "Snow",
        email: "jsnow@gamesofthrones.com",
        imageUrl: "https://res.cloudinary.com/daalu/image/upload/v1649798335/Recursos_Daily/avatar_nraomz.svg",
    };

    const {dispatch} = useContext(AuthContext)
    const [user, setUser] = useState(initialState);
    useEffect(() => {
    let mount = false;
    if (!mount) {
      getUserInfo().then((data) => setUser(...data));
    }
    return () => {
      mount = true;
    };
  }, []);
    const handleClick = () => {
        dispatch(logout());

        localStorage.clear()
    }
  
  return(
      <div>
          <main>
              <TP>Perfil</TP>
              <CInfoP>
                  <Image src={user?.imageUrl} alt={user?.name}/>
                  <User>
                  {user?.name} {user?.lastname}
                  </User>
                  <Email>
                  {user?.email} 
                  </Email>
                  <br/>
                  <LogoutBtn
                  type="button"
                  onClick={handleClick}
                  value="Cerrar sesión"/>
              </CInfoP>
          </main>
          <Footer/>
      </div>
  );
};

export default Profile;
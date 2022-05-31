import React, {useContext, useState} from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../actions/authAction";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { ButtonG, DivF, DivL, DivLogin, Form, Header, Input, InputS, Label, Linka, Logo, Separator } from "../styleComponents/styleLogin";
import Alert from "./Alert";

const Login=()=>{
    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext)
    const [credentials, setCredentials] = useState({
        email:"",
        password:"",
    });

    const [showAlert, setshowAlert] = useState(false);
    const [alert, setAlert] = useState({});
    
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleContinue=()=>{
        setshowAlert(!showAlert);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginP()
            .then((data)=>{
                dispatch(login(data.accessToken,data.user));
                navigate('/');
            })
            .catch((error)=>{
                setAlert({
                    title:"Credenciales equivocadas",
                    type: "failed",
                    buttom: "Continuar",
                });
                setshowAlert(!showAlert);
            });

    };

    const loginP = async () => {
        const url = `https://dayli-bit-ao.herokuapp.com/login`;
        const{data} = await axios.post(url, credentials);
        return data;
    }
    return (
        <DivLogin>
            <Header>
                <Logo src="https://res.cloudinary.com/daalu/image/upload/v1648833035/Recursos_Daily/Color_Purple_Container_Yes_wwpmes.png" alt="logo_Daily"/>
                <h1>Iniciar Sesión</h1>
            </Header>

         <DivF>

            <ButtonG><img src="https://res.cloudinary.com/daalu/image/upload/v1648957809/Recursos_Daily/Vector_uz4q4o.png" alt="Letra G Google"/>Continuar con Google</ButtonG>
            <Separator/>

            <Form action="" onSubmit={handleSubmit}>

            <Label htmlFor="inputEmail">
            Correo electrónico
            <Input
              onChange={handleChange}
              type="email"
              name="email"
              id="inputEmail"
              placeholder="Ingrese su correo electrónico"
            />
          </Label>

          <Label htmlFor="inputPassword">
            Contraseña
            <Input
              onChange={handleChange}
              type="password"
              name="password"
              id="inputPassword"
              placeholder="Ingrese su contraseña"
            />
          </Label>

          <InputS type="submit" value="Iniciar Sesión"/>
            </Form>
        </DivF>
        <DivL>
        <p>
            ¿Aún no tienes una cuenta?
            < Linka to="/register">
                Inscribirse
            </Linka>    
        </p>
        </DivL>
        <Alert
        alerta={alert}
        isVisible={showAlert}
        handleContinue={()=>handleContinue()}/>
        </DivLogin>       
    );
};
export default Login;
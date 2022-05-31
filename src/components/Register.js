import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm";
import { DivF, DivFile, DivL, DivLogin, Form, Header, Input, InputFile, InputS, Label, Linka, Logo, TextFile } from "../styleComponents/styleLogin";
import Alert from "./Alert";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const [form, handleChange, handleFileChange, handleClickFile] = useForm({
        name: "",
        lastname: "",
        email: "",
        password: "",
        imageUrl: ""
    });

    const{name, lastname, email, password, imageUrl} = form;

    const [showAlert, setshowAlert] = useState(false);
    const [alert, setAlert] = useState({});

    const handleSubmit = (e) =>{
        e.preventDefault();
        register();
    };

    const register = async()=>{

        try {
            const url = 'https://dayli-bit-ao.herokuapp.com/signup';
            const resultado = await axios.post(url, form);

            if (resultado.status === 201) {
               navigate('/login');
            }

        } catch (error) {

            setAlert({
                title: "Ha ocurrido un error. Intentalo de nuevo",
                type: "failed",
                buttom: "Continuar",
            });
            setshowAlert(!showAlert);

        }
    };

    const handleContinue = () => {
        setshowAlert(!showAlert);
    };

    return(
        <DivLogin>
            <Header>
                <Logo src="https://res.cloudinary.com/daalu/image/upload/v1648833035/Recursos_Daily/Color_Purple_Container_Yes_wwpmes.png" alt="logo_Daily" />
                <h1>Regístrate Gratis</h1>
            </Header>
            <DivF>
                <Form action="" onSubmit={handleSubmit}>

                    <Label htmlFor="nombre">
                        Nombre
                        <Input
                            value={name}
                            onChange={handleChange}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Ingresa tu nombre" />
                    </Label>

                    <Label htmlFor="apellido">
                        Apellido
                        <Input
                            value={lastname}
                            onChange={handleChange}
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Ingresa tu apellido" />
                    </Label>

                    <DivFile>
                        <input
                            type="file"
                            name={imageUrl}
                            id="fileSelector"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <InputFile onClick={handleClickFile} type="button" value="Imagen de Perfil" />
                        <TextFile type="text" name="image" id="image" readOnly />
                    </DivFile>

                    <Label htmlFor="inputEmail">
                        Correo electrónico
                        <Input
                            value={email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            id="inputEmail"
                            placeholder="Ingrese su correo electrónico" />
                    </Label>

                    <Label htmlFor="inputPassword">
                        Contraseña
                        <Input
                            value={password}
                            onChange={handleChange}
                            type="password"
                            name="password"
                            id="inputPassword"
                            placeholder="Ingresa una contraseña" />
                    </Label>

                    <InputS type="submit" value="Registrarme" />
                </Form>
            </DivF>
            <DivL>
                <p>¿Ya estás Registrado? <Linka to="/login">Iniciar Sesión</Linka></p>
            </DivL>
            <Alert
                alerta={alert}
                isVisible={showAlert}
                handleContinue={() => handleContinue()}
            />
        </DivLogin>
    );
    
    };

export default Register


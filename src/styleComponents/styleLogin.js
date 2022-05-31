import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DivLogin= styled.div`
height: auto;
width: 100%;

display: flex;
flex-direction:column;
align-items: center;
justify-content:center;

color: var(--color-white);`

export const Logo = styled.img`
    width: 40%;
`
export const Label = styled.label`
    width: 100%;
    max-width: 480px;
`
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 8px 0px;
    border-radius: 4px; 

    border: none;
`
export const Linka = styled(Link)`
    color: var(--color-green);
`

export const DivF = styled.div`
    margin: 12px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90%;
`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`
export const InputS = styled.input`
    padding: 10px;
    width: 100%;
    border-radius: 6px;
    border: none;
    margin: 10px 0;

    max-width: 256px;

    background-color: var(--color-green);
    color: var(--color-white);
    font-weight: 800;

    &:hover {
    cursor: pointer;
    }
`

export const Header = styled.header`
    text-align: center;

    padding-top: 10px;

    &>h1{
        margin: 10px 0px;
    }
`

export const DivL = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DivFile = styled.div`
    display: flex;
    width: 100%;

    margin: 10px 0px;

    max-width: 480px;
`

export const InputFile = styled.input`
    padding: 10px;
    width: 30%;
    border-radius: 6px;
    border: none;

    background-color: var(--color-green);
    color: var(--color-white);

    min-width: 120px;

    &:hover {
    cursor: pointer;
    }
`
export const TextFile = styled.input`
    width: 70%;
`

export const Separator = styled.hr`
    width: 100%;
    max-width: 480px;

    margin: 16px;
`

export const ButtonG = styled.button`
    padding: 10px;
    width: 100%;
    max-width: 480px;
    border-radius: 6px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-red);
    color: var(--color-white);

    font-size: 14px;
    font-weight: bold;
    
    &:hover {
        cursor: pointer;
    }

    & > *{
        margin: 0px 10px;
    }


`


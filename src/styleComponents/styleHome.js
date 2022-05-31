import styled from 'styled-components'
import { Link } from "react-router-dom";

export const THeader = styled.p`
    color: var(--color-white);
    text-align: center;
    padding: 5px 20px;
`
export const CCate = styled.div`
    display: flex;
    justify-content: center;
`
export const LogoI= styled.img`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 95px;
    padding: 5px;
    border: transparent solid 9px;
    border-radius: 50%;
`
export const Categories = styled(Link)`
    color: var(--color-white);
    text-decoration: none !important;
    margin: 0 10px;
    text-align: center;`
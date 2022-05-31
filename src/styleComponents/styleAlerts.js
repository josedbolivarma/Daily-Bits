import styled from 'styled-components';

export const AlertSuccess = styled.div`
  background-color: var(--color-green);
  display: none;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: -1000px;
  transition: all 1.3s ease;
`;
export const MessageTS = styled.p`
  font-weight: bold;
  margin-top: 15px;
  margin-left: 15px;
  color: var(--color-black);
`;
export const ButtonCS= styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background-color: var(--color-green);
  box-shadow: 0 1px 1px 1px var(--color-green);

  &:hover {
    cursor: pointer;
  }
`;
export const AlertF = styled.div`
  transition: all 1.3s ease;
  display: none;
  flex-direction: column;
  position: absolute;
  background-color: #f9cfd7;
  width: 100%;
  bottom: -1000px;
`;
export const ButtonCF = styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background-color: var(--color-red);
  box-shadow: 0 1px 1px 1px #b81e3b;

  &:hover {
    cursor: pointer;
  }
`;
export const AlertDefault = styled.div`
  background-color: var(--color-white);
  display: none;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: -1000px;
  transition: all 1.3s ease;
  
  &:hover {
    cursor: pointer;
  }
`;
export const MessageTD= styled.p`
  font-weight: bold;
  margin-top: 15px;
  margin-left: 15px;
  color: var(--color-black);
`;
export const ButtonCD = styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background-color: var(--color-grey);
  box-shadow: 0 1px 1px 1px var(--color-neutral);
`;
export const MessageTF = styled.p`
 margin-top:0px;
 margin-left: 15px;
 margin-bottom:0px;
 font-weight: 700;
 color: var(--color-red);
`;
export const ResponseF= styled.p`
  margin-top: 0px;
  margin-left: 15px;
  margin-bottom: 0px;
  color: var(--color-red);
`;



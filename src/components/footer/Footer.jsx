import styled from "styled-components"
import Logo from "../../assets/img/LogoMain.svg"
import { MainContainer } from "../../styleComponents"

const ImageFooter = styled.img`
  width: 50%;
  height: 200px;
`
const TextCopyright = styled.h4`
  font-family: 'Roboto Slab', serif;
  color: #fff;
  @media(max-width: 768px) {
    font-size: 20px;
  }
  @media(min-width: 769px) and (max-width:1024px){
    font-size: 25px;
  }
  @media(min-width: 1025px) {
    font-size: 30px;
  }
`
const TextCopyrightName = styled.a`
  text-decoration: none;
  color: #fff;
`

const Footer = () => {
  return (
    <MainContainer>
      <TextCopyright>
        &copy; 2023 - <TextCopyrightName 
          href="https://github.com/HernanDeveloper2001" 
          target="_blank" 
          rel="noopener noreferrer">Hernán Dario</TextCopyrightName>
      </TextCopyright>
      <ImageFooter src={Logo} alt="logo-imagen-navegacion"></ImageFooter>
    </MainContainer>
  )
}

export default Footer

import styled from "styled-components"
import Logo from "../../assets/img/LogoMain.svg"
import { MainContainer } from "../../styleComponents"

const ImageFooter = styled.img`
  width: 50%;
  height: 200px;
`

const Footer = () => {
  return (
    <MainContainer>
      <h4>
        &copy; 2023 - <a 
          href="https://github.com/HernanDeveloper2001" 
          target="_blank" 
          rel="noopener noreferrer">hernan dario</a></h4>
      <ImageFooter src={Logo} alt="logo-imagen-navegacion"></ImageFooter>
    </MainContainer>
  )
}

export default Footer

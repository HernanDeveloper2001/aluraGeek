import styled from "styled-components"
import Logo from "../../assets/img/LogoMain.svg"

const FooterContainer = styled.footer`
  height: 400px;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`
const ImageFooter = styled.img`
  width: 50%;
  height: 200px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <ImageFooter src={Logo} alt="logo-imagen-navegacion"></ImageFooter>
    </FooterContainer>
  )
}

export default Footer

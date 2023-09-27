import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/LogoMain.svg"
import { BotonesLinks, ContenedorBotones, MainContainer } from "../../styleComponents";

const SeccionNavegacion = styled.section`
  width: 95%;
  display: flex;
  padding: 50px 0;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(255, 255, 255, 30%);
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 40px;
  }
`;
const ContenedorImagen = styled.div`
  @media(max-width: 768px){
    width: 100%;
  }
  @media(min-width: 769px) and (max-width:1024px){
    width:100%;
  }
  @media(min-width: 1025px){
    width: 30%;
  }
`
const Imagen = styled.img`
  width: 100%;
  height: 100%;
  @media(max-width: 768px){
    object-fit: contain;
  }
  @media(min-width: 769px) and (max-width:1024px){
    object-fit: contain;
  }
  @media(min-width: 1025px){
    object-fit: contain;
  }
`

const MainNavegacion = () => {
  const hoverStyles = {
    azul: {
      backgroundColor: "rgba(42, 122, 228,0.7)",
    },
  };
  
  return (
      <MainContainer>
        <SeccionNavegacion>
          <ContenedorImagen>
            <Link to="/">
              <Imagen src={Logo} alt="logo-imagen-navegacion" />
            </Link>
          </ContenedorImagen>
          <ContenedorBotones>
            <BotonesLinks 
              color="rgb(42, 122, 228)"
              hoverstyles={hoverStyles.azul}
              to="/registro">
              Registro
            </BotonesLinks>
            <BotonesLinks 
              color="rgb(42, 122, 228)"
              hoverstyles={hoverStyles.azul}
              to="/nuevo-video"
              >Nuevo video
            </BotonesLinks>
          </ContenedorBotones>
        </SeccionNavegacion>
      </MainContainer>
  );
};

export default MainNavegacion;

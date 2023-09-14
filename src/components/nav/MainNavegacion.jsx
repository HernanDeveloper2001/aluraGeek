import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/LogoMain.svg"
import { BotonesLinks, ContenedorBotones } from "../../styleComponents";

const ContenedorNavegacion = styled.nav`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
`
const SeccionNavegacion = styled.section`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid rgba(255,255,255, 30%);
`
const ContenedorImagen = styled.div`
  width: 300px;
  height: 70px;
`
const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MainNavegacion = () => {
  const hoverStyles = {
    register: {
      backgroundColor: "rgba(42, 122, 228,0.7)",
    },
    newVideo: {
      backgroundColor: "rgba(42, 122, 228,0.7)",
    },
  };
  
  return (
      <ContenedorNavegacion>
        <SeccionNavegacion>
          <ContenedorImagen>
            <Link to="/">
              <Imagen src={Logo} alt="logo-imagen-navegacion" />
            </Link>
          </ContenedorImagen>
          <ContenedorBotones>
            <BotonesLinks 
              hoverstyles={hoverStyles.register}
              to="/registro">
              Registro
            </BotonesLinks>
            <BotonesLinks 
              hoverstyles={hoverStyles.newVideo}
              to="/nuevo-video"
              >Nuevo video
            </BotonesLinks>
          </ContenedorBotones>
        </SeccionNavegacion>
      </ContenedorNavegacion>
  );
};

export default MainNavegacion;

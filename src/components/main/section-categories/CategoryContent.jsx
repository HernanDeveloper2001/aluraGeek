import styled from "styled-components"
import { useState } from "react"
import {AiOutlineCloseCircle, AiFillEdit} from "react-icons/ai";
import { ContenedorBotones,BotonesLinks } from "../../../styleComponents";

const ContentListing = styled.article`
  padding-bottom: 20px;
  display: flex;
`
const CategoryDisplay = styled.article`
  border-radius: 5px;
  display: flex;
  height: 400px;
  width: 400px;
  flex-direction: column;
  margin: 0 10px;
  cursor: pointer;
  position: relative;
  @media(max-width: 768px){
    font-size: 16px;
    width: 200px;
    height: 200px;
  }
`
const TitleCategoryDisplay = styled.h3`
  font-size:2.5vw;
  text-transform: capitalize;
  text-align: center;
  font-family: 'Roboto Slab', serif;
  margin: 0;
  z-index: 99;
  @media(max-width:768px){
    font-size: 1.5rem;
  }
`
const ImageCategoryDisplay = styled.img`
  margin: auto;
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: absolute;
`
const CommentsCategoryDisplay = styled.p`
  font-size: 20px;
  height: 100%;
  font-family: 'Roboto Slab', serif;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 5px;
    background-color: rgba(255,255,255, 30%);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb{
    width: 5px;
    height: 50px;
  }
  &::-webkit-scrollbar-thumb:hover{
    background-color: rgba(255,255,255, 20%);
    cursor: pointer;
  }
  @media(max-width: 768px) {
    font-size: 16px;
  }
`
const IconContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index:2;
  @media(max-width:768px){

  }
`
const IconEdit = styled.div`
  width:40px;
  height: 40px;
  display:flex;
  justify-content: center;
  align-items: center;
`
const IconRemove = styled.div`
  width:40px;
  height: 40px;
  display:flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.p`
  font-size:14px;
  font-style: italic;
  font-family: 'Roboto Slab', serif;
  text-decoration: underline;
  text-underline-offset: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
`
const CategoryContent = ({formDataNewVideo, rgbaColor}) => {
  
  const hoverStyles = {
    verde: {
      backgroundColor: "rgba(0, 200, 111, 0.698)",
    },
    rojo: {
      backgroundColor: "rgba(229, 57, 53, 0.7)",
    },
  };
  const {title, comments,category, id, image, video, securityCode} = formDataNewVideo;
  const {letterColor, cardColor } = rgbaColor;

  //mouse --------------------------------
  const [mostrarContenido, setMostrarContenido] = useState(true)
  function handleMouseOver(){
    setMostrarContenido(false)
  }
  function handleMouseOut(){
    setMostrarContenido(true)
  }

  return (
    <ContentListing>
      <CategoryDisplay
        style={{backgroundColor:cardColor, border:cardColor}}
        key={`Category-display-${id}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        {mostrarContenido  
        ? <>
            <IconContainer>
              <IconEdit>
                <BotonesLinks
                  zIndex="2"
                  padding="0"
                  to="/details"
                  state={{
                    title, 
                    comments, 
                    id, 
                    image,
                    video,
                    category }}>
                    <AiFillEdit
                      style={{   
                        width:"100%",
                        height:"100%",                 
                        color:letterColor}}>
                    </AiFillEdit>    
                </BotonesLinks>
              </IconEdit>

              <IconRemove >
                <BotonesLinks 
                  zIndex="2"
                  padding="0"
                  to="/delete"
                  state={{
                    title, 
                    comments, 
                    id, 
                    image,
                    video,
                    category}}>
                  <AiOutlineCloseCircle
                    style={{
                      width:"100%",
                      height:"100%",
                      color:letterColor}}/>
                </BotonesLinks>
              </IconRemove>

            </IconContainer>

            <TitleCategoryDisplay 
              style={{color:letterColor}}>
                {title}
            </TitleCategoryDisplay>

            <ImageCategoryDisplay src={image} alt="imagen" />
    
            <Text 
              style={{color: letterColor}}>
                {`Code: ${securityCode}`}
            </Text>
          </> 
        : <>
            <IconContainer>

              <IconEdit>
                <BotonesLinks
                  zIndex="2"
                  padding="0"
                  to="/details"
                  state={{
                    title, 
                    comments, 
                    id, 
                    image,
                    video,
                    category }}>
                    <AiFillEdit
                      style={{   
                        width:"100%",
                        height:"100%",                 
                        color:letterColor}}>
                    </AiFillEdit>    
                </BotonesLinks>
              </IconEdit>

              <IconRemove>
                <BotonesLinks 
                  zIndex="2"
                  padding="0"
                  to="/delete"
                  state={{
                    title, 
                    comments, 
                    id, 
                    image,
                    video,
                    category}}>
                  <AiOutlineCloseCircle
                    style={{
                      width:"100%",
                      height:"100%",
                      color:letterColor}}/>
                </BotonesLinks>
              </IconRemove>

            </IconContainer>
            
            <CommentsCategoryDisplay
              style={{color: letterColor}}>
              Comments:<br></br>
              {comments}
            </CommentsCategoryDisplay>

            <ContenedorBotones>
              <BotonesLinks
                to="/video" state={{video:video}}
                hoverstyles={hoverStyles.verde}
                padding="5px"
                width="40%"
                color="rgb(0, 200, 111)"
                border="rgb(0, 200, 111)">Ver video
              </BotonesLinks>
            </ContenedorBotones>
          </>
        }
      </CategoryDisplay>
    </ContentListing>
  )
}

export default CategoryContent


import styled from "styled-components"
import { useState } from "react"
import {AiOutlineCloseCircle, AiFillEdit} from "react-icons/ai";
import { ContenedorBotones,BotonesLinks } from "../../../styleComponents";

const ContentListing = styled.article`
  padding: 20px 0;
  display: flex;
`
const CategoryDisplay = styled.article`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 30px;
  cursor: pointer;
  position: relative;
  @media(max-width: 768px){
    font-size: 16px;
    width: 200px;
    height: 200px;
  }
  @media(min-width: 768px) and (max-width:1366px){
    width:300px;
    width:300px;
  }
  @media(min-width:1367px){
    height: 400px;
    width: 400px;
  }
`
const TitleCategoryDisplay = styled.p`
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  font-family: 'Roboto Slab', serif;
  z-index: 99;
  @media(max-width:768px){
    font-size: 20px;
  }
  @media(min-width: 768px) and (max-width:1366px){
    font-size: 40px;
  }
  @media(min-width:1367px){
    font-size: 60px;
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
    font-size: 20px;
  }
  @media(min-width: 768px) and (max-width:1366px){
    font-size: 25px;
  }
  @media(min-width:1367px){
    font-size: 30px;
  }

`
const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index:2;
`
const IconEdit = styled.div`
  display: flex;
  @media (max-width:768px){
    width:30px;
    height: 30px;
  }
  @media(min-width: 768px) and (max-width:1366px){
    width: 50px;
    height: 50px;
  }
  @media (min-width:1367px){
    width:70px;
    height: 70px;
  }
`
const IconRemove = styled.div`
  background-color: blue;
  @media (max-width:768px){
    width:30px;
    height: 30px;
  }
  @media(min-width: 768px) and (max-width:1366px){
    width: 50px;
    height: 50px;
  }
  @media (min-width:1367px){
    width:70px;
    height: 70px;
  }
`
const Text = styled.p`
  font-size:14px;
  font-style: italic;
  font-family: 'Roboto Slab', serif;
  text-decoration: underline;
  text-underline-offset: 2px;
  z-index: 99;
  @media(max-width: 768px) {
    font-size: 15px;
  }
  @media(min-width: 768px) and (max-width:1366px){
    font-size: 20px;
  }
  @media(min-width: 1367px) {
    font-size: 25px;
  }
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


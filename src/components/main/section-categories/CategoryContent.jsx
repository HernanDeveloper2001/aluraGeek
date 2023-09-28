import styled from "styled-components"
import { useState } from "react"
import {AiOutlineCloseCircle, AiFillEdit} from "react-icons/ai";
import { ContenedorBotones,BotonesLinks } from "../../../styleComponents";
import { Link } from "react-router-dom";

const ContentListing = styled.article`
  padding: 20px 0;
  display: flex;
`
const CategoryDisplay = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 0 30px;
  cursor: pointer;
  position: relative;
  @media(max-width: 768px){
    font-size: 18px;
    width: 200px;
    height: 200px;
  }
  @media(min-width: 769px) and (max-width:1024px){
    font-size: 23px;
    width:400px;
    height:400px;
  }
  @media(min-width:1025px){
    font-size: 28px;
    height: 600px;
    width: 600px;
  }
`
const TitleCategoryDisplay = styled.h3`
  font-weight: 700;
  text-transform: capitalize;
  line-height: 18px;
  white-space: break-spaces;
  text-overflow: ellipsis;
  text-align: center;
  font-family: 'Roboto Slab', serif;
  z-index: 2;
  @media(max-width: 768px) {
    font-size: 30px;
  }
  @media(min-width: 769px) and (max-width:1024px){
    font-size: 40px;
  }
  @media(min-width: 1025px) {
    font-size: 50px;
  }
`
const Image = styled.img`
  position: absolute;
  object-fit: cover;
  width:100%;
  height: 100%;
  border-radius: 5px;
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
  @media(min-width: 769px) and (max-width:1024px){
    font-size: 25px;
  }
  @media(min-width: 1025px) {
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
  justify-content: center;
  align-items: center;

  @media (max-width:768px){
    width:30px;
  }
  @media(min-width: 769px) and (max-width:1024px){
    width:50px;
  }
  @media (min-width:1025px){
    width:70px;
  }
`
const IconRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width:768px){
    width:30px;
  }
  @media(min-width: 769px) and (max-width:1024px){
    width:50px;
  }
  @media (min-width:1025px){
    width:70px;
  }
`
const TextCode = styled.p`
  font-style: italic;
  text-overflow: ellipsis;
  white-space: break-spaces;
  line-height: 18px;
  font-family: 'Roboto Slab', serif;
  text-decoration: underline;
  text-underline-offset: 2px;
  z-index:4;
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
const BotonEditLink = styled(Link)`
  padding: 0;
  width: 100%;
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
` 
const BotonRemoveLink = styled(Link)`
  text-decoration: none;
  padding: 0;
  width: 100%;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
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
                <BotonEditLink
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
                </BotonEditLink>
              </IconEdit>

              <IconRemove >
                <BotonRemoveLink 
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
                </BotonRemoveLink>
              </IconRemove>

            </IconContainer>

            <TitleCategoryDisplay 
              style={{color:letterColor}}>
                {title}
            </TitleCategoryDisplay>

            <Image src={image} alt="imagen" />
    
            <TextCode 
              style={{color: letterColor}}>
                {`securityCode: ${securityCode}`}
            </TextCode>
          </> 
        : <>
            <IconContainer>

              <IconEdit>
                <BotonEditLink
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
                </BotonEditLink>
              </IconEdit>

              <IconRemove>
                <BotonRemoveLink 
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
                </BotonRemoveLink>
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


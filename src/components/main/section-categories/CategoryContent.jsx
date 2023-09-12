import styled from "styled-components"
import { useState } from "react"
import {AiOutlineCloseCircle} from "react-icons/ai";

const ContentListing = styled.article`
  overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 20px;
  &::-webkit-scrollbar{
    width: 15px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: rgba(255,255,255, 30%);
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover{
    background-color: rgba(255,255,255, 20%);
    cursor: pointer;
  }
`
const CategoryDisplay = styled.article`
  display: flex;
  width: 400px;
  height: 400px;
  flex-direction: column;
  margin: 0 10px;
  border: 1px solid rgba(255,255,255, 30%);
  border-radius: 5px;
  cursor: pointer;
  background-color: #928787;
`
const TitleCategoryDisplay = styled.h3`
  font-size:2em;
  text-transform: capitalize;
  text-align: center;
  font-family: 'Roboto Slab', serif;
  margin: 0;
`
const ImageCategoryDisplay = styled.img`
  margin: auto;
  object-fit: contain;
  border-radius: 5px;
  border-radius: 50%;
  width: 70%;
  height: 70%;
`
const CommentsCategoryDisplay = styled.p`
  font-size: 20px;
  height: 100%;
  font-family: 'Roboto Slab', serif;
`
const IconContainer = styled.div`
  align-self: flex-end;
  height: 40px;
  border-radius: 5px;
  width: 40px;
  display: flex;
  justify-content: end;
  align-items: center;
`
const CategoryContent = ({formDataNewVideo,bColorCarta}) => {
  const [mostrarContenido, setMostrarContenido] = useState(true)

  function handleMouseOver(){
    setMostrarContenido(false)

  }

  function handleMouseOut(){
    setMostrarContenido(true)
  }

  function handleDeleteClick(id){
    const idCategories = id;
    const categoriesDelete = formDataNewVideo.filter(item => item)
    console.log(categoriesDelete)

  }


  return (
    <ContentListing>
      <CategoryDisplay
        key={formDataNewVideo.id}
        style={{backgroundColor:bColorCarta, border:bColorCarta}}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        {mostrarContenido  
        ? <>
            <IconContainer>
              <AiOutlineCloseCircle 
                style={{width:"40px", height:"40px", color:"red"}}
                onClick={()=>handleDeleteClick(formDataNewVideo.id)}/>
            </IconContainer>
            <TitleCategoryDisplay>{formDataNewVideo.title}</TitleCategoryDisplay>
            <ImageCategoryDisplay src={formDataNewVideo.image} alt="imagen"/>
          </> 
        : <>
            <IconContainer>
              <AiOutlineCloseCircle
                style={{width:"40px", height:"40px", color:"red"}}
                onClick={()=>handleDeleteClick(formDataNewVideo.id)}/>
            </IconContainer>
            <CommentsCategoryDisplay >{formDataNewVideo.comments}</CommentsCategoryDisplay>
          </>
        }
      </CategoryDisplay>
    </ContentListing>
  )
}

export default CategoryContent


import styled from "styled-components"
import { useState } from "react"

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
  margin: 0px 10px;
  border: 1px solid rgba(255,255,255, 30%);
  border-radius: 5px;
  cursor: pointer;
`
const TitleCategoryDisplay = styled.h3`
  font-size:25px;
  text-align: center;
  font-family: 'Roboto Slab', serif;
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
  font-family: 'Roboto Slab', serif;
  text-align: center;
`

const CategoryContent = ({formDataNewVideo,bColorCarta}) => {
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
        style={{backgroundColor:bColorCarta, border:bColorCarta}}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        {mostrarContenido 
        ? <>
            <TitleCategoryDisplay>{formDataNewVideo.title}</TitleCategoryDisplay>
            <ImageCategoryDisplay src={formDataNewVideo.image} alt="imagen"/>
          </> 
        : <>
            <CommentsCategoryDisplay>{formDataNewVideo.comments}</CommentsCategoryDisplay>
          </>
        }
      </CategoryDisplay>
    </ContentListing>
  )
}

export default CategoryContent


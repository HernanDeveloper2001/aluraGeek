import styled from "styled-components"
import { useState } from "react"
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useFormData } from "../../formDataContext";

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
  position: relative;
`
const TitleCategoryDisplay = styled.h3`
  color: #00C86F;
  font-size:2.5vw;
  text-transform: capitalize;
  text-align: center;
  font-family: 'Roboto Slab', serif;
  margin: 0;
  z-index: 99;
`
const ImageCategoryDisplay = styled.img`
  margin: auto;
  object-fit: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
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
const Text = styled.p`
  color: #00C86F;
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
const CategoryContent = ({formDataNewVideo}) => {
  const [mostrarContenido, setMostrarContenido] = useState(true)
  const {formData, saveFormData} = useFormData()
  const [tableData, setTableData] = useState(formData.formData);
  
  const {title, comments, id, image, video, securityCode} = formDataNewVideo;
  
  function handleMouseOver(){
    setMostrarContenido(false)
  }
  function handleMouseOut(){
    setMostrarContenido(true)
  }

  const handleRemove = (id) => {
    const updateTableData = tableData.filter(item => item.id !== id)
    setTableData(updateTableData) 
    saveFormData({formData:updateTableData})
  }

  return (
    <ContentListing>
      <CategoryDisplay
        key={`Category-display-${id}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        {mostrarContenido  
        ? <>
            <IconContainer>
              <AiOutlineCloseCircle 
                style={{width:"40px", height:"40px", color:"red"}}
                onClick={()=>handleRemove(id)}
                />
            </IconContainer>
            <TitleCategoryDisplay>{title}</TitleCategoryDisplay>
            <ImageCategoryDisplay src={image} alt="imagen"/>
            <Text>{`Code: ${securityCode}`}</Text>
          </> 
        : <>
            <IconContainer>
              <AiOutlineCloseCircle
                style={{width:"40px", height:"40px", color:"red"}}
                onClick={()=>handleRemove(id)}
                />
            </IconContainer>
            <CommentsCategoryDisplay>
              Comments:<br></br>
              {comments}
            </CommentsCategoryDisplay>
          </>
        }
      </CategoryDisplay>
    </ContentListing>
  )
}

export default CategoryContent


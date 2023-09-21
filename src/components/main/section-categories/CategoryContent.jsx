import styled from "styled-components"
import { useState } from "react"
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useFormData } from "../../formDataContext";
import { Botones, Input } from "../../../styleComponents";

const ContentListing = styled.article`
  padding-bottom: 20px;
`
const CategoryDisplay = styled.article`
  display: flex;
  height: 400px;
  width: 400px;
  flex-direction: column;
  margin: 0 10px;
  border: 1px solid rgba(255,255,255, 30%);
  border-radius: 5px;
  cursor: pointer;
  position: relative;
`
const CategoryContainerCode = styled.div`
  margin: 0 10px;
  border-radius: 5px;
  width: 400px;
  border: 1px solid rgba(255,255,255, 30%);
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
`
const IconContainer = styled.div`
  height: 40px;
  border-radius: 5px;
  width: 40px;
  display: flex;
  align-self: end;
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
  const [mostrarContenido, setMostrarContenido] = useState(true)
  const {formData, saveFormData} = useFormData()
  const [tableData, setTableData] = useState(formData);
  const hoverStyles = {
    verde: {
      backgroundColor: "rgba(0, 200, 111, 0.698)",
    },
    rojo: {
      backgroundColor: "rgba(229, 57, 53, 0.7)",
    },
  };
  const {title, comments, id, image, video, securityCode} = formDataNewVideo;
  const [codeWindow, setCodeWindow] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const {letterColor, cardColor } = rgbaColor;

  console.log(formData)

  function handleVideoOpen(id){
    setSelectedItemId(id)
    setShowVideo(true)
  }
  function handleVideoClose(){
    setShowVideo(false)
  }
  function openCodeWindow() {
    setCodeWindow(true);
  }
  function closeCodeWindow(){
    setCodeWindow(false);
  }
  function handleMouseOver(){
    setMostrarContenido(false)
  }
  function handleMouseOut(){
    setMostrarContenido(true)
  }
  function handleRemove(id){
    setSelectedItemId(id)
    openCodeWindow()
  }
  const [codeSecurity, setCodeSecurity] = useState("")
  function handlerCodeSecurity(e){
    const codeSecurityValue = e.target.value;
    const codeFormData = formData.map((item,i) => item.securityCode[i] === codeSecurityValue)
    if(!codeFormData){
      console.log("false")
    }
    setCodeSecurity(codeSecurityValue)
  }
  const [intentos, setIntentos] = useState(3);
  function confirmRemove(){
    // Verificar si el código de seguridad es correcto aquí antes de eliminar
    const codeFormData = Object.values(formData).some(item => item.securityCode === codeSecurity && item.id === id)
    let intetoscode = 1
    if (codeFormData) {
      // Eliminar el elemento de tableData y actualizar formData
      const updatedTableData = tableData.filter((item) => item.id !== selectedItemId);
      setTableData(updatedTableData);
      saveFormData(updatedTableData);
    }
    else if(intetoscode < intentos){
      alert("El código de seguridad no coincide.");
      setIntentos(intentos - 1)
    }
    else{
      alert("ninguno de los codigos coincide")
      closeCodeWindow();
    }
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
              <AiOutlineCloseCircle 
                style={{width:"40px", height:"40px", color:letterColor}}
                onClick={()=>{
                  handleRemove(id)
                } }
                />
            </IconContainer>
            <TitleCategoryDisplay 
              style={{color:letterColor}}
              >{title}</TitleCategoryDisplay>
            <ImageCategoryDisplay src={image} alt="imagen"/>
            <Text 
              style={{color: letterColor}}
              >{`Code: ${securityCode}`}</Text>
          </> 
        : <>
            <IconContainer>
              <AiOutlineCloseCircle
                style={{width:"40px", height:"40px", color:letterColor}}
                onClick={()=>handleRemove(id)}
                />
            </IconContainer>
            <CommentsCategoryDisplay
              style={{color: letterColor}}>
              Comments:<br></br>
              {comments}
            </CommentsCategoryDisplay>
            {
              showVideo 
              ? <Botones
                  hoverstyles={hoverStyles.rojo}
                  width="40%"
                  padding="5px"
                  color="rgb(229, 57, 53)"
                  border="rgb(229, 57, 53)"
                  onClick={() => handleVideoClose(id)}>ocultar</Botones>
              : <Botones
                  hoverstyles={hoverStyles.verde}
                  padding="5px"
                  width="40%"
                  color="rgb(0, 200, 111)"
                  border="rgb(0, 200, 111)"
                  onClick={() => handleVideoOpen(id)}>Ver video</Botones>
            }
          </>
        }
      </CategoryDisplay>
      {selectedItemId === id && codeWindow && (
        <CategoryContainerCode>
          <p 
            style={{
              fontFamily:"Roboto Slab"}}>Ingresa código de seguridad</p>
          <p 
            style={{
              fontFamily:"Roboto Slab"}}>Tienes {intentos} intentos</p>
          <Input
            width="50%"
            name="codeSecurity" 
            value={codeSecurity} 
            placeholder="Enter code security"
            onChange={handlerCodeSecurity} />
          <Botones
            hoverstyles={hoverStyles.verde}
            color="rgb(0, 200, 111)"
            border="rgb(0, 200, 111)"
            padding="5px"
            onClick={confirmRemove} >Enter</Botones>
          <Botones
            hoverstyles={hoverStyles.rojo}
            padding="5px"
            color="rgb(229, 57, 53)"
            border="rgb(229, 57, 53)"
            onClick={closeCodeWindow} >Cancel</Botones>
        </CategoryContainerCode>
      )}
    </ContentListing>
  )
}

export default CategoryContent


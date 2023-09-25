import styled from "styled-components"
import { useState } from "react"
import {AiOutlineCloseCircle, AiFillEdit} from "react-icons/ai";
import { useFormData } from "../../formDataContext";
import { Botones, Input, ContenedorBotones, InputTextarea, ContainerInputs, Form } from "../../../styleComponents";

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
const CategoryContainerCode = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  border-radius: 5px;
  transition: width 2s, height 2s;
  width: 400px;
  @media(max-width: 768px){
    font-size: 16px;
    width: 200px;
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
  z-index:2;
  justify-content: space-between;
`
const IconClose = styled.div`
  height: 40px;
  border-radius: 5px;
  width: 40px;
  position: relative;
  @media(max-width:768px){
    width:30px;
    height: 30px;
  }
`
const IconEdit = styled.div`
  height: 40px;
  border-radius: 5px;
  width: 40px;
  position: relative;

  @media(max-width:768px){
    width:30px;
    height: 30px;
  }
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
  const {letterColor, cardColor } = rgbaColor;

  //video ---------------------------------
  const [showVideo, setShowVideo] = useState(false);
  function handleVideoOpen(id){
    setSelectedItemId(id)
    setShowVideo(true)
  }
  function handleVideoClose(){
    setShowVideo(false)
  }

  //mouse --------------------------------
  const [mostrarContenido, setMostrarContenido] = useState(true)
  function handleMouseOver(){
    setMostrarContenido(false)
  }
  function handleMouseOut(){
    setMostrarContenido(true)
  }

  //code
  //CodeSecurity
  const [showCodeWindow, setShowCodeWindow] = useState(false); // estado de la ventana del codeSecurity por defecto
  const [selectedIdCode, setSelectedIdCode] = useState(null); // id de la ventana del click del boton remove
  const [openRemoveEvent, setOpenRemoveEvent] = useState(null);
  //estado de la ventana del codeSecurity = true
  function openCodeWindow() {
    setShowCodeWindow(true);
  }
  //estado de la ventana del codeSecurity = false
  function closeCodeWindow(){
    setShowCodeWindow(false);
  }
  // id de la ventana del click del boton remove
  function handleCodeSecurity(id){
    setSelectedIdCode(id)
    openCodeWindow()
  }
  // valor del input que verifica si coincide con el del boton
  const [codeSecurity, setCodeSecurity] = useState("")
  function inputCodeSecurity(e){
    const codeSecurityValue = e.target.value;
    const codeFormData = formData.map((item,i) => item.securityCode[i] === codeSecurityValue)
    if(!codeFormData){
      console.log("false")
    }else{
      console.log("ture")
    }
    setCodeSecurity(codeSecurityValue)
  }
  // boton que confirma si el id es el mismo del boton
  const [intentos, setIntentos] = useState(3);

  function confirmRemove(id) {
    // Verificar si el código de seguridad es correcto aquí antes de eliminar
    const codeFormData = Object.values(formData).some(item => item.securityCode === codeSecurity && item.id === id)
    let intetoscode = 1
    if (codeFormData) {
      // Eliminar el elemento de tableData y actualizar formData
      const updatedTableData = tableData.filter((item) => item.id !== selectedIdCode);
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


  //Details category
  const [showCategoryDetails, setShowCategoryDetails] = useState(false);//estado de la ventana del categoryDetails por defecto
  const [openEditEvent, setOpenEditEvent] = useState(null);
  const [selectedIdDetails, setSelectedIdDetails] = useState(null) //id de la ventana del click del boton categoryDetails
  //estado de la ventana del categoryDetails = true
  function openCategoryDetails(){
    setShowCategoryDetails(true)
  }
  //estado de la ventana del categoryDetails = false
  function closeCategoryDetails(){
    setShowCategoryDetails(false)
  }
  const [idCategoryDetails, setIdCategoryDetails] = useState(null)
  // id de la ventana del click del boton edit

  function handleCategoryDetails(id){
    const idCategory = formData.find(item => item.id === id)
    if(idCategory){
      setSelectedIdDetails(id)
      openCategoryDetails()
      setIdCategoryDetails(idCategory)
    }else{
      console.log("no se encontraron valores")
    }
  }

  function onClickSave(id) {
    // Encuentra el índice del elemento con el ID coincidente en formData
    const indiceItem = formData.findIndex((item) => item.id === id);
  
    if (indiceItem !== -1) {
      // Actualiza el elemento en formData
      const formDataActualizada = [...formData];
      formDataActualizada[indiceItem] = idCategoryDetails; // Suponiendo que idCategoryDetails contiene los datos actualizados
  
      // Guarda formDataActualizada en la base de datos usando saveFormData
      saveFormData(formDataActualizada);
  
      // Cierra la sección de edición o realiza cualquier otra acción necesaria
      closeCategoryDetails();
    }
  }

  function handlerUpdateData(target) {
    // registerUpdateData
    const { name, value } = target;

    // Actualiza los datos en idCategoryDetails
    setIdCategoryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
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
                <AiFillEdit
                  onClick={() => {
                    if (openEditEvent === id) {
                      setOpenEditEvent(null); // Cierra el evento "Edit" si ya estaba abierto
                    } else {
                      handleCategoryDetails(id)
                      setOpenEditEvent(id);
                      setOpenRemoveEvent(null); // Cierra el evento "Remove" si está abierto
                    }
                  }}
                  style={{width:"100%", height:"100%", color:letterColor, position:"absolute"}}>
                </AiFillEdit>
              </IconEdit>

              <IconClose>
                <AiOutlineCloseCircle 
                  style={{width:"100%", height:"100%", color:letterColor, position:"absolute"}}
                  onClick={() => {
                    if (openRemoveEvent === id) {
                      setOpenRemoveEvent(null); // Cierra el evento "Remove" si ya estaba abierto
                    } else {
                      handleCodeSecurity(id);
                      setOpenRemoveEvent(id);
                      setOpenEditEvent(null); // Cierra el evento "Edit" si está abierto
                    }
                  }} />
              </IconClose>
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
                <AiFillEdit
                  style={{width:"100%", height:"100%", color:letterColor, position:"absolute"}}
                  onClick={() => {
                    if (openEditEvent === id) {
                      setOpenEditEvent(null); // Cierra el evento "Edit" si ya estaba abierto
                    } else {
                      handleCategoryDetails(id)
                      setOpenEditEvent(id);
                      setOpenRemoveEvent(null); // Cierra el evento "Remove" si está abierto
                    }
                  }}>
                </AiFillEdit>
              </IconEdit>

              <IconClose>
                <AiOutlineCloseCircle
                  style={{width:"100%", height:"100%", color:letterColor}}
                  onClick={() => {
                    if (openRemoveEvent === id) {
                      setOpenRemoveEvent(null); // Cierra el evento "Remove" si ya estaba abierto
                    } else {
                      handleCodeSecurity(id);
                      setOpenRemoveEvent(id);
                      setOpenEditEvent(null); // Cierra el evento "Edit" si está abierto
                    }
                  }}/>
              </IconClose>
            </IconContainer>
            
            <CommentsCategoryDisplay
              style={{color: letterColor}}>
              Comments:<br></br>
              {comments}
            </CommentsCategoryDisplay>

            <ContenedorBotones>
              {
                showVideo 
                ?<Botones
                    hoverstyles={hoverStyles.rojo}
                    width="40%"
                    padding="5px"
                    color="rgb(229, 57, 53)"
                    border="rgb(229, 57, 53)"
                    onClick={() => handleVideoClose(id)}>ocultar</Botones>
                :<Botones
                    hoverstyles={hoverStyles.verde}
                    padding="5px"
                    width="40%"
                    color="rgb(0, 200, 111)"
                    border="rgb(0, 200, 111)"
                    onClick={() => handleVideoOpen(id)}>Ver video</Botones>
              }
            </ContenedorBotones>
          </>
        }
      </CategoryDisplay>
      {selectedIdCode === id && openRemoveEvent === id 
        ? showCodeWindow 
          &&(
            <CategoryContainerCode style={{border:cardColor, backgroundColor:cardColor}}>
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
                onChange={inputCodeSecurity} />
              <ContenedorBotones>
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
                  onClick={closeCodeWindow}>Cancel</Botones>
              </ContenedorBotones>
            </CategoryContainerCode>
          )
        :(selectedIdDetails === id && openEditEvent === id)  &&
        showCategoryDetails
        &&(
          <Form width="400px" style={{backgroundColor:cardColor, border:cardColor}}>
            <ContainerInputs>
              <Input
                type="text" 
                name="title"
                placeholder="title" 
                defaultValue={idCategoryDetails.title}
                onChange={(e) => handlerUpdateData(e.target)}/>

              <Input
                type="text" 
                name="title"
                placeholder="title" 
                defaultValue={idCategoryDetails.category}
                onChange={(e) => handlerUpdateData(e.target)}/>
                            
              <Input 
                type="text"
                name="video"
                placeholder="Link video" 
                defaultValue={idCategoryDetails.video}
                onChange={(e) => handlerUpdateData(e.target)}/>
                            

              <Input 
                type="text"
                name="image"
                placeholder="Link image" 
                defaultValue={idCategoryDetails.image}
                onChange={(e) => handlerUpdateData(e.target)} />
                            

              <InputTextarea
                type="text"
                name="comments"
                placeholder="add a comments" 
                defaultValue={idCategoryDetails.comments}
                onChange={(e) => handlerUpdateData(e.target)} />
                            
              <ContenedorBotones>
                <Botones
                  onClick={() => onClickSave(idCategoryDetails.id)}
                  type="submit"
                  hoverstyles={hoverStyles.enter}
                  border="rgb(0, 200, 111)" 
                  color="rgb(0, 200, 111)"
                  text="save"> Enter
                </Botones>
                <Botones
                  onClick={closeCategoryDetails}
                  hoverstyles={hoverStyles.cancel}
                  border="rgb(229, 57, 53)" 
                  color="rgb(229, 57, 53)"
                  text="clear" 
                  type="reset"> Cancel
                </Botones>
              </ContenedorBotones>
            </ContainerInputs>
          </Form>
        )
      }
    </ContentListing>
  )
}

export default CategoryContent


import {ContenedorBotones, MainContainer,Botones,BotonesLinks, Input, Title, InputTextarea, InputErrors, Form, ContainerInputs, Label } from "../../../styleComponents"
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormData } from "../../formDataContext";
import { useForm } from "react-hook-form";

const Delete = () => {
  // valor del input que verifica si coincide con el del boton
  const [codeSecurity, setCodeSecurity] = useState("")
  const {register, handleSubmit} = useForm()
  const navigateHome = useNavigate()
  const {formData, saveFormData} = useFormData()
  const [intentos, setIntentos] = useState(3);
  const locationData = useLocation()
  const { id,title, comments,category,image, video,} = locationData.state;
  const hoverStyles = {
    verde: {
      backgroundColor: "rgba(0, 200, 111, 0.7)",
    },
    rojo: {
      backgroundColor: "rgba(229, 57, 53, 0.7)",
    },
    amarillo:{
      backgroundColor:"rgba(255, 186, 5,0.7)"
    }
  };

  function inputCodeSecurity(e){
    const codeSecurityValue = e.target.value;
    const codeFormData = formData.find((item) => item.securityCode === codeSecurityValue)
    setCodeSecurity(codeSecurityValue)
  }

  return (
    <MainContainer>
      <Title>Remove Details</Title>
      <Form onSubmit={handleSubmit(data => {
        const codeFormData = Object.values(formData).some(item => item.securityCode === codeSecurity)
        let intentoscode = 1
        if (codeFormData) {
          // Eliminar el elemento de tableData y actualizar formData
          const updatedTableData = formData.filter((item) => item.id !== id);
          saveFormData(updatedTableData);
        }
        else if(intentoscode < intentos){
          alert("El código de seguridad no coincide.");
          setIntentos(intentos - 1)
        }
        else{
          navigateHome("/", {replace:true})
          alert("ninguno de los codigos coincide")
        }
      })}>

        <ContainerInputs>
          <Label>Id</Label>
          <Input
            {...register("id")}
            type="text" 
            name="id"
            defaultValue={id}
            disabled />
        </ContainerInputs>

        <ContainerInputs>
          <Label>Title</Label>
          <Input
            {...register("title")}
            type="text" 
            name="title"
            defaultValue={title}
            disabled />
        </ContainerInputs>

        <ContainerInputs>
          <Label>Video</Label>
          <Input
            {...register("video")}
            type="text" 
            name="video"
            defaultValue={video}
            disabled />
        </ContainerInputs>       

        <ContainerInputs>
          <Label>Image</Label>
          <Input
            {...register("image")}
            type="text" 
            name="image"
            defaultValue={image}
            disabled />

        </ContainerInputs>           

        <ContainerInputs>
          <Label>Category</Label>
          <Input
            {...register("category")}
            type="text" 
            name="category"
            defaultValue={category}
            disabled />
        </ContainerInputs>

        <ContainerInputs>
          <Label>Comments</Label>  
          <InputTextarea
            {...register("comments")}
            type="text"
            name="comments"
            defaultValue={comments}
            disabled />
        </ContainerInputs>   

        <ContainerInputs>
          <Label>security Code</Label>
          <Input
            type="text" 
            placeholder="securityCode" 
            onChange={inputCodeSecurity}
          />
        </ContainerInputs>

        <InputErrors>Tienes {intentos} intentos</InputErrors>

        <ContenedorBotones>
          <Botones
            type="submit"
            hoverstyles={hoverStyles.enter}
            border="rgb(0, 200, 111)" 
            color="rgb(0, 200, 111)"
            text="save"> Enter
          </Botones>

          <BotonesLinks
            to="/"
            hoverstyles={hoverStyles.cancel}
            border="rgb(229, 57, 53)" 
            color="rgb(229, 57, 53)"
            text="clear" 
            type="reset"> Cancel
          </BotonesLinks>
        </ContenedorBotones>
      </Form>
    </MainContainer>
  )
}

export default Delete

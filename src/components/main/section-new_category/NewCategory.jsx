import { Input, ContenedorFormulario, Title, Form, ContainerInputs, InputErrors, InputColor, ContenedorBotones, Botones,Table, TableTD, TableTR, TableTH, InputTextarea } from "../../../styleComponents";
import {  useForm } from "react-hook-form";
import { useEquipmentCategory } from "../../TeamsContext";
import { useFormData } from "../../formDataContext";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";


const NewCategory = () => {

  const { register, handleSubmit, formState:{errors, isValid}, reset, setFocus} = useForm({
    value:"",
    label:"",
  })
  const [color, setColor] = useState("")
  const {formData, saveFormData} = useFormData()
  const [tableData, setTableData] = useState(formData.formData);
  const {categoryList, saveEquipmentCategory} = useEquipmentCategory()
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
  useEffect(() => {
    setFocus("value")
  },[setFocus])
  function handleColor(event){
    setColor(event.target.value)
  }
  //CodeSecurity
  const [showCodeWindow, setShowCodeWindow] = useState(false); // estado de la ventana del codeSecurity
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
    const codeFormData = formData.formData.map((item,i) => item.securityCode[i] === codeSecurityValue)
    if(!codeFormData){
      console.log("false")
    }
    setCodeSecurity(codeSecurityValue)
  }
  // boton que confirma si el id es el mismo del boton
  const [intentos, setIntentos] = useState(3);
  function confirmRemove(id) {
    // Verificar si el código de seguridad es correcto aquí antes de eliminar
    const codeFormData = Object.values(formData.formData).some(item => item.securityCode === codeSecurity && item.id === id)
    let intetoscode = 1
    if (codeFormData) {
      // Eliminar el elemento de tableData y actualizar formData
      const updatedTableData = tableData.filter((item) => item.id !== selectedIdCode);
      setTableData(updatedTableData);
      saveFormData({ formData: updatedTableData });
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
  const [openEditEvent, setOpenEditEvent] = useState(null);
  return (
    <ContenedorFormulario>
      <Title>New Category</Title>
      <Form width="70%" onSubmit={handleSubmit((data) =>{
        if(isValid){
          const newCategory = {
            ...data,
            id:nanoid()
          }
          const currenEquipmentCategory = categoryList || [];
          const newEquipmentCategory = [...currenEquipmentCategory, newCategory]
          saveEquipmentCategory(newEquipmentCategory)
          reset()
        }
      })}>
        <ContainerInputs>
          <Input
            type="text" 
            {...register("value",{
              required: "Este campo es requerido",
              minLength: {
                value: 1,
                message: "Minimo un caracter en el campo de titulo"
              }
            })}
            placeholder="title new category" />
          {errors.newCategory && <InputErrors>{errors.newCategory?.message}</InputErrors>}

          <InputColor
            type="color"
            width="100%"
            height="50px"
            {...register("color",{
              required:"Escoje un color",
            })}
            onChange={handleColor} 
            value={color} />
          {errors.color && <InputErrors>{errors.color?.message}</InputErrors>}

          <ContenedorBotones>
            <Botones
              hoverstyles={hoverStyles.verde}
              border="rgb(0, 200, 111)" 
              color="rgb(0, 200, 111)"
              text="save" 
              type="submit">
              Save
            </Botones>
            <Botones
              hoverstyles={hoverStyles.rojo}
              border="rgb(229, 57, 53)" 
              color="rgb(229, 57, 53)"
              text="clear" 
              type="reset">
              Clear
            </Botones>
          </ContenedorBotones>
        </ContainerInputs>
      </Form>

      <Table width="70%">
        <thead>
          <TableTR>
            <TableTH width="20%">Category</TableTH>
            <TableTH width="60%">Comments</TableTH>
            <TableTH width="10%">Edit</TableTH>
            <TableTH width="10%">Remove</TableTH>
          </TableTR>
        </thead>
          {formData.formData.map((item,i) => {
            return(
              <tbody key={i}>
                <TableTR key={`table-of-content-${i}`}>
                  
                  <TableTD>
                    {item.category}
                  </TableTD>

                  <TableTD
                    maxHeight="100px"
                    overflowY="scroll"
                    overflowX="hidden">{item.comments}</TableTD>
                  <TableTD >
                    <Botones
                      hoverstyles={hoverStyles.amarillo}
                      onClick={() => {
                        handleDetails(item.id);
                        if (openEditEvent === item.id) {
                          setOpenEditEvent(null); // Cierra el evento "Edit" si ya estaba abierto
                        } else {
                          setOpenEditEvent(item.id);
                          setOpenRemoveEvent(null); // Cierra el evento "Remove" si está abierto
                        }
                      }}
                      color="rgb(255, 186, 5)"
                      border="rgb(255, 186, 5)">
                      Edit
                    </Botones>
                  </TableTD>

                  <TableTD >
                    <Botones
                      hoverstyles={hoverStyles.rojo}
                      onClick={() => {
                        if (openRemoveEvent === item.id) {
                          setOpenRemoveEvent(null); // Cierra el evento "Remove" si ya estaba abierto
                        } else {
                          handleCodeSecurity(item.id);
                          setOpenRemoveEvent(item.id);
                          setOpenEditEvent(null); // Cierra el evento "Edit" si está abierto
                        }
                      }}
                      width="100%"
                      color="rgb(229, 57, 53)"
                      border="rgb(229, 57, 53)">
                      Remove
                    </Botones>
                  </TableTD>

                </TableTR>
                {selectedIdCode === item.id && openRemoveEvent === item.id 
                ?(
                  showCodeWindow 
                  ?(
                    <>
                      <TableTH>
                        Ingresa el codigo de seguridad
                      </TableTH>
                      <TableTD>
                        <p>Tienes {intentos} intentos</p>
                        <Input
                          name="codeSecurity" 
                          value={codeSecurity} 
                          placeholder="Enter code security"
                          onChange={inputCodeSecurity} />
                      </TableTD>
                      <TableTD>
                        <Botones
                          hoverstyles={hoverStyles.enter}
                          onClick={() => confirmRemove(item.id)} 
                          width="100%"
                          color="rgb(0, 200, 111)"
                          border="rgb(0, 200, 111)">
                            Enter
                        </Botones>
                      </TableTD>
                      <TableTD>
                        <Botones
                          hoverstyles={hoverStyles.cancel}
                          onClick={closeCodeWindow} 
                          width="100%"
                          color="rgb(229, 57, 53)"
                          border="rgb(229, 57, 53)">
                            Cancel
                        </Botones>
                      </TableTD>
                    </>
                  ): null
                ):null}
              </tbody>
          )})}
      </Table>
    </ContenedorFormulario>
  )
}

export default NewCategory

import { Input, ContenedorFormulario, Title, Form, ContainerInputs, InputErrors, InputColor, ContenedorBotones, Botones,Table, TableTD, TableTR, TableTH, BotonesLinks } from "../../../styleComponents";
import CategoryDetails from "./CategoryDetails";
import {  useForm } from "react-hook-form";
import { useEquipmentCategory } from "../../TeamsContext";
import { useFormData } from "../../formDataContext";
import { useState } from "react";
import { nanoid } from "nanoid";

const NewCategory = () => {

  const { register, handleSubmit, formState:{errors, isValid}, reset} = useForm({
    value:"",
    label:"",
  })

  const [color, setColor] = useState("")
  const {formData, saveFormData} = useFormData()
  // const [showCategoryDetails, setShowCategoryDetails] = useState(false)
  const [tableData, setTableData] = useState(formData.formData);
  const {categoryList, saveEquipmentCategory} = useEquipmentCategory()
  const hoverStyles = {
    save: {
      backgroundColor: "rgba(0, 200, 111, 0.698)",
    },
    clear: {
      backgroundColor: "rgba(229, 57, 53, 0.7)",
    },
    new_category: {
      backgroundColor: "rgba(42, 122, 228, 0.7)",
    },
    enter: {
      backgroundColor: "rgba(0, 200, 111, 0.698)",
    },
    cancel: {
      backgroundColor: "rgba(229, 57, 53, 0.7)",
    },
  };

  const [codeSecurity, setCodeSecurity] = useState("")
  const [codeWindow, setCodeWindow] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  function openCodeWindow() {
    setCodeWindow(true);
  }
  function closeCodeWindow(){
    setCodeWindow(false);
  }
  
  function handlerCodeSecurity(e){
    const codeSecurity = e.target.value
    const codeMatch = formData.formData.map((item,i) => item.securityCode[i] === codeSecurity)
    console.log(codeMatch)
    if(!codeMatch){
      alert("El codigo de seguridad no coincide")
    }
    setCodeSecurity(codeSecurity)
  }

  const handleRemove = (id) => {
    setSelectedItemId(id)
    openCodeWindow()
  }
  
  const confirmRemove = () => {
    // Verificar si el código de seguridad es correcto aquí antes de eliminar
    const codeMatch = Object.values(formData.formData).some((item) => item.securityCode === codeSecurity);
  
    if (codeMatch) {
      // Eliminar el elemento de tableData y actualizar formData
      const updatedTableData = tableData.filter((item) => item.id !== selectedItemId);
      setTableData(updatedTableData);
      saveFormData({ formData: updatedTableData });
    } else {
      alert("El código de seguridad no coincide.");
    }
  
    closeCodeWindow();
  };

  function handleColor(event){
    setColor(event.target.value)
  }


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
              hoverstyles={hoverStyles.save}
              border="rgb(0, 200, 111)" 
              color="rgb(0, 200, 111)"
              text="save" 
              type="submit">
              Save
            </Botones>
            <Botones
              hoverstyles={hoverStyles.clear}
              border="rgb(229, 57, 53)" 
              color="rgb(229, 57, 53)"
              text="clear" 
              type="reset">
              Clear
            </Botones>
          </ContenedorBotones>
        </ContainerInputs>
      </Form>

      <Table>
        <thead>
          <TableTR>
            <TableTH width="20%">Category</TableTH>
            <TableTH width="60%">Comments</TableTH>
            <TableTH width="10%">Edit</TableTH>
            <TableTH width="10%">Remove</TableTH>
          </TableTR>
        </thead>
        <tbody>
          {formData.formData.map((item,i) => {
            return(
              <>
                <TableTR key={`table-of-content-${i}`}>
                  <TableTD>{item.category}</TableTD>
                  <TableTD
                    maxHeight="100px"
                    overflowY="scroll"
                    overflowX0="hidden">{item.comments}</TableTD>
                  <TableTD >
                    <BotonesLinks
                      // to="/category-details"
                      color="rgb(255, 186, 5)"
                      border="rgb(255, 186, 5)">Edit
                    </BotonesLinks>
                  </TableTD>
                  <TableTD >
                    <Botones
                      onClick={() => handleRemove(item.id)}
                      width="100%"
                      color="rgb(229, 57, 53)"
                      border="rgb(229, 57, 53)">Remover
                    </Botones>
                  </TableTD>
                </TableTR>
                {selectedItemId === item.id && codeWindow && (
                  <>
                    <TableTD>
                      <p>Ingresa el codigo de seguridad</p>
                    </TableTD>
                    <TableTD>
                      <Input
                        name="codeSecurity" 
                        value={codeSecurity} 
                        placeholder="Enter code security"
                        onChange={handlerCodeSecurity} />
                    </TableTD>
                    <TableTD>
                      <Botones
                        hoverstyles={hoverStyles.enter}
                        onClick={confirmRemove} 
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
                  </>)}
              </>
            )})}
        </tbody>
      </Table>
    </ContenedorFormulario>
  )
}

export default NewCategory

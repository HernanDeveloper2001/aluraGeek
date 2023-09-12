import { Input, ContenedorFormulario, Title, Form, ContainerInputs, InputErrors, InputColor, ContenedorBotones, Botones,Table, TableTD, TableTR, TableTH } from "../../../styleComponents"
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { FormDataContext } from "../../formDataContext";
import { useEquipmentCategory } from "../../TeamsContext";
import { useContext, useState } from "react"

const NewCategory = () => {
  const { register, handleSubmit, formState:{errors, isValid}, reset} = useForm({
    defaultValues:{
      id:v4(),
      value:"",
      label:"",
    }
  })

  function handleDeleteCategory(event){
    const deleteCagorie = formDataNewVideo.formData.formData.filter(item => {
      if(item.id === event.target.id){
        console.log(item.id)
      }
    })
  }

  const formDataNewVideo = useContext(FormDataContext)

  const hoverStyles = {
    save: {
      backgroundColor: "rgba(0, 200, 111, 0.698)",
      border: "rgb(0, 200, 111)"
    },
    clear: {
      backgroundColor: "rgba(229, 57, 53, 0.7)",
      border: "rgb(229, 57, 53)"
    },
    new_category: {
      backgroundColor: "rgba(42, 122, 228, 0.7)",
      border: "rgb(42, 122, 228)"
    }
  };
  const {categoryList, saveEquipmentCategory} = useEquipmentCategory()

  const [color, setColor] = useState("")
  function handleColor(event){
    setColor(event.target.value)
  }

  return (
    <ContenedorFormulario>
      <Title>New Category</Title>
      <Form width="70%" onSubmit={handleSubmit((data) =>{
        if(isValid){
          const currenEquipmentCategory = categoryList || [];
          const newEquipmentCategory = [...currenEquipmentCategory, data]
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
          {errors.value && <InputErrors>{errors.value?.message}</InputErrors>}

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
              hoverStyle={hoverStyles.save}
              border="rgb(0, 200, 111)" 
              color="rgb(0, 200, 111)"
              text="save" 
              type="submit">
              Save
            </Botones>
            <Botones
              hoverStyle={hoverStyles.clear}
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
          {formDataNewVideo.formData.formData.map((item) => {
            return(
              <TableTR key={item.id}>
                <TableTD>{item.category}</TableTD>
                <TableTD>{item.comments}</TableTD>
                <TableTD >
                  <Botones
                    id={item.id}
                    width="100%"
                    color="rgb(255, 186, 5)"
                    border="rgb(255, 186, 5)">Edit
                  </Botones>
                </TableTD>
                <TableTD >
                  <Botones
                    onClick={handleDeleteCategory}
                    id={item.id}
                    width="100%"
                    color="rgb(229, 57, 53)"
                    border="rgb(229, 57, 53)">Remover
                  </Botones>
                </TableTD>
              </TableTR>
            )
          })}
        </tbody>
      </Table>
    </ContenedorFormulario>
  )
}

export default NewCategory

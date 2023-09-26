import { Input, MainContainer, Title, Form, InputErrors, InputColor, ContenedorBotones, Botones,Table, TableTD, TableTR, TableTH, DivTd, BotonesLinks } from "../../../styleComponents";
import {  useForm } from "react-hook-form";
import { useEquipmentCategory } from "../../TeamsContext";
import { useFormData } from "../../formDataContext";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";


const NewCategory = () => {

  const { register, handleSubmit, formState:{errors, isValid}, reset, setFocus} = useForm()
  const [color, setColor] = useState("")
  const {formData, saveFormData} = useFormData()
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

  return (
    <MainContainer >
      <Title>New Category</Title>

      <Form onSubmit={handleSubmit((data) =>{
        if(isValid){
          const newCategoryData = {
            ...data,
            id:nanoid()
          }
          const currenEquipmentCategory = categoryList || [];
          const newEquipmentCategory = [...currenEquipmentCategory, newCategoryData]
          saveEquipmentCategory(newEquipmentCategory)
          reset()
        }
      })}>
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
            {...register("color",{
              required:"Escoje un color",
              message:"Escoje un color",
            })}
            onChange={handleColor} />
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

      </Form>
      
      <Table>
        <thead>
          <TableTR>
            <TableTH >Category</TableTH>
            <TableTH >Title</TableTH>
            <TableTH >Comments</TableTH>
            <TableTH >Edit</TableTH>
            <TableTH >Remove</TableTH>
          </TableTR>
        </thead>
          {formData.map((item,i) => {
            return(
              <tbody key={i}>
                <TableTR key={`table-of-content-${i}`}>

                  <TableTD>
                    <DivTd>
                      {item.category}
                    </DivTd>
                  </TableTD>

                  <TableTD>
                    <DivTd>
                      {item.title}
                    </DivTd>
                  </TableTD>

                  <TableTD>
                    <DivTd>
                      {item.comments}
                    </DivTd>
                  </TableTD>

                  <TableTD >
                    <BotonesLinks
                      to="/details" 
                      state={{
                        title:item.title,
                        comments:item.comments,
                        securityCode:item.securityCode,
                        category:item.category,
                        id:item.id,
                        video:item.video,
                        image:item.image
                      }}
                      hoverstyles={hoverStyles.amarillo}
                      width="100%"
                      color="rgb(255, 186, 5)"
                      border="rgb(255, 186, 5)">
                      Edit
                    </BotonesLinks>
                  </TableTD>

                  <TableTD >
                    <BotonesLinks
                      to="/delete"
                      state={{
                        title:item.title,
                        comments:item.comments,
                        securityCode:item.securityCode,
                        category:item.category,
                        id:item.id,
                        video:item.video,
                        image:item.image
                      }}
                      hoverstyles={hoverStyles.rojo}
                      width="100%"
                      color="rgb(229, 57, 53)"
                      border="rgb(229, 57, 53)">
                      Remove
                    </BotonesLinks>
                  </TableTD>

                </TableTR>
              </tbody>
          )})}
      </Table>
    </MainContainer>
  )
}

export default NewCategory

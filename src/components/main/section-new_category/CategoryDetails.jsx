import { Input, ContenedorFormulario, Form, ContainerInputs, InputErrors, Title, InputColor, ContenedorBotones, Botones, BotonesLinks, InputTextarea, InputSelect } from "../../../styleComponents"
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const CategoryDetails = () => {
  const { register, handleSubmit, formState:{errors, isValid}, reset, control} = useForm({
    defaultValues:{
      id:uuidv4(),
      value:"",
      label:"",
    }
  })
  const [color, setColor] = useState("")
  const hoverStyles = {
    save: {
      backgroundColor: "rgba(0, 200, 111, 0.698)",
    },
    cancel: {
      backgroundColor: "rgba(229, 57, 53, 0.7)",
    },
  };



  function handleColor(event){
    setColor(event.target.value)
  }
  return (
      <ContenedorFormulario>
      <Title>Category details</Title>
      <Form width="70%" onSubmit={handleSubmit((data) =>{
        if(isValid){
          console.log(data)
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

          <InputTextarea
              {...register("comments",{
                  required: "Este campo es requerido",
                  minLength: {
                    value: 1,
                    message: "Minimo un caracter en el campo de comments",
                  }
                })}
                placeholder="add a comments" />
          {errors.comments && <InputErrors>{errors.comments?.message}</InputErrors>}
          <Controller
            control={control}
            name="category"
            rules={{
                required: "Este campo es requerido"
            }}
            render={({ field: {onChange, onblur, value, name ,ref }}) => {
              return <InputSelect
                name={name}
                ref={ref}
                onBlur={onblur}
                defaultValue={value }
                onChange={({value}) =>{
                    onChange(value)
                }}
                placeholder="Choose an option"
                options="hola"
                getOptionLabel={e => e.value} />
            }} />
          {errors.category && <InputErrors>{errors.category?.message}</InputErrors>}

          <ContenedorBotones>
            <Botones
              hoverstyles={hoverStyles.save}
              border="rgb(0, 200, 111)" 
              color="rgb(0, 200, 111)"
              text="save" 
              type="submit">
              Save
            </Botones>
            <BotonesLinks
              to="/new-category"
              hoverstyles={hoverStyles.cancel}
              border="rgb(229, 57, 53)" 
              color="rgb(229, 57, 53)"
              text="clear" >
              Cancel
            </BotonesLinks>
          </ContenedorBotones>

        </ContainerInputs>
      </Form>
    </ContenedorFormulario>
  )
}

export default CategoryDetails

import { useLocation } from "react-router-dom"
import { Input, ContenedorFormulario, Form, ContainerInputs, InputErrors, ContenedorBotones, Botones,InputTextarea, BotonesLinks, InputSelect} from "../../../styleComponents";
import { useFormData } from "../../formDataContext";
import { useEquipmentCategory } from "../../TeamsContext";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Details = () => {
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
  const locationData = useLocation()
  const { 
    id, 
    title, 
    comments,
    category,
    image, 
    video 
  } = locationData.state;


  const {formData, saveFormData} = useFormData()
  const {categoryList} = useEquipmentCategory()
  let {register,handleSubmit,formState:{errors, isValid}, control} = useForm()

  const [idCategoryDetails, setIdCategoryDetails] = useState({
    id:nanoid(),
    category:category,
    title: title,
    video: video,
    image: image,
    comments: comments,
  })

  function handlerUpdateData(target) {
    // registerUpdateData
    const { name, value } = target;
    // Actualiza los datos en idCategoryDetails
    // if(name === "category") {
    //   setSelectedCategory(value);
    // }else {
    // }
    setIdCategoryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  return (
    <ContenedorFormulario>
      <Form onSubmit={handleSubmit(data => {
        const indiceItem = formData.findIndex((item) => item.id === id);
        if(isValid){
          if (indiceItem !== -1) {
            const formDataActualizada = [...formData];
            formDataActualizada[indiceItem] = idCategoryDetails;
            console.log(formDataActualizada )        
            // saveFormData(formDataActualizada);
          }
        }

      })}>
        <ContainerInputs>

          <Input
            {...register("title",{
              required: "El campo no puede estar vacio",
              minLength:{
                value: 5,
                message: "El campo debe tener como minimo 10 caracteres"
              }
            })}
            type="text" 
            name="title"
            placeholder="title" 
            defaultValue={title}
            onChange={(e) => handlerUpdateData(e.target)}
          />
          {errors.title && <InputErrors>{errors.title?.message}</InputErrors>}
                       
          <Input 
            {...register("video",{
              required: "El campo no puede estar vacio",
              minLength:{
                value: 1,
                message: "El campo debe tener como minimo 10 caracteres"
              }
            })}
            type="text"
            name="video"
            placeholder="Link video" 
            defaultValue={video}
            onChange={(e) => handlerUpdateData(e.target)}
          />
          {errors.video && <InputErrors>{errors.video?.message}</InputErrors>}
                            

          <Input 
            {...register("image",{
              required: "El campo no puede estar vacio",
              minLength:{
                value: 1,
                message: "El campo debe tener como minimo 10 caracteres"
              }
            })}
            type="text"
            name="image"
            placeholder="Link image" 
            defaultValue={image}
            onChange={(e) => handlerUpdateData(e.target)}
          />
          {errors.image && <InputErrors>{errors.image?.message}</InputErrors>}

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
                defaultValue={value}
                onChange={({value}) =>{
                  onChange(value)
                  handlerUpdateData(value)
                }}
                placeholder="Choose an option"
                options={categoryList}
                getOptionLabel={e => e.value}           
              />
            }} />
          {errors.category && <InputErrors>{errors.category?.message}</InputErrors>}
                            

          <InputTextarea
            {...register("comments",{
              required: "El campo no puede estar vacio",
              minLength:{
                value: 1,
                message: "El campo debe tener como minimo 10 caracteres"
              }
            })}
            type="text"
            name="comments"
            placeholder="add a comments" 
            defaultValue={comments}
            onChange={(e) => handlerUpdateData(e.target)} 
          />
          {errors.comments && <InputErrors>{errors.comments?.message}</InputErrors>}
                            
          <ContenedorBotones>
            <Botones
              type="submit"
              hoverstyles={hoverStyles.enter}
              border="rgb(0, 200, 111)" 
              color="rgb(0, 200, 111)"
              text="save"> enter
            </Botones>

            <BotonesLinks
              to="/new-category"
              hoverstyles={hoverStyles.cancel}
              border="rgb(229, 57, 53)" 
              color="rgb(229, 57, 53)"
              text="clear" 
              type="reset"> Cancel
            </BotonesLinks>
          </ContenedorBotones>

        </ContainerInputs>
    
      </Form>
    </ContenedorFormulario>
  )
}

export default Details
import { useLocation, useNavigate } from "react-router-dom"
import { Input, MainContainer, Form, InputErrors, ContenedorBotones,Title, Botones,InputTextarea, BotonesLinks, InputSelect, ContainerInputs, Label} from "../../../styleComponents";
import { useFormData } from "../../formDataContext";
import { useEquipmentCategory } from "../../TeamsContext";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

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

  const navigateHome = useNavigate()
  const {formData, saveFormData} = useFormData()
  const {categoryList} = useEquipmentCategory()
  let {register,handleSubmit,formState:{errors, isValid}, control, setValue} = useForm()

  const [idCategoryDetails, setIdCategoryDetails] = useState({
    id:id,
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

  const updateFormFields = (updatedData) => {
    // Update the form data state
    const updatedFormData = formData.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );

    // Update form fields using setValue
    setValue("title", updatedData.title);
    setValue("video", updatedData.video);
    setValue("image", updatedData.image);
    setValue("category", updatedData.category);
    setValue("comments", updatedData.comments);

    // Save the updated form data
    navigateHome("/", {replace:true})
    saveFormData(updatedFormData);
  };

  return (
    <MainContainer>
      <Title>Update details</Title>
      <Form onSubmit={handleSubmit(data => {   
        if(isValid){
          updateFormFields(data)
        }
      })}>

        <ContainerInputs>
          <Label>Title</Label>
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
            onChange={(e) => handlerUpdateData(e.target)} />
        </ContainerInputs>
        {errors.title && <InputErrors>{errors.title?.message}</InputErrors>}

        <ContainerInputs>
          <Label>Video</Label>
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
            onChange={(e) => handlerUpdateData(e.target)} />
        </ContainerInputs>          
        {errors.video && <InputErrors>{errors.video?.message}</InputErrors>}

        <ContainerInputs>
          <Label>Image</Label>
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
            onChange={(e) => handlerUpdateData(e.target)} />
        </ContainerInputs>           
        {errors.image && <InputErrors>{errors.image?.message}</InputErrors>}

        <ContainerInputs>
          <Label>Category</Label>
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
        </ContainerInputs>
        {errors.category && <InputErrors>{errors.category?.message}</InputErrors>}
                              
        <ContainerInputs>
          <Label>Comments</Label>
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
            onChange={(e) => handlerUpdateData(e.target)} />
        </ContainerInputs>
        {errors.comments && <InputErrors>{errors.comments?.message}</InputErrors>}
                              
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

export default Details

import { ContenedorFormulario,Title,Form,ContainerInputs,Input,InputErrors,InputTextarea,InputSelect, ContenedorBotones, Botones, BotonesLinks } from "../../../styleComponents";
import { useForm, Controller } from "react-hook-form"
import { useEquipmentCategory } from "../../TeamsContext";
import { useFormData } from "../../formDataContext";
import { nanoid } from "nanoid";



const NuevoVideo = () => {
  let { register, handleSubmit, formState:{errors, isValid}, control, reset} = useForm()
  const {categoryList} = useEquipmentCategory()
  const { formData, saveFormData } = useFormData() 
  const hoverStyles = {
    save: {
      backgroundColor: "rgba(0, 200, 111, 0.7)",
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
  
  return(
    <ContenedorFormulario>

      <Title>New video</Title>

        <Form encType="multipart/form-data" onSubmit={handleSubmit((data) => {
          if(isValid){
            const imageFile = data.image[0]; // Accede al archivo seleccionado
            const imageName = imageFile.name; // Obtiene el nombre del archivo
            const videoFile = data.video[0];
            const videoName = videoFile.name;
            const newFormData = {
              ...data,
              id: nanoid(),
              title: data.title,
              video: videoName,
              image: imageName, // Agrega el nombre del archivo
              category: data.category,
              comments: data.comments,
              securityCode: data.securityCode,
            }
            const currentData = formData || [];
            const newData = [...currentData, newFormData]
            saveFormData(newData);
            reset()
          }
        })}>
          <ContainerInputs>

            <Input
              type="text" 
              {...register("title",{
                required: "Este campo es requerido",
                minLength: {
                  value: 1,
                  message: "Minimo un caracter en el campo de titulo"
                }
              })}
              placeholder="title" />
            {errors.title && <InputErrors>{errors.title?.message}</InputErrors>}

            <Input 
              type="file"
              name="video"
              id="video"
              accept="video/*"
              {...register("video",{
                required: "Este campo es requerido",
              })} />
            {errors.video && <InputErrors>{errors.video?.message}</InputErrors>}

            <Input 
              type="file"
              name="image"
              id="image"
              {...register("image",{
                required: "Ingresa una imagen "
              })}
              accept="image/*" />
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
                  defaultValue={value }
                  onChange={({value}) =>{
                    onChange(value)
                  }}
                  placeholder="Choose an option"
                  options={categoryList}
                  getOptionLabel={e => e.value}           
                />
              }} />
            {errors.category && <InputErrors>{errors.category?.message}</InputErrors>}

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

            <Input
              type="text"
                {...register("securityCode",{
                  required: "Este campo es requerido",
                  minLength: {
                    value: 1,
                    message: "Minimo un caracter en el campo de securityCode",
                  },
                  maxLength: {
                    value: 8,
                    message: "Maximo solo 8 caracteres en el campo de securityCode"
                  }
                })} 
                placeholder="Enter a security Code (xxxxxxxx)" />
            {errors.securityCode && <InputErrors>{errors.securityCode?.message}</InputErrors>}

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
                <BotonesLinks
                  to="/new-category"
                  hoverstyles={hoverStyles.new_category}
                  border="rgb(42, 122, 228)"
                  color="rgb(42, 122, 228)"
                  text="new category">
                  New Category
                </BotonesLinks>
            </ContenedorBotones>

          </ContainerInputs>

        </Form>

    </ContenedorFormulario>
  );
}

export default NuevoVideo
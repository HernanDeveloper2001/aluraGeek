import { useEffect, useState } from "react";
import { FormularioValidacion } from "./validacion.formulario"
import { ContenedorFormulario,Title,Form,ContainerInputs,Input,InputErrors,MensajeRegistro, Botones, ContenedorBotones } from "../../../styleComponents";


const LoginForm = () => {
  const { register, handleSubmit, formState:{errors, isValid}, setFocus } = FormularioValidacion()

  const [validation, setValidation] = useState({
    valid: {
      color: "",
      value: ""
    },
    invalid: {
      color: "",
      value: ""
    }
  })
  
  useEffect(() => {
    setFocus("nombre")
  },[setFocus])

  const onHandleValid = () => {
    if(isValid){
      setValidation({
        ...validation,
        valid: {
          ...validation.valid,
          color:"rgba(0,255,0,80%)",
          value:"Tús datos son correctos",
        }
      })
    }else{
      setValidation({
        ...validation,
        invalid: {
          ...validation.valid,
          color: "rgba(255,0,0,80%)",
          value: "Tús datos son incorrectos"
        }
      })
    }
  }

  return (
    <ContenedorFormulario>
      <Title>Formulario</Title>
      <Form onSubmit={handleSubmit((data) => {
        if(isValid){
          console.log(data)
        }
      })}>
          <ContainerInputs>
            <Input
              type="text"  
              placeholder="Ingresa nombre"
              {...register("nombre",
              {required: "Este campo es requerido",
              minLength:{
                value: 3,
                message: "Minimo 3 caracter"
              },
              maxLength:{
                value: 50,
                message:"Maximo 50 caracteres"
              }
              })}
            />
            {errors.nombre && <InputErrors>{errors.nombre?.message}</InputErrors>}

            <Input 
              type="email" 
              placeholder="Ingresa correo"
              {...register("correo",
              {required:"Este campo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Por favor ingresa un correo valido"
              }})}
            />
            {errors.correo && <InputErrors>{errors.correo?.message}</InputErrors>}

            <Input 
              type="password" 
              placeholder="Ingresa contraseña"
              {...register("contraseña", 
              {required:"Este campo es requerido", 
              minLength: {
                value: 8,
                message: "Minimo 8 caracteres "
                }, 
              maxLength: {
                value: 20,
                message: "Maximo 20 caracteres "
              }})}
            />
            <InputErrors>{errors.contraseña?.message}</InputErrors>

            <ContenedorBotones>
              <Botones
                border="rgb(42, 122, 228)"
                color="rgb(42, 122, 228)"
                onClick={onHandleValid}
                type="submit"
              >Registrar
              </Botones>
            </ContenedorBotones>
            
            {isValid === false 
            ? <MensajeRegistro style={{color:validation.invalid.color}}>{validation.invalid.value}</MensajeRegistro>
            : <MensajeRegistro style={{color:validation.valid.color}}>{validation.valid.value}</MensajeRegistro>}
          </ContainerInputs>
      </Form>
    </ContenedorFormulario> 
  )
}

export default LoginForm;



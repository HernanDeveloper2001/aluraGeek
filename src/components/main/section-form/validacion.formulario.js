import {useForm} from "react-hook-form"

export function FormularioValidacion(){
    // const [formulario, setFormulario] = useState(formularioInicial);
    const { register, handleSubmit, formState: {errors, isValid}, setFocus  } = useForm({
        defaultValues: {
            nombre: "",
            correo: "",
            contraseña: ""
        }
    });

    return {
        register,
        handleSubmit,
        formState:{errors, isValid},
        setFocus
    }

}
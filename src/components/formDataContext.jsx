import { createContext, useContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';


export const FormDataContext = createContext([]);

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {

  const initialFormData = [{
    id:nanoid(),
    title:"Don quijote",
    video: "No hayddasdasdasd",
    image: `https://th.bing.com/th/id/R.ac0f63765c6f66dbd8a62371ec780ed8?rik=tRbRDKxKiG2%2bsQ&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1969482%2foriginal.jpg&ehk=VIhPLjUHV0UfXbXjO8KsU1OQb5I2iZzdEFBBIDRH5OM%3d&risl=1&pid=ImgRaw&r=0`,
    category:"libros",
    comments: `es una novela escrita por el español Miguel de Cervantes Saavedra. Publicada su primera parte con el título de El ingenioso hidalgo don Quijote de la Mancha a comienzos de 1605, es la obra más destacada de la literatura española y una de las principales de la literatura universal. ​En 1615 apareció su continuación con el título de Segunda parte del ingenioso caballero don Quijote de la Mancha. El Quijote de 1605 se publicó dividido en cuatro partes; pero al aparecer el Quijote de 1615 en calidad de Segunda parte de la obra, quedó revocada de hecho la partición en cuatro secciones del volumen publicado diez años antes por Cervantes.

    Es la primera obra genuinamente desmitificadora de la tradición caballeresca y cortés por su tratamiento burlesco. Representa la primera novela moderna y la primera novela polifónica; como tal, ejerció un enorme influjo en toda la narrativa europea. Por considerarse «el mejor trabajo literario jamás escrito», encabezó la lista de las mejores obras literarias de la historia, que se estableció con las votaciones de cien grandes escritores de 54 nacionalidades a petición del Club Noruego del Libro y Bokklubben World Library en 2002; así, fue la única excepción en el estricto orden alfabético que se había dispuesto.`,
    securityCode:"quijote",
  },
  {
    id:nanoid(),
    title:"musica vieja",
    video: "No hay",
    image: `es una novela escrita por el español Miguel de Cervantes Saavedra. Publicada su primera parte con el título de El ingenioso hidalgo don Quijote de la Mancha a comienzos de 1605, es la obra más destacada de la literatura española y una de las principales de la literatura universal. ​En 1615 apareció su continuación con el título de Segunda parte del ingenioso caballero don Quijote de la Mancha. El Quijote de 1605 se publicó dividido en cuatro partes; pero al aparecer el Quijote de 1615 en calidad de Segunda parte de la obra, quedó revocada de hecho la partición en cuatro secciones del volumen publicado diez años antes por Cervantes.

    Es la primera obra genuinamente desmitificadora de la tradición caballeresca y cortés por su tratamiento burlesco. Representa la primera novela moderna y la primera novela polifónica; como tal, ejerció un enorme influjo en toda la narrativa europea. Por considerarse «el mejor trabajo literario jamás escrito», encabezó la lista de las mejores obras literarias de la historia, que se estableció con las votaciones de cien grandes escritores de 54 nacionalidades a petición del Club Noruego del Libro y Bokklubben World Library en 2002; así, fue la única excepción en el estricto orden alfabético que se había dispuesto.`,
    category:"music",
    comments: "musica vieja",
    securityCode:"123",
  },
  {
    id:nanoid(),
    title:"Don quijote",
    video: "No hay",
    image: "no hay",
    category:"music",
    comments: "libro",
    securityCode:"123",
  },
  {
    id:nanoid(),
    title:"Don quijote",
    video: "No hay",
    image: "no hay",
    category:"music",
    comments: "libro",
    securityCode:"123",
  }
]

  const [formData, setFormData] = useState(() => {

    const localStorageData = localStorage.getItem("formData");
    if(localStorageData) {
      const mergedData = [...JSON.parse(localStorageData)]
      return mergedData
    } else {
      return initialFormData
    }
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  },[formData])

  const saveFormData = (data) => {
    setFormData(data);
  };

  return (
    <FormDataContext.Provider value={{ formData, saveFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
import { createContext, useContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';


export const FormDataContext = createContext([]);

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {

  const initialFormData = [
    {
    id:nanoid(),
    title:"Don quijote",
    video: "No hay",
    image: `https://th.bing.com/th/id/R.ac0f63765c6f66dbd8a62371ec780ed8?rik=tRbRDKxKiG2%2bsQ&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1969482%2foriginal.jpg&ehk=VIhPLjUHV0UfXbXjO8KsU1OQb5I2iZzdEFBBIDRH5OM%3d&risl=1&pid=ImgRaw&r=0`,
    category:"libros",
    comments: `es una novela escrita por el español Miguel de Cervantes Saavedra. Publicada su primera parte con el título de El ingenioso hidalgo don Quijote de la Mancha a comienzos de 1605, es la obra más destacada de la literatura española y una de las principales de la literatura universal. ​En 1615 apareció su continuación con el título de Segunda parte del ingenioso caballero don Quijote de la Mancha. El Quijote de 1605 se publicó dividido en cuatro partes; pero al aparecer el Quijote de 1615 en calidad de Segunda parte de la obra, quedó revocada de hecho la partición en cuatro secciones del volumen publicado diez años antes por Cervantes.

    Es la primera obra genuinamente desmitificadora de la tradición caballeresca y cortés por su tratamiento burlesco. Representa la primera novela moderna y la primera novela polifónica; como tal, ejerció un enorme influjo en toda la narrativa europea. Por considerarse «el mejor trabajo literario jamás escrito», encabezó la lista de las mejores obras literarias de la historia, que se estableció con las votaciones de cien grandes escritores de 54 nacionalidades a petición del Club Noruego del Libro y Bokklubben World Library en 2002; así, fue la única excepción en el estricto orden alfabético que se había dispuesto.`,
    securityCode:"quijote",
    },
    {
    id:nanoid(),
    title:"SICKO MODE",
    video: "https://www.youtube.com/watch?v=6ONRf7h3Mdk",
    image:`https://th.bing.com/th/id/OIP.dvuJgiQ6BP8gGsoOEJgaAQHaEK?pid=ImgDet&rs=1`,
    category:"music",
    comments: `Lyrics:
      She's in love with who I am
      Back in high school, I used to bus it to the dance
      Now I hit the FBO with duffels in my hands (Woo)
      I did half a Xan, 13 hours 'til I land
      Had me out like a light (Like a light)
      Like a light (Like a light)
      Like a light (Like a light)
      Like a light`,
    securityCode:"sicko",
    },
    {
      id:nanoid(),
      title:"Los indestructibles",
      video: "https://repelisflis.com/peliculas/los-mercenarios/",
      image: "https://th.bing.com/th/id/R.ba0e602aabb2bc243c74d03e9f1a464b?rik=pXUyxvDv9PEc6Q&riu=http%3a%2f%2fcdn.playbuzz.com%2fcdn%2f7d409f0f-e81d-442e-ac5b-8ecb78473826%2fc2834a8d-e96e-417f-b43a-8d50465130db.jpg&ehk=QHWs5t6DwFHicQ6kTGIK7S9I9BkX1ps08cPPvyS86s8%3d&risl=&pid=ImgRaw&r=0",
      category:"movies",
      comments: "Un grupo de mercenarios es contratado para infiltrarse en un país sudamericano y derrocar a su despiadado y corrupto dictador. Una vez allí, se verán atrapados en una telaraña de engaño y traición. Una vez fracasada la misión, tendrán que enfrentarse a un reto aún más difícil; salvar la unidad del grupo y la amistad que los ha unido durante largos años.",
      securityCode:"12",
    },
    {
      id:nanoid(),
      title:"Patricio",
      video: "No hay",
      image: "https://th.bing.com/th/id/R.58dc7f0c0fda5f0a5f9ef71c02cc3afc?rik=CNxipFyYsUoaCQ&pid=ImgRaw&r=0",
      category:"gifs",
      comments: "popular serie de bob esponja",
      securityCode:"esponja",
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
import { createContext } from "react"


export const EquipmentCategoryContext = createContext([])

export const EquipmentCategoryProvider = ({children}) => {

  const categoryList =[
  {
    value:"videos",
    label:"videos",
    colorCarta:"rgb(0, 200, 111)",
    colorContenedorCarta:"rgba(0, 200, 111, 0.7)"
  },
  {
    value:"music",
    label:"music",
    colorCarta:"rgb(255, 140, 42)",
    colorContenedorCarta:"rgba(255, 140, 42, 0.7)"
  },
  {
    value:"images",
    label:"images",
    colorCarta:"rgb(255, 186, 5)",
    colorContenedorCarta:"rgba(255, 186, 5, 0.7)"
  },
  {
    value:"gifs",
    label:"gifs",
    colorCarta:"rgb(220, 110, 190)",
    colorContenedorCarta:"rgba(220, 110, 190, 0.7)"
  }]

  return(
    <>
      <EquipmentCategoryContext.Provider value={categoryList}>
        {children}
      </EquipmentCategoryContext.Provider>
    </>
  )
}
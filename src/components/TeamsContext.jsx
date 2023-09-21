import { createContext, useContext, useEffect, useState } from "react"
import { nanoid } from "nanoid"

export const EquipmentCategoryContext = createContext([])

export const useEquipmentCategory = () => {
  return useContext(EquipmentCategoryContext)
}

export const EquipmentCategoryProvider = ({children}) => {

  const initialCategory = [
    {
      id: nanoid(),
      value:"music",
      label:"music",
      color:"#2541f8",
    },
    {
      id: nanoid(),
      value:"movies",
      label:"movies",
      color:"#25a1f8",
    },
    {
      id: nanoid(),
      value:"libros",
      label:"libros",
      color:"#ff5d00",
    },
    {
      id: nanoid(),
      value:"gifs",
      label:"gifs",
      color:"#8dc1f8",
    }
  ]

  const [categoryList,setCategoryList] = useState(() => {

    const localStorageEquipmentCategory = localStorage.getItem("categoryList")
    if(localStorageEquipmentCategory){
      const mergedData = [...JSON.parse(localStorageEquipmentCategory)]
      return mergedData
    }else{
      return initialCategory
    }

  })

  useEffect(() => {
    localStorage.setItem("categoryList", JSON.stringify(categoryList))
  },[categoryList])

  const saveEquipmentCategory = data => {
    setCategoryList(data)
  }

  return(
    <>
      <EquipmentCategoryContext.Provider value={{categoryList, saveEquipmentCategory}}>
        {children}
      </EquipmentCategoryContext.Provider>
    </>
  )
}
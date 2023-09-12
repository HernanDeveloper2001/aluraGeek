import { createContext, useContext, useEffect, useState } from "react"


export const EquipmentCategoryContext = createContext([])

export const useEquipmentCategory = () => {
  return useContext(EquipmentCategoryContext)
}

export const EquipmentCategoryProvider = ({children}) => {

  const [categoryList,setCategoryList] = useState(() => {
    const localStorageEquipmentCategory = localStorage.getItem("categoryList")
    try {
      return localStorageEquipmentCategory ? JSON.parse(localStorageEquipmentCategory) : []
    }catch(error) {
      console.error("Error parsing JSON from localStorage:", error);
      return [];
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
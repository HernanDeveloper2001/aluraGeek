import styled from "styled-components";
import CategoryContent from "./CategoryContent";
import { useEquipmentCategory } from "../../TeamsContext";
import { useFormData } from "../../formDataContext";
import { InputColor,Title } from "../../../styleComponents";
import { useEffect, useState } from "react";

const MainCategory = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
;
`
const SectionCategory = styled.section`
  width: 95%;
  border-bottom: 1px solid rgba(255,255,255, 30%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const SectionCategorySubTitle = styled.h2`
  font-size: 4vw;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  text-transform: uppercase;
` 
const CategoriesSection = styled.section`
  border: 1px solid rgba(255,255,255, 30%);
  border-radius: 5px;
  margin-bottom: 40px;
  width: 100%;
`
const CategoriesVideo = styled.article`
  width: 100%;
  height: 600px;
  border: 1px solid rgba(255,255,255, 30%);
  border-radius: 5px 5px 0 0;

`
const InputVideo = styled.video`
  width:100%;
  height: 100%;
`

const Categories = () => {
  const {categoryList} = useEquipmentCategory()
  const { formData } = useFormData() 

  const [containerColor, setContainerColor] = useState(() => {
    const storedColors = JSON.parse(localStorage.getItem("containerColor")) || [];
    if(storedColors.length !== categoryList.length){
      return categoryList.map((item) => item.color)
    }
    return storedColors
  })
  useEffect(() => {
    // Cuando los colores cambian, guárdalos en el localStorage
    localStorage.setItem("containerColor", JSON.stringify(containerColor));
  }, [containerColor]);
  function handleColor(event, index) {
    const color = event.target.value;
    const updateColors = [...containerColor];
    updateColors[index] = color;
    setContainerColor(updateColors);
  }


  return (
    <MainCategory>
      <Title>Categories</Title>
      {categoryList.map((item,i) => {
        const category = item.value;
        const categoryForm = formData.formData.filter(item => item.category === category)
        return(
          <SectionCategory key={i} >
            <CategoriesSection 
              style={{background:containerColor[i]}}
              >
              <>
                <InputColor 
                  type="color" 
                  onChange={(event) => handleColor(event,i)}
                  value={containerColor[i]} />
                <SectionCategorySubTitle>{category}</SectionCategorySubTitle>
              </>
              <div style={{display:"flex"}}>
              {categoryForm.map((item,j ) => (
                <CategoryContent
                  key={j}
                  formDataNewVideo={item}
                  containerColor={containerColor}
                /> 
              ))}
              </div>
            </CategoriesSection>
          </SectionCategory>
          )})
        }
      </MainCategory>
  );
 
}
export default Categories

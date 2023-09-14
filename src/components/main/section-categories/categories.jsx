import styled from "styled-components";
import CategoryContent from "./CategoryContent";
import { useEquipmentCategory } from "../../TeamsContext";
import { useFormData } from "../../formDataContext";
import { InputColor,Title } from "../../../styleComponents";
import { useState } from "react";


const CategoryContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255, 30%);
;
`
const SectionCategorySubTitle = styled.h2`
  font-size: 4vw;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
` 
const CategoriesSection = styled.section`
  border: 1px solid rgba(255,255,255, 30%);
  border-radius: 5px;
  margin-bottom: 40px;
  width: 95%;
`
const Categories = () => {

  const {categoryList} = useEquipmentCategory()
  const { formData } = useFormData() 
  const [containerColor, setContainerColor] = useState(() => categoryList.map((item) => item.color))

  function handleColor(event, index) {
    const color = event.target.value;
    const updateColors = [...containerColor];
    updateColors[index] = color;
    setContainerColor(updateColors);
  }

  return (
    <CategoryContainer>
      <Title>Categories</Title>
      {categoryList.map((item,i) => {
        const category = item.value;
        const categoryForm = formData.formData.filter(item => item.category === category)
        return(
          <CategoriesSection key={i} style={{background:containerColor[i]}}>
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
              /> 
            ))}
            </div>
          </CategoriesSection>
        )})
      }
    </CategoryContainer>
  );
 
}
export default Categories

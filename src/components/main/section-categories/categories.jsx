import styled from "styled-components";
import CategoryContent from "./CategoryContent";
import { EquipmentCategoryContext } from "../../TeamsContext";
import { useContext } from "react";
import { FormDataContext } from "../../formDataContext";
import { InputColor,Title } from "../../../styleComponents";


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
  font-size: 40px;
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
  const equipmentCategory = useContext(EquipmentCategoryContext)
  const formDataNewVideo = useContext(FormDataContext)

  return (
    <CategoryContainer>
      <Title>Categories</Title>
      {equipmentCategory.categoryList.map((item) => {
        const category = item.value;
        const bColorCarta = item.colorCarta
        const bColorContainer = item.colorContenedorCarta;
        const categoryForm = formDataNewVideo.formData.formData.filter(item => item.category === category)

        return(
          <CategoriesSection key={item.id} style={{background:bColorContainer}}>
            <>
              <InputColor type="color" />
              <SectionCategorySubTitle>{category}</SectionCategorySubTitle>
            </>
            <div style={{display:"flex"}}>
            {categoryForm.map((item,j ) => (
              <CategoryContent
                key={j}
                formDataNewVideo={item}
                bColorCarta={bColorCarta}
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

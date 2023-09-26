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
  padding: 50px 0;
`
const SectionCategorySubTitle = styled.h2`
  font-size: 4vw;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  padding-left: 20px;
  text-transform: uppercase;
  z-index: 99;
  @media(max-width: 768px){
    font-size: 30px;
  }
` 
const SectionCategory = styled.section`
  width: 95%;
  border: 1px solid rgba(255,255,255, 30%);
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: blue;
`
const SectionCard = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar{
    width: 50px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb{
    background: rgba(255,255,255,50%);
    border-radius:50px;
  }
  &::-webkit-scrollbar-thumb:hover{
    background: rgba(255,255,255,20%);
    border-radius:50px;
  }

  
`

const Categories = () => {
  const {categoryList} = useEquipmentCategory()
  const { formData } = useFormData() 

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

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
        const rgbaColor = {
          backgroundColor: hexToRgba(containerColor[i],0.1),
          letterColor: hexToRgba(containerColor[i], 0.9),
          cardColor: hexToRgba(containerColor[i],0.1)
        }
        const categoryForm = formData.filter(item => item.category === category)
        return(
          <SectionCategory 
            key={i} style={{background:rgbaColor.backgroundColor, border:rgbaColor.backgroundColor}}>
              <InputColor
                style={{alignSelf:"end"}}
                type="color" 
                onChange={(event) => handleColor(event,i)}
                value={containerColor[i]} />
              <SectionCategorySubTitle 
                style={{color:rgbaColor.letterColor}}>{category}</SectionCategorySubTitle>
              <SectionCard>
              {categoryForm.map((item,j ) => (
                <CategoryContent
                  key={j}
                  formDataNewVideo={item}
                  rgbaColor={rgbaColor}
                /> 
              ))}
              </SectionCard>
          </SectionCategory>
          )})
        }
      </MainCategory>
  );
 
}
export default Categories

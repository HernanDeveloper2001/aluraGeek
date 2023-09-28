import styled from "styled-components";
import CategoryContent from "./CategoryContent";
import { useEquipmentCategory } from "../../TeamsContext";
import { useFormData } from "../../formDataContext";
import { InputColor,Title,MainContainer } from "../../../styleComponents";
import { useEffect, useState } from "react";

const SectionCategorySubTitle = styled.h2`
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  text-transform: uppercase;
  z-index: 99;
  @media(max-width: 768px){
    font-size: 40px;
  }
  @media(min-width: 769px) and (max-width:1024px){
    font-size: 60px;
  }
  @media(min-width:1025px){
    font-size:80px;
  }
` 
const SectionCategory = styled.section`
  width: 95%;
  border: 1px solid rgba(255,255,255, 30%);
  border-radius: 5px;
  margin: 20px 0;
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
    <MainContainer>
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
                movil
                tablet
                desktop
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
    </MainContainer>
  );
 
}
export default Categories

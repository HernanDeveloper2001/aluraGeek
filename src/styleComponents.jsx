import styled from "styled-components";
import Select from "react-select"
import { Link } from "react-router-dom";

export const ContenedorFormulario = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h2`
  font-size: 6vw;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  padding: 10px;
  text-shadow: 5px 5px 5px rgba(255,255,255, 30%);
`
export const Form = styled.form`
    background-color: transparent;
    width: ${props => props.width || "50%"};
    height: auto;
    border-radius: 5px;
    border: 1px solid #5f5a5a;
    box-shadow: 10px 10px 10px -10px;
    padding: 30px 30px;
    margin-bottom: 40px;
    margin: ${props => props.margin || "none"};
  `
export const SubTitle = styled.h3`
  color: #fff;
  font-size: 2.5vw;
  text-align: center;
  font-family: 'Roboto Mono', monospace;

`
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px;;
`
export const Input = styled.input`
  height: 50px;
  text-indent: 20px;
  border-radius: 5px;
  border: none;
  font-family: 'Roboto Mono', monospace;
  color:#fff;
  background-color: transparent;
  font-size: 1.2vw;
  box-sizing: border-box;
  outline: none;
  border-bottom: 1px solid #ccc;
  width: ${props => props.width || "100%"}
`
export const InputTextarea = styled.textarea`
  outline: none;
  background-color:transparent;
  font-size: 1.2vw;
  border: none;
  border-bottom: 1px solid #ccc;
  height: 150px;
  padding: 20px;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  border-radius: 5px;
  &::-webkit-scrollbar{
    width: 15px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,50%);
    border-radius: 50px;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb:hover{
    background-color: #9E9E9E;
    
  }
  
`
export const InputErrors = styled.p`
  font-size: 18px;
  font-family: 'Roboto Mono', monospace;
  color: rgba(255,0,0,80%);
  padding-left: 10px;
`
export const MensajeRegistro = styled.p`
  font-size: 18px;
  font-family: 'Roboto Mono', monospace;
  color: rgba(0,255,0,80%);
  text-align:center;
`
export const InputSelect = styled(Select)`
  height: 50px;
  width: 100%;
  outline-color: none;
  font-size:18px;
  font-family: 'Roboto Mono', monospace;
  text-indent: 20px;
  color:#000;
`
export const Botones = styled.button`
  font-size: 1vw;
  color:#fff;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  border-radius: 5px;
  padding:${props => props.padding || "18px"};
  width: ${props => props.width || null};
  background-color: ${props => props.color || null};
  margin: ${props => props.margin || null};
  border: ${props => props.border || null };
  &:hover{
    ${props => props.hoverstyles && props.hoverstyles};
  }
`
export const BotonesLinks = styled(Link)`
  width: ${props => props.width || null};
  text-decoration: none;
  font-size: 1vw;
  text-align: center;
  padding:18px;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props => props.color || "rgb(42, 122, 228)"};
  border:${props => props.border || null};
  color:#fff;

  &:hover {
    ${props => props.hoverstyles && props.hoverstyles }; 
  }
`
export const ContenedorBotones = styled.div`
  display:flex;
  gap: 1rem;
  margin: ${props => props.margin || "none"};
  justify-content: ${props => props.justifyContent || "none"};
`
export const InputColor = styled.input`
  float: right;
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  border-radius: 5px;
`
export const Table = styled.table`
  border: 1px solid rgba(255,255,225,30%);
  font-family: 'Roboto Mono', monospace;
  width:${props => props.width || "100%"};
  font-size: 1.2vw;

`
export const TableTR = styled.tr`
  border: 1px solid rgba(255,255,225,30%);
  height: 50px;
`
export const TableTD = styled.td`
  border: 1px solid rgba(255,255,225,30%);
  max-width: ${props => props.widthMax || null};
  text-align: ${props => props.textAlign || null};
  max-height: ${props => props.maxHeight || null};
  text-align: center;
  overflow-y: ${props => props.overflowY || "hidden"};
  overflow-x: ${props => props.overflowX || "scroll"};
  font-weight: 300;
  &::-webkit-scrollbar{
    width: 15px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: rgba(255,255,255, 30%);
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover{
    background-color: rgba(255,255,255, 20%);
    cursor: pointer;
  }
`
export const TableTH = styled.th`
  border: 1px solid rgba(255,255,225,30%);
  width: ${props => props.width || null};
  font-weight: 800;
  color: red;
`


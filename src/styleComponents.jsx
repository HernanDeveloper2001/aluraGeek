import styled from "styled-components";
import Select from "react-select"
import { Link } from "react-router-dom";

export const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  width: 100%;
`
export const Title = styled.h2`
  font-size: 7vw;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  padding: 10px;
  text-shadow: 5px 5px 5px rgba(255,255,255, 30%);
  @media(max-width: 768px){
    font-size: 3rem;
  }
`
export const Form = styled.form`
  width: 90%;
  height: auto;
  display: flex;
  gap: 3em;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #5f5a5a;
  padding: 50px 0;
  margin-bottom: 40px;
  margin: ${props => props.margin || "none"};
  @media(max-width:768px){
    width:80%;
  }
`

export const Input = styled.input`
  width: 90%;
  height: 50px;
  text-indent: 10px;
  border-radius: 5px;
  border: none;
  font-family: 'Roboto Mono', monospace;
  color:#fff;
  background-color: transparent;
  font-size: 1.2rem;
  outline: none;
  border-bottom: 1px solid #ccc;
  z-index: 2;
  @media (max-width: 768px){
    font-size:16px;
  }
`

export const InputTextarea = styled.textarea`
  outline: none;
  width: 90%;
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
  @media (max-width: 768px){
    font-size:15px;
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
  width: 90%;
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
  @media(max-width: 768px){
    font-size: 20px;
    width: 90%;
    font-size: 16px;
    padding: 5px;
  }
`
export const BotonesLinks = styled(Link)`
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  text-decoration: none;
  font-size: 1vw;
  text-align: center;
  padding:${props => props.padding || "18px"};
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props => props.color || null};
  border:${props => props.border || null};
  color:#fff;
  position: ${props => props.position || null};
  z-index:${props => props.zIndex || null};
  &:hover {
    ${props => props.hoverstyles && props.hoverstyles }; 
  }
  @media(max-width: 768px){
    font-size: 20px;
    width: 90%;
    font-size: 16px;
    padding: 5px;
  }
`
export const ContenedorBotones = styled.div`
  display:flex;
  gap: 1rem;
  margin: ${props => props.margin || "none"};
  justify-content: ${props => props.justifyContent || "none"};
  @media(max-width: 768px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 7px 0;
  }
`
export const InputColor = styled.input`
  float: right;
  width: ${props => props.width || "90%"};
  height: 50px;
  border-radius: 5px;
  @media(max-width:768px){
    width: 40px;
    height:40px;
  }
`
export const Table = styled.table`
  border: 1px dashed rgba(255,255,225,30%);
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  width: 90%;
  font-size: 1.2vw;
  @media(max-width:768px){
    display: none;
  }
`
export const TableTR = styled.tr`
  border: 1px solid rgba(255,255,225,30%);
  height: 50px;
`
export const DivTd = styled.div`
  height: 100%;
  width: auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,30%);
    border-radius: 5px;
  }
`
export const TableTD = styled.td`
  width:200px;
  height: 200px;
  border: 1px solid rgba(255,255,225,30%);
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
  font-weight: 800;
  color: rgb(255, 0, 0);
`


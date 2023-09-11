import { Route, Routes } from "react-router-dom"
import Categories from "../section-categories/categories";
import LoginForm from "../section-form/LoginForm";
import NuevoVideo from "../section-new_video/NuevoVideo";


const RutasNavegacion = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Categories/> }/>
        <Route path="/registro" element={<LoginForm/>}/>
        <Route path="/nuevo-video" element={<NuevoVideo/>}/>
      </Routes>
    </>
  )
}

export default RutasNavegacion

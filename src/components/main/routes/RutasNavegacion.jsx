import { Route, Routes } from "react-router-dom"
import Categories from "../section-categories/categories";
import LoginForm from "../section-form/LoginForm";
import NuevoVideo from "../section-new_video/NuevoVideo";
import NewCategory from "../section-new_category/NewCategory";
import CategoryDetails from "../section-new_category/CategoryDetails";

const RutasNavegacion = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Categories/> }/>
        <Route path="/registro" element={<LoginForm/>}/>
        <Route path="/nuevo-video" element={<NuevoVideo/>}/>
        <Route path="/new-category" element={<NewCategory/>}/>
        <Route path="/category-details" element={<CategoryDetails/>}/>
      </Routes>
    </>
  )
}

export default RutasNavegacion

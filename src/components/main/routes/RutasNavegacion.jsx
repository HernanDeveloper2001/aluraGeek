import { Route, Routes } from "react-router-dom"
import Categories from "../section-categories/categories";
import NuevoVideo from "../section-new_video/NuevoVideo";
import NewCategory from "../section-new_category/NewCategory";
import Video from "../section-video/Video";
import Details from "../section-details/Details";
import Delete from "../section-delete/Delete"
const RutasNavegacion = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Categories/> }/>
        <Route path="/nuevo-video" element={<NuevoVideo/>}/>
        <Route path="/new-category" element={<NewCategory/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/delete" element={<Delete/>}/>
      </Routes>
    </>
  )
}

export default RutasNavegacion

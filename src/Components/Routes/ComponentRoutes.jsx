import { Routes,Route } from "react-router-dom";
import ImageList from "../ImagesList/ImageList";
import ImageBanner from "../ImageBanner/ImageBanner";

function ComponentsRoutes(){
return(
    <>
    <Routes>
        <Route path='/' element={<ImageList/>} />
        <Route path='/details/:id' element={<ImageBanner/>} />
    </Routes>
    </>
)
}

export default ComponentsRoutes;
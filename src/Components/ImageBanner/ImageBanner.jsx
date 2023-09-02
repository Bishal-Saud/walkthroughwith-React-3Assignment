import axios from "axios";
import { useEffect, useState } from "react";
import { Routes,useParams } from "react-router-dom";
import './ImageBanner.css'
function ImageBanner(){
    const {id} = useParams();
    // console.log(id);
    const [imagesDetail,setImagesDetails] =useState({})

    async function downloadParams(){
const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}?offset=5&limit=20`)

// console.log(response.data.photo);
const imageData = response.data.photo

setImagesDetails({
    id:imageData.id,
    image:imageData.url,
    title:imageData.title,
    description:imageData.description,

})
    }

    useEffect(()=>{
        downloadParams()
    },[])
    return(
        <>
  <div className="Container">
    <div className="left-box">
<img src={imagesDetail.image} alt='image' key={imagesDetail.id} />
   
    </div>
<div className="right-box">
    <h2 className="title">{imagesDetail.title}</h2>
    <p className="description">{imagesDetail.description}</p>
</div>

  </div>
        
        </>
    )
}

export default ImageBanner;
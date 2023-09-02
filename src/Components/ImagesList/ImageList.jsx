import axios from 'axios'
import { useEffect, useState } from 'react';
import Images from '../Images/Images';
import './imageslist.css'
function ImageList(){
    const [apiImage,setApiImage] = useState('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
    const [images,setImages] = useState([])
const [isLoading,setIsLoading] = useState(true)

    async function downloadImages(){
const response = await axios.get(apiImage) 
const imagesData = await response.data;
console.log(imagesData);
const allImages = imagesData.photos.map((image) => {
    const imagesData = image.url
    // console.log(imagesData);

    return{
        photos: imagesData,
        id:image.id
    }
    
})
setIsLoading(false)
setImages(allImages)

    } 

    useEffect(()=>{
downloadImages()
    },[])
return(
    <>
    <div className='imagesList'> 
{(isLoading) ? 'loading ..':
images.map((d)=> <Images src={d.photos} key={d.id} id={d.id}/>)
}

    </div>
    </>
)
}

export default ImageList;
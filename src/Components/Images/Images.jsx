import { Link } from 'react-router-dom';
import './Images.css'
function Images({src,id}){
    return(
        <>
        <Link to={`/details/${id}`}>
        <img className="images" src={src} alt="id" id={id} />
        </Link>
        </>
    )
}

export default Images;
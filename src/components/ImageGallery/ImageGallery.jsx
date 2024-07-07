import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"
export default function ImageGallery({images, openModal}) {
    return(
        <ul className={css.container}>
            {images.map((image)=>(
            <li key={image.id}>
                <ImageCard image={image} openModal={openModal} />
            </li>))
            }
        </ul>
    )
}
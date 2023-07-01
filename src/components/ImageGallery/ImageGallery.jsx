import PropTypes from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import s from './ImageGallery.module.css'

export const ImageGallery = ({ images }) => {
    return <>
        <ul className={s.list}>
            {
                images.map(image=> (<ImageGalleryItem  key={image.id} image={image} />))          
            }
</ul>
    </>
}

ImageGallery.propTypes = {
    images:PropTypes.arrayOf(
    PropTypes.shape({
     tags:PropTypes.string,
     id:PropTypes.number,
     webformatURL:PropTypes.string,
     largeImageURL:PropTypes.string,
   
    })
    ),

    
};
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import s from './ImageGallery.module.css'

export const ImageGallery = ({ images, }) => {
    console.log();
    return <>
        <ul className={s.list}>
            {
                images.map(image=> (<ImageGalleryItem  key={image.id} image={image} />))          
            }
</ul>
    </>
}

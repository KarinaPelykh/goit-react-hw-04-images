import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
export const ImageGallery = ({images}) => {
    return <>
        <ul style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            listStyle: "none"
        }}
            className="gallery">
            {
                images.map(({id,webformatURL,tags})=> 
                (<ImageGalleryItem key={id}
            webformatURL={webformatURL}
            tags={tags}
            />)
                )          
}
</ul>
    </>
}

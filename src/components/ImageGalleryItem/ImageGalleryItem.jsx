export const ImageGalleryItem = ({id, webformatURL,tags }) => {
   return (<li class="gallery-item">
< img key={id} src={webformatURL} alt={tags} width="300" />
</li>)
}
;

import React, { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImages } from "service/image.Api";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";


export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  useEffect(() => {
  if (!query) return;

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await getImages({ page, query });
      const { hits, totalHits } = response.data;
      setImages(prevImages => [...prevImages, ...hits]);
      setShowButton(page < Math.ceil(totalHits / 12));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [page, query]);

  const handleSubmitForm = query => {
    setImages([]);
    setPage(1);
    setQuery(query);

  };

 const  onClickButton = () => {
    setPage(prevPage =>( prevPage + 1))
  }
  
const toggleModal = () => {
  setIsOpenModal(prevState => !prevState);
};
    return (
      <>
        <Searchbar onSubmit={handleSubmitForm} />
        <ImageGallery onClick={toggleModal} images={images} />
        {loading && (<Loader />)}
        {showButton && (<Button isOpenModal={isOpenModal} onClick={onClickButton} />)}
      
       
      </>
    );
  }





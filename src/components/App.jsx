
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
  const [perPage, setPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  useEffect(() => {
   
    if (!query) return;
    setLoading(true)
    try{
      getImages({ page, query, perPage }).then(response => {
        console.log(response);
        const { hits, totalHits } = response.data;
        setImages(prevImages => [...prevImages, ...hits]);
    setShowButton(page < Math.ceil(totalHits / perPage));
      })
    } catch (error) {
      console.log(error);
      
    } finally{
        setLoading(false)
    }
    
},[page, query, perPage])
  
  
  const handleSubmitForm = query => {
    setImages([]);
    setPage(1);
    setQuery(query);

  };

 const  onClickButton = () => {
    setPage(prevState =>( prevState.page + 1))
  }
  
   const toggleModal = () => {
   setIsOpenModal(previsOpenModal => ( !previsOpenModal ))

  }


    return (
      <>
        <Searchbar onSubmit={handleSubmitForm} />
        <ImageGallery onClick={toggleModal} images={images} />
        {loading && (<Loader />)}
        {showButton && (<Button onClick={onClickButton} />)}
      
       
      </>
    );
  }
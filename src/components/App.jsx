
import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImages } from "service/image.Api";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
// import { Modal } from "./Modal/Modal";
// import s from './Searchbar/Searchbar.module.css'

export class App extends Component {
 
state = {
  page: 1,
  query: '',
  images: [],
  perPage: 12,
  loading: false,
  showButton: false,
 isOpenModal: false,
  }


 async componentDidUpdate(prevProps,prevState) {
   const { page, query, perPage } = this.state;
   
   if (prevState.query !== query || prevState.page !== page) {
     this.setState({loading:true})
     try {
     const { data } = await getImages({ page, query, perPage })
     console.log(data.hits);
     this.setState(prevState => ({
       images: [...prevState.images, ...data.hits],
       showButton: page < Math.ceil(data.totalHits / 12)
       
     }))
     } catch (error) {
       console.log(error)
     }finally{
          this.setState({loading:false})
    }
   }
  }
  
 handleSubmitForm = query => {
    this.setState({images:[],page:1,query});
  };

  onClickButton = () => {
    this.setState(prevState =>( {
  page:prevState.page + 1
} ))
  }
  
toggleModal = () => {
		this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }))

	}

  render() {
    
    const { images,showButton,loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery onClick={this.toggleModal} images={images} />
        {showButton && (<Button onClick={this.onClickButton} />)}
        {loading && (<Loader  />)}
       
      </>
    );
  }
}


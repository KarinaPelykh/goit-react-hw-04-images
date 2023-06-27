import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";


import { getImages } from "service/image.Api";
export class App extends Component{
  state = {
     page: 1,
    query: "",
    images: [] 
  }


    componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      getImages(page, query).then(({ hits, totalHits }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits]
        }));
      });
    }
  }

  handleSubmitForm = (query) => {
   this.setState({query})
  }

  render() {
    const {images}=this.state
    return (
      <>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery images={images } />
      
      </>
  );
  }
};

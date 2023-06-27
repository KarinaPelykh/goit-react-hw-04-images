// import { Component } from "react"
// import { getImages } from "service/image.Api";


// export class Searchbar extends Component {
// state = {
//   page: 1,
//   query: '',
//   images:[]
//   }

//   componentDidUpdate(prevProps,prevState) {
//     const { page, query } = this.state;
//     if (prevState.page !== page && prevState.query !== query) {
//       getImages(page, query).then(({photos , total_results}) => {
//         console.log(photos);
//         this.setState(prevState => ({
//           images: [...prevState.images, ...photos ]
//         }))
//       })
//     }
// }

//   handelSubmit = (e) => {
//     e.preventDefault()
//     this.props.onSubmit(this.state.query);
//     this.setState({query:""})
//   }

//   handelChangeInput = (e) => {
//     this.setState({query:e.target.value.toLowerCase()})
//   }
//     render() {
//         return <>
//    <header >
//   <form  onSubmit={this.handelSubmit} >
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>

//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//       onChange={this.handelChangeInput}
//       value={this.state.query}
//     />
//   </form>
// </header>
//     </>
//    }
// }

import React, { Component } from "react";


export class Searchbar extends Component {
  state = {
   
    query: "",
    images: []
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  handleChangeInput = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

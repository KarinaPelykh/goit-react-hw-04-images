import { Component } from "react";
import s from './Searchbar.module.css'
export class Searchbar extends Component {
state = {
  query: '',
  images:[]
  }


  handelSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.query);
     
    this.setState({query: ''})
  }

  handelChangeInput = (e) => {
    this.setState({query:e.target.value.toLowerCase()})
  }
  handeldizaibel = () => {
    const {query}= this.state
    if (query === '') {
      
    }
}

  render() {
    const { query } = this.state;
     const isQueryEmpty = query.trim() === '';
        return <>
   <header >
  <form className={s.SearchForm}  onSubmit={this.handelSubmit} >
              <button className={s.SearchFormButton} type="submit" style={{ visibility: isQueryEmpty ? 'hidden' : 'visible' }}>
      <span >Search</span>
    </button>

    <input
      className={s.SearchFormInput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={this.handelChangeInput}
      value={query}
    />
  </form>
</header>
    </>
   }
}

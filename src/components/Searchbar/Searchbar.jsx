import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './Searchbar.module.css';
export const Searchbar = props => {
  const [query, setQuery] = useState('');

  const handelSubmit = e => {
    e.preventDefault();

    props.onSubmit(query);
    setQuery('');
  };

  const handelChangeInput = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const isQueryEmpty = query.trim() === '';
  return (
    <>
      <header>
        <form className={s.SearchForm} onSubmit={handelSubmit}>
          <button
            className={s.SearchFormButton}
            type="submit"
            style={{ visibility: isQueryEmpty ? 'hidden' : 'visible' }}
          >
            <span>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={handelChangeInput}
            value={query}
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

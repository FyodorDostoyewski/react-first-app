import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const SearchForm = () => {
  const dispatch = useDispatch();

  const [searchForm, setSearchForm] = useState('');

  const handleSubmit = eve => {
    eve.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: {searchForm} });
    setSearchForm('');
  }

  return (
      <form onSubmit={handleSubmit} className={styles.searchForm}>
          <TextInput placeholder="Search…" />
          <Button>
            <span type="text" value={searchForm} onChange={eve => setSearchForm(eve.target.value)} className="fa fa-search" />
          </Button>
      </form>
  );
}

  export default SearchForm;

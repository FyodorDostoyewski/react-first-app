import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import  { updateSearchstring } from '../../redux/searchStringRedux.js';


const SearchForm = () => {
  const dispatch = useDispatch();

  const [searchForm, setSearchForm] = useState('');

  const handleSubmit = eve => {
    eve.preventDefault();
    dispatch(updateSearchstring(searchForm));
    setSearchForm('');
  }

  return (
      <form onSubmit={handleSubmit} className={styles.searchForm}>
          <TextInput onChange={eve => setSearchForm(eve.target.value)} placeholder="Search…" />
          <Button>
            <span type="text" value={searchForm}  className="fa fa-search" />
          </Button>
      </form>
  );
}

  export default SearchForm;

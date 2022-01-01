import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';


const SearchForm = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'UPDATE_SEARCHSTRING', payload: {} });

  return (
      <form className={styles.searchForm}>
          <TextInput placeholder="Search…" />
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
}

  export default SearchForm;

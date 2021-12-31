import styles from '../Button/Button.module.scss';
import componentStyle from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = e => {
  e.preventDefault();
  dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
  setTitle('');
  setIcon('');
};
console.log(componentStyle.columnForm);
	return (
    <form className={componentStyle.columnForm} onSubmit={handleSubmit}>
    Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
    Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
        <button className={styles.button}>Add column</button>
    </form>
	);
};

export default ColumnForm;

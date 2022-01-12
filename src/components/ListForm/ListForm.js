import styles from '../Button/Button.module.scss';
import componentStyle from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  { addList } from '../../redux/store';

const ListForm = props => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = e => {
  e.preventDefault();
  dispatch(addList({ title, icon }));
  setTitle('');
  setIcon('');
};

	return (
    <form className={componentStyle.ListForm} onSubmit={handleSubmit}>
    Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
    Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
        <button className={styles.button}>Add list</button>
    </form>
	);
};

export default ListForm;

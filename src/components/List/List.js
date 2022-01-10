import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';

const List = () => {

  const columns = useSelector(getColumnsByList);

  const listData = useSelector(getListById)

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData}</h2>
      </header>
      <p className={styles.description}>{listData}</p>
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.listId}
            {...column}  />
        )}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;

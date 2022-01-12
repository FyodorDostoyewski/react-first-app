import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card.js'


const Favorite = () => {

  const favorite = useSelector(state => getFavoriteCards(state));

    return (
      <div className={styles.favorite}>
        <h1 className={styles.title}>Favorite</h1>
        <ul >
          {favorite.map(card => <Card key={card.id} title={card.title} />)}
        </ul>
      </div>
    );
  };

  export default Favorite;

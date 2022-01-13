import styles from './Card.module.scss';

const Card = props => {
    return (
        <li className={styles.card}>{props.title}</li>
    );
};

export default Card;

// import styles from './Card.module.scss';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { toggleCardFavorite } from '../../redux/store';
//
//
// const Card = props => {
//
//   const dispatch = useDispatch();
//     const [favorite, setFavorite] = useState('');
//     const handleSubmit = e => {
//         e.preventDefault();
//         dispatch(toggleCardFavorite({ favorite, isFavorite: props.isFavorite}));
//
//         setFavorite('');
//     };
//
//     return (
//         <article className={styles.column}>
//         <li className={styles.card}>{props.title}</li>
//         <span className={styles.icon + ' ' + 'fa-star-o' + props.icon} />
//         <h2 className={styles.title}>{props.title}</h2>
//         <button type="button" onClick={e => props.isFavorite === true ? props.isFavorite = false : props.isFavorite = true}/>
//         </article>
//     );
// };
//
// export default Card;

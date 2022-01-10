import styles from './Lists.module.scss'
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';
import {  Link } from 'react-router-dom';

const Lists = () => {

const lists = useSelector(state => getAllLists(state, 1));

return (
  <section className={styles.lists}>
    <h2 className={styles.heading}>Browse lists</h2>
    {lists.map(list => (
      <Link key={list.id = 1} to="/list/1" className={styles.listLink}>
        <h3>{list.title}</h3>
        <p>{list.description}</p>
      </Link>
    ))}
  </section>
);
}

export default Lists;
// <nav className={styles.NavBar}>
//
//
//    <span className="fa fa-tasks"  />
//
//
//     <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/">Home</NavLink></li>
//     <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to={"./Favorite"}>Favorite</NavLink></li>
//     <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to={"./About"}>About</NavLink></li>
//
//
//
// </ nav>

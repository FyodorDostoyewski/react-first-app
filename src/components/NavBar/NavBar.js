import styles from './NavBar.module.scss'

import {  NavLink } from 'react-router-dom';



const NavBar = () => {
  return (

    <nav className={styles.NavBar}>


       <span className="fa fa-tasks"  />


        <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to={"./Favorite"}>Favorite</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to={"./About"}>About</NavLink></li>



    </ nav>
   );
};

    export default NavBar;

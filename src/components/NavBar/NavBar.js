import styles from './NavBar.module.scss'

import { Link } from 'react-router-dom';



const NavBar = () => {
  return (

    <nav className={styles.NavBar}>


       <span className="fa fa-tasks"  />


        <Link className={styles.link} to={"./Home"}>Home</Link>
        <Link className={styles.link} to={"./Favorite"}>Favorite</Link>
        <Link className={styles.link} to={"./About"}>About</Link>
    

    </ nav>
   );
};

    export default NavBar;

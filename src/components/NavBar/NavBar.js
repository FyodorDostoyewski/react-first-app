import styles from './NavBar.module.scss'
import Container from '../Container/Container.js';
import { Link } from 'react-router';



const NavBar = () => {
  return (

    <nav className={styles.NavBar}>

       <Container>
       <span className="fa fa-tasks"  />
       <ul>
        <link className={styles.link} to={"./Home"}><li>Favorite</li></link>
        <link className={styles.link} to={"./Favorite"}><li>Favorite</li></link>
        <link className={styles.link} to={"./About"}><li>Favorite</li></link>
      </ul>
       </Container>
    </ nav>
   );
};

    export default NavBar;

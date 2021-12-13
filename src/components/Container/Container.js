import styles from './Container.module.scss';

const Container = props => {
   return (<Container className={styles.appContainer}>{props.children}</Container>);
}

export default Container;

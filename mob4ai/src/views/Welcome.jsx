import styles from '../styles/Welcome.module.css';

const Welcome = ({ onStart }) => (
  <div className={styles.container}>
    <h1>MOB4AI Dashboard</h1>
    <p>Monitore em tempo real os dados do sistema</p>
    <button onClick={onStart}>Entrar</button>
  </div>
);

export default Welcome;

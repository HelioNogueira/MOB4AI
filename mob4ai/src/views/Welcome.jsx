import styles from '../styles/Welcome.module.css';
import Video from '../components/Video';

const Welcome = ({ onStart }) => (
  <Video>
    <div className={styles.overlay}>
      <h1>MOB4AI Dashboard</h1>
      <p className='p1'>Monitore em tempo real os dados do sistema</p>
      <button onClick={onStart}>Entrar</button>
    </div>
  </Video>
);

export default Welcome;

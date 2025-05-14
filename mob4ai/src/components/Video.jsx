import styles from '../styles/Video.module.css';

const Video = ({ children }) => {
  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/videos/backgroundVideos.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      <div className={styles.overlay}>
        {children}
      </div>
    </div>
  );
};

export default Video;

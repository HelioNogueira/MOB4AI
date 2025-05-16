const Footer = () => {
  return (
    <footer style={{
      background: "#ecf0f1",
      padding: "1rem",
      textAlign: "center",
      fontSize: "0.9rem",
      borderTop: "1px solid #ccc",
      marginTop: "2rem"
    }}>
      &copy; {new Date().getFullYear()} Desenvolvido por Hélio Nogueira
    </footer>
  );
};

export default Footer;

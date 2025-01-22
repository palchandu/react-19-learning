const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="d-flex justify-content-center color-primary">
          <a href="" className="me-4 text-reset color-primary">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i> Google
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa instagram"></i> Instagram
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i> Linkedin
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

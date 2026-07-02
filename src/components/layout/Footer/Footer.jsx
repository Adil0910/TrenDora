import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} AI SaaS Platform. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <span>© {new Date().getFullYear()}Made with ❤️ by Sankalp</span>
      <span>Admin Dashboard - Powered by Sankalp</span>
    </div>
  );
};

export default Footer;

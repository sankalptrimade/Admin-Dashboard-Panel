import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./logo.svg" alt="" />
        <span>Admin Panel</span>
      </div>
      <div className="icons">
        <img src="./search.svg" alt="" />
        <img src="./app.svg" alt="" />
        <img src="./expand.svg" alt="" />
        <div className="notification">
          <img src="./notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="img" />
          <span>Sankalp</span>
        </div>
        <img src="./settings.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;

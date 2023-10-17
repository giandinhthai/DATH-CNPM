const Navbar = (props) => {
  const items = ["Trang chu", "Yeu cau sua chua", "Quan ly so du"];
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {items.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    className={
                      props.navIndex === index ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    href="#home"
                    onClick={() => {
                      props.setNavIndex(index);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

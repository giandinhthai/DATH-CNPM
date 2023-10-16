const Footer = () => {
  const items = ["DatNguyen", "May anh An Do", "FreeCodeCamp"];
  return (
    <div>
      <div className="container-fluid bg-secondary pb-3">
        <h1 className="m-0">Sponsor</h1>
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li key={index} className="list-group-item bg-transparent">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;

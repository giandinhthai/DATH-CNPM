const Footer = () => {
  const sponsors = ["DatNguyen", "May anh An Do"];
  const policy = ["User", "Privacy", "Security"];
  return (
    <div>
      <div className="container-fluid bg-black pb-3 text-light">
        <div className="row col-12">
          <div className="col-6">
            <h1 className="m-0">Sponsor</h1>
            <ul className="list-group list-group-flush">
              {sponsors.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item bg-transparent text-light"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <h1 className="m-0">Policy</h1>
            <ul className="list-group list-group-flush">
              {policy.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item bg-transparent text-light"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

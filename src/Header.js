const Header = (props) => {
  const formatMoney = props.money.toLocaleString();
  const items = [
    { name: "Yeu cau sua chua", tag: "fixrequest" },
    { name: "Quan ly so du", tag: "balance" },
  ];
  return (
    <div id="fixedTop" className="fixed-top bg-black">
      <div className="container-fluid col-lg-12 text-light">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-lg-10">
            <div className="row col-12 text-center">
              <div
                className="col-2"
                onClick={() => {
                  props.setMainDisplay("home");
                }}
              >
                <h1>HomeFix</h1>
              </div>
              {items.map((item, index) => (
                <div
                  className="col-2 pt-3"
                  onClick={() => {
                    props.setMainDisplay(item.tag);
                  }}
                >
                  <h4>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-2">
            <div
              className="row col-lg-12"
              onClick={() => {
                props.onClickOnAccount();
              }}
            >
              <div className="col-lg-3 lh-lg">
                <i class="bi bi-person fs-1"></i>
              </div>
              <div className="col-lg-9">
                <p className="mt-2 mb-0 mt-3">{props.name}</p>
                <p>So du: {formatMoney}d</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

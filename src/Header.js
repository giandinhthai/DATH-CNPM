const Header = (props) => {
  const formatMoney = props.money.toLocaleString();
  return (
    <div>
      <div className="container-fluid col-lg-12">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-lg-4">
            <h1>HomeFix</h1>
          </div>
          <div className="col-lg-4 offset-4">
            <div className="row col-lg-12">
              <div className="col-10">
                <div
                  className="row col-12"
                  onClick={() => {
                    props.onClickOnAccount();
                  }}
                >
                  <div className="col-lg-3">Icon tai khoan</div>
                  <div className="col-lg-9">
                    <p className="mt-2 mb-0">{props.name}</p>
                    <p>So du: {formatMoney}d</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-2"
                onClick={() => {
                  props.onClickOnLogout();
                }}
              >
                Icon logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const FixRequest = (props) => {
  const items = [
    10200, 20030, 25223, 19508, 17823, 37851, 28920, 18904, 22798, 38597, 17389,
    17282, 17213,
  ];
  return (
    <div>
      <div className="container-fluid col-12 my-3">
        <div className="row col-8 offset-2">
          <div className="col-3">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success bg-black text-white px-4"
                type="submit"
              >
                <i class="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="col-5 pt-1">
            <button className="rounded-2 mx-1 bg-black text-white">
              <i class="bi bi-filter"></i>
            </button>
            <button className="rounded-2 bg-black text-white">
              <i class="bi bi-grid-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <div>
        {items.map((item, index) => (
          <div className="container-fluid col-12">
            <div className="row col-8 offset-2 p-1">
              <div className="card p-1" onClick={props.showDetail}>
                <div className="row col-12">
                  <div className="col-lg-4">
                    <img
                      className="card-img-top"
                      src="https://i.ytimg.com/vi/0Y9r-3VBYUc/hqdefault.jpg"
                      alt="Anh mo ta"
                    />
                  </div>
                  <div className="col-8">
                    <h4 className="card-title">Ten yeu cau</h4>
                    <p className="card-text">Mo ta yeu cau</p>
                    <p className="card-text">Khoang cach toi ban, dia diem</p>
                    <p className="card-text">
                      Thoi gian co the den sua chua/Yeu cau khan cap
                    </p>
                    <p className="card-text">
                      Phi nhan yeu cau {item.toLocaleString()}d
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="container-fluid col-12 my-2">
          <div className="row col-10">
            <div className="col-auto me-auto"></div>
            <div className="col-auto p-0">
              <div className="container-fluid p-0">
                <div className="float-right ">
                  <button type="button" class="btn btn-dark rounded-0 m-1">
                    Ve trang dau
                  </button>
                  <button type="button" class="btn btn-dark rounded-0 m-1 px-3">
                    <i class="bi bi-caret-left-fill"></i>
                  </button>
                  <button type="button" class="btn btn-dark rounded-0 m-1 px-3">
                    3
                  </button>
                  <button type="button" class="btn btn-dark rounded-0 m-1 px-3">
                    <i class="bi bi-caret-right-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixRequest;

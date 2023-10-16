import { useEffect, useState } from "react";
const FixRequest = (props) => {
  const items = [
    10200, 20030, 25223, 19508, 17823, 37851, 28920, 18904, 22798, 38597, 17389,
    17282, 17213,
  ];
  return (
    <div>
      {items.map((item, index) => (
        <div className="container-fluid col-12">
          <div className="row col-8 offset-2">
            <div className="card" onClick={props.showDetail}>
              <img
                className="card-img-top"
                src="holder.js/100x180/"
                alt="Anh mo ta"
              />
              <div className="card-body">
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
      ))}
    </div>
  );
};

export default FixRequest;

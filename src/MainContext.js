import FixRequest from "./FixRequest";
import Home from "./Home";
const MainContext = (props) => {
  return (
    <div>
      {props.navIndex === -1 ? (
        <Home />
      ) : props.navIndex === 0 ? (
        <FixRequest showDetail={props.showDetail} />
      ) : null}
    </div>
  );
};

export default MainContext;

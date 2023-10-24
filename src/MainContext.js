import FixRequest from "./FixRequest";
import Home from "./Home";
const MainContext = (props) => {
  return (
    <div>
      {props.mainDisplay === "home" ? (
        <Home />
      ) : props.mainDisplay === "fixrequest" ? (
        <FixRequest showDetail={props.showDetail} />
      ) : null}
    </div>
  );
};

export default MainContext;

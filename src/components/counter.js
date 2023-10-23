import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div class="jumbotron">
      <h1>{counter}</h1>
      <button onClick={dec} className="btn btn-primary">
        DEC
      </button>
      <button onClick={inc} className="btn btn-primary">
        INC
      </button>
      <button onClick={rnd} className="btn btn-primary">
        RND
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};
// const mapDispatchToProps = (dispatch) => {
// 	const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
// 	return
// };

export default connect(mapStateToProps, actions)(Counter);
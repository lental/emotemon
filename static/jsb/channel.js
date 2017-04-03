
var channel = (state = {channelCount:100}, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {channelCount: state.channelCount + 100};
        break;
      default:
    }
    return state;
  };


var incrementAction = () => {
  return {type:"INCREMENT"};
}

let ChannelIncrement = ({
  dispatch
}) => (
  <div className="headerElement">
      <button id="bg-color-submit" onClick={() => {dispatch(incrementAction())}}> Add More Emotes</button>
  </div>
);

ChannelIncrement = connect()(ChannelIncrement)

var channel = (state = {channelCount:100}, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {channelCount: state.channelCount + 100};
        break;
      default:
    }
    return state;
  };


var ChannelIncrement = ({
  onClick
}) => (
  <div className="headerElement">
      <button id="bg-color-submit" onClick={onClick}> Add More Emotes</button>
  </div>
);

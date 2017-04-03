
var s; // for console debugging

function startApp() {
  const { createStore, combineReducers } = Redux;
  s = createStore(combineReducers({channel, backgroundColor}));
  const render = () => {
    ReactDOM.render(
    (<AppPage store={s}/>),
    document.getElementById('content')
    );
  };
  s.subscribe(render);
  render();
}


var backgroundColor = (state = {color:"#FFD"}, action) => {
    switch (action.type) {
      case "CHANGE_COLOR":
        state.color = action.color;
        break;
      default:
    }
    return state;
  };

var channel = (state = {channelCount:100}, action) => {
    switch (action.type) {
      case "INCREMENT":
        state.channelCount += 100;
        break;
      default:
    }
    return state;
  };


var ChannelIncrement = ({
  onClick
}) => (
  <div className="headerElement">
      <button id="bg-color-submit" onClick={onClick}>Add More Emotes</button>
  </div>
);


var AppPage = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    return {channels:{}, template: {}};
  },

  componentDidMount: function() {

    $.getJSON('/vendor/subscriber.json', function(data) {
      this.setState({"template": data.template, "channels": data.channels});
    }.bind(this));
  }, 
  
  render: function() {
    document.body.style.backgroundColor = this.props.store.getState().backgroundColor.color;
    var count = this.state.farthest;
    return (
        <div>
          <h1 ref="splash" className="splash">
          </h1>
          <div id="header">
            <BackgroundColorChooser onClick={() => {this.props.store.dispatch({type:"CHANGE_COLOR", color:$("#bg-color").val()});}} />
            <ChannelIncrement onClick={() => {this.props.store.dispatch({type:"INCREMENT"});}}/>
          </div>
          <div id="channel-container">
          { Object.keys(this.state.channels).map(function (key, index, arr) {
            if (index > this.props.store.getState().channel.channelCount) return;
            return Object.keys(this.state.channels[key].emotes).map(function (emotekey, index) {
              var style = [];
              if (index == 0) {
                style.push("emoteStart");
              }
              if (index == this.state.channels[key].emotes.length - 1) {
                style.push("emoteEnd");
              }
              return (
                <Emote key={emotekey + ", " + key} emote={this.state.channels[key].emotes[emotekey]} template={this.state.template} style={style}/>
                );

            }, this);
        }, this)}
          </div>
        </div>
      );
  }
});

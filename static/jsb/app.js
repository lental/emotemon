const {connect} = ReactRedux;

var s; // for console debugging

function startApp() {
  const { Provider } = ReactRedux;
  const { createStore, combineReducers } = Redux;
  s = createStore(combineReducers({channel, backgroundColor, subscriberData}));
  const render = () => {
    ReactDOM.render(
    (<Provider store={s}>
      <AppPage/>
    </Provider>),
    document.getElementById('content')
    );
  };
  s.subscribe(render);
  render();

  $.getJSON('/vendor/subscriber.json', function(data) {
    s.dispatch({type: "ADD_CHANNELS", "template": data.template, "channels": data.channels});
  }.bind(this));
}

var subscriberData = (state = {channels:{}, template: {}}, action) => {
    switch (action.type) {
      case "ADD_CHANNELS":
        return {template: action.template,
          channels: action.channels}
        break;
      default:
    }
    return state;
  };

var backgroundColor = (state = {color:"#FFD"}, action) => {
    switch (action.type) {
      case "CHANGE_COLOR":
        return {color: action.color};
        break;
      default:
    }
    return state;
  };

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
      <button id="bg-color-submit" onClick={onClick}>Add More Emotes</button>
  </div>
);

var AppPage = React.createClass({
  getInitialState: function() {
    return {channels:{}, template: {}};
  },

  componentDidMount: function() {

  }, 
  
  render: function() {
    var store = this.context.store;
    var state = store.getState();

    document.body.style.backgroundColor = store.getState().backgroundColor.color;
    return (
        <div>
          <h1 ref="splash" className="splash">
          </h1>
          <div id="header">
            <BackgroundColorChooser onClick={() => {store.dispatch({type:"CHANGE_COLOR", color:$("#bg-color").val()});}} />
            <ChannelIncrement onClick={() => {store.dispatch({type:"INCREMENT"});}}/>
          </div>
          <VisibleEmotes />

        </div>
      );
  }
});

AppPage.contextTypes = {
  store: React.PropTypes.object,
}
var EmotesList = React.createClass({
  render: function() {
    var usableChannelKeys = this.props.usableChannelKeys;
    var template = this.props.template;
    return <div id="channel-container">
      { usableChannelKeys.map(function (key, index, arr) {
        var channel = this.props.allChannels[key];
        return Object.keys(channel.emotes).map(function (emotekey, index) {
          var style = [];
          if (index == 0) {
            style.push("emoteStart");
          }
          if (index == channel.emotes.length - 1) {
            style.push("emoteEnd");
          }
          return (
            <Emote key={emotekey + ", " + key} emote={channel.emotes[emotekey]} template={template} style={style}/>
            );

        }, this);
      }, this)}
    </div>
  }
})



const mapStateToProps = (state) => {
  return {
    usableChannelKeys: Object.keys(state.subscriberData.channels).slice(0,state.channel.channelCount),
    allChannels: state.subscriberData.channels,
    template: state.subscriberData.template
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

var VisibleEmotes = connect(mapStateToProps, mapDispatchToProps)(EmotesList);





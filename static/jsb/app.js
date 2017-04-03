const {connect} = ReactRedux;

var s; // for console debugging

function startApp() {
  const { Provider } = ReactRedux;
  const { createStore } = Redux;

  s = createStore(reducers);
  
  const render = () => { ReactDOM.render(
    (<Provider store={s}>
      <App/>
    </Provider>),
    document.getElementById('content')
  );};
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

var App = React.createClass({
  getInitialState: function() {
    return {channels:{}, template: {}};
  },
  
  render: function() {
    var store = this.context.store;
    var state = store.getState();

    document.body.style.backgroundColor = store.getState().backgroundColor.color;
    return (
        <div>
          <h1 ref="splash" className="splash">
            Emotemon
          </h1>
          <div id="header">
            <BackgroundColorChooser />
            <ChannelIncrement />
          </div>
          <VisibleEmotesList />

        </div>
      );
  }
});

App.contextTypes = {
  store: React.PropTypes.object,
}
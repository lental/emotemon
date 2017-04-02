
var s; // for console debugging

function startApp() {
  const { createStore } = Redux;
  s = createStore(AppStore);
  const render = () => {
    ReactDOM.render(
    (<AppPage store={s}/>),
    document.getElementById('content')
    );
  };
  s.subscribe(render);
  render();
}

var AppStore = (state = {channelCount:100}, action) => {
    switch (action.type) {
      case "INCREMENT":
        state.channelCount += 100;
        break;
      default:
    }
    return state;
  };

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
    var count = this.state.farthest;
    return (
        <div>
          <h1 ref="splash" className="splash">
          </h1>
          <div id="channel-container">
          { Object.keys(this.state.channels).map(function (key, index, arr) {
            if (index > this.props.store.getState().channelCount) return;
            return Object.keys(this.state.channels[key].emotes).map(function (emotekey) {
            return (
              <Emote key={emotekey + ", " + key} emote={this.state.channels[key].emotes[emotekey]} template={this.state.template}/>
              );

            }, this);
        }, this)}
          </div>
        </div>
      );
  }
});

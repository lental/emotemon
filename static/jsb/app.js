var Channel = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    channel: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    return null;
  },


  componentDidMount: function() {
  }, 
  
  render: function() {
    return (
        <div className="channel">
          <div>{this.props.channel.title}</div>
          <div>{this.props.channel.channel_id}</div>
        </div>
      );
  }
});

var AppPage = React.createClass({
  propTypes: {
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
    return (
        <div>
          <h1 ref="splash" className="splash">
          </h1>
          <div id="channel-container">
          { Object.keys(this.state.channels).map(function (key) {
          return (
            <Channel key={key} name={key} channel={this.state.channels[key]}/>
            );
        }, this)}
          </div>
        </div>
      );
  }
  // <Channel name={key} channel={this.state.channels.key} />
});
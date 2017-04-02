
var Emote = React.createClass({
  propTypes: {
    template: React.PropTypes.object.isRequired,
    emote: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    return null;
  },


  componentDidMount: function() {
  }, 
  
  render: function() {
    return (
        <div className="emote">
          <img src={this.props.template.small.replace("{image_id}", this.props.emote.image_id)} width="10px" height="10px"/>
        </div>
      );
  }
});
var Channel = React.createClass({
  propTypes: {
    template: React.PropTypes.object.isRequired,
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
          

          { Object.keys(this.props.channel.emotes).map(function (key) {
          return (
            <Emote key={key} emote={this.props.channel.emotes[key]} template={this.props.template}/>
            );
        }, this)}
        </div>
      );
  }
});

var AppPage = React.createClass({
  propTypes: {
  },
  getInitialState: function() {
    return {channels:{}, template: {}, farthest: 100};
  },


  componentDidMount: function() {

    $.getJSON('/vendor/subscriber.json', function(data) {
      this.setState({"template": data.template, "channels": data.channels});
    }.bind(this));
      setTimeout(this.incrementFarthest, 500);
  }, 
  
  incrementFarthest: function() {
    if (this.state.farthest < 2000) {
      this.setState({"farthest":this.state.farthest + 100});
      setTimeout(this.incrementFarthest, 1000);
    } else {
      console.log ("iterated to farthest" + this.state.farthest);
    }
  },
  render: function() {
    var count = this.state.farthest;
    return (
        <div>
          <h1 ref="splash" className="splash">
          </h1>
          <div id="channel-container">
          { Object.keys(this.state.channels).map(function (key, index, arr) {
            if (index > this.state.farthest) return;
            return Object.keys(this.state.channels[key].emotes).map(function (emotekey) {
            return (
              <Emote key={emotekey + ", " + key} emote={this.state.channels[key].emotes[emotekey]} template={this.state.template}/>
              );

            }, this);
            //return (
            //  <Channel key={key} name={key} channel={this.state.channels[key]} template={this.state.template}/>
            //  );
        }, this)}
          </div>
        </div>
      );
  }
  // <Channel name={key} channel={this.state.channels.key} />
});
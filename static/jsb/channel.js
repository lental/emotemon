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
var Emote = React.createClass({
  propTypes: {
    template: React.PropTypes.object.isRequired,
    emote: React.PropTypes.object.isRequired,
    style: React.PropTypes.array.isRequired,
  },
  getInitialState: function() {
    return null;
  },


  componentDidMount: function() {
  }, 
  
  render: function() {
    return (
        <div className={"emote " + this.props.style.join(" ")}>
          <img src={this.props.template.small.replace("{image_id}", this.props.emote.image_id)} width="10px" height="10px"/>
        </div>
      );
  }
});
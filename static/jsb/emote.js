var Emote = React.createClass({
  propTypes: {
    template: React.PropTypes.object.isRequired,
    emote: React.PropTypes.object.isRequired,
    style: React.PropTypes.array.isRequired,
  },  
  render: function() {
    return (
        <div ref="wrapperDiv"
        		className={"emote emoteDisabled " + this.props.style.join(" ")}
        		onMouseOver={this.mouseOver}
        		onMouseOut={this.mouseOut} >
          <img src={this.props.template.small.replace("{image_id}", this.props.emote.image_id)} width="10px" height="10px"/>
        </div>
      );
  },

  mouseOver: function() {
  	$(this.refs.wrapperDiv).removeClass("emoteDisabled");
  },
  mouseOut: function() {
  	$(this.refs.wrapperDiv).addClass("emoteDisabled");
  },
});


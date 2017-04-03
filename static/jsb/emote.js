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
        <div ref={(d) => { this.wrapperDiv = d;}}
        		className={"emote emoteDisabled " + this.props.style.join(" ")}
        		onMouseOver={this.mouseOver}
        		onMouseOut={this.mouseOut} >
          <img src={this.props.template.small.replace("{image_id}", this.props.emote.image_id)} width="10px" height="10px"/>
        </div>
      );
  },


    // 2. bind it with fat arrows.
    mouseOver: function() {
    	$(this.wrapperDiv).removeClass("emoteDisabled");
    },
    mouseOut: function() {
    	$(this.wrapperDiv).addClass("emoteDisabled");
    },
});
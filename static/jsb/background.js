
var BackgroundColorChooser = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
  }, 
  
  render: function() {
    var count = this.state.farthest;
    return (
        <div>
            <input type="text" name="lname" id="bg-color" ref={node => { this.input = node;}} placeholder="Background Color" />&nbsp;
            <button id="bg-color-submit" onClick={() => {
              this.props.store.dispatch({type:"CHANGE_COLOR", color:this.input.value});
            }}>Change</button>
        </div>
      );
  }
});

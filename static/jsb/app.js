var AppPage = React.createClass({
  propTypes: {
  },
  getInitialState: function() {
    return null;
  },


  componentDidMount: function() {
  }, 
  
  render: function() {
    return (
        <div>
          <h1 ref="splash" className="splash">
            App Rendering
          </h1>
        </div>
      );
  }
});
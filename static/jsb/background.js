var backgroundColor = (state = {color:"#FFD"}, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {color: action.color};
    default:
  }
  return state;
};

var changeColorAction = (color) => {
  return {type:"CHANGE_COLOR", color:color};
}

let BackgroundColorChooser = ({
  dispatch
}) => (
  <div className="headerElement">
      <input type="text" name="lname" id="bg-color" placeholder="Background Color" />&nbsp;
      <button id="bg-color-submit" onClick={() => { dispatch(changeColorAction($("#bg-color").val())); }}>Change</button>
  </div>
);
BackgroundColorChooser = connect()(BackgroundColorChooser)

/**
A compomnent that changes background color based on state changes
**/
const mapStateToBgColorProps = (state) => {
  return {
    color: state.backgroundColor.color
  };
}
let BackgroundChangeExecutor = ({
  dispatch, color
}) => {
  document.body.style.backgroundColor = color;
  return null;
};
BackgroundChangeExecutor = connect(mapStateToBgColorProps, null)(BackgroundChangeExecutor)
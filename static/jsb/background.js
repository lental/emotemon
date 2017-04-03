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
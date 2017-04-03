
const BackgroundColorChooser = ({
  onClick
}) => (
  <div className="headerElement">
      <input type="text" name="lname" id="bg-color" placeholder="Background Color" />&nbsp;
      <button id="bg-color-submit" onClick={onClick}>Change</button>
  </div>
);


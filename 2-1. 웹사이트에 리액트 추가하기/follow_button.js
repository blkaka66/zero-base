// React Component!
// Follow <-> following
function FollowButton() {
  return React.createElement("div", {}, "Follow");
}
const domContainer = document.querySelector('#follow_button_container');

ReactDom.render(React.createElement(FollowButton),domContainer);
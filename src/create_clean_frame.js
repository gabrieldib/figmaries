// support fn()
function clone(val) {
  return JSON.parse(JSON.stringify(val));
}

function create_clean_frame() {
  let the_frame = figma.createFrame();
  let Fills = clone(the_frame.fills);
  Fills.pop();
  the_frame.fills = Fills;
  return the_frame;
}
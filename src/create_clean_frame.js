// support fn()
function clone(val) {
  return JSON.parse(JSON.stringify(val));
}

// my old method, no shame on the beginner ways
function create_clean_frame() {
  let the_frame = figma.createFrame();
  let Fills = clone(the_frame.fills);
  Fills.pop();
  the_frame.fills = Fills;
  return the_frame;
}

//alternatively
function create_cleanest_frame() {
  let the_frame = figma.createFrame()
  the_frame.fills = []
}
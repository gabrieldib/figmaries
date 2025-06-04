function convert_rgb_to_hex(red, green, blue) {
  function component_to_hex(value) {
      const hex_value = value.toString(16);
      return hex_value.length === 1 ? '0' + hex_value : hex_value;
  }
  
  return '#' +
  component_to_hex(Math.floor(red)).toUpperCase() +
  component_to_hex(Math.floor(green)).toUpperCase() +
  component_to_hex(Math.floor(blue)).toUpperCase();
}

/* example usage

    convert_rgb_to_hex(128, 60, 92)

    expected output: '#803C5C'

*/

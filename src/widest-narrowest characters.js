const single_byte_map = {
  0x80: 0x20AC, 0x82: 0x201A, 0x83: 0x0192, 0x84: 0x201E,
  0x85: 0x2026, 0x86: 0x2020, 0x87: 0x2021, 0x88: 0x02C6,
  0x89: 0x2030, 0x8A: 0x0160, 0x8B: 0x2039, 0x8C: 0x0152,
  0x8E: 0x017D, 0x91: 0x2018, 0x92: 0x2019, 0x93: 0x201C,
  0x94: 0x201D, 0x95: 0x2022, 0x96: 0x2013, 0x97: 0x2014,
  0x98: 0x02DC, 0x99: 0x2122, 0x9A: 0x0161, 0x9B: 0x203A,
  0x9C: 0x0153, 0x9E: 0x017E, 0x9F: 0x0178,
};

function get_windows_1252_char() {
  // build a byte array [0,1,2,…,255]
  let byte_stream = new Uint8Array(256);
  for (let i = 0; i < 256; i++) {
      byte_stream[i] = i;
  }

  const char_stream = [];
  
  // for each byte, look up its Unicode code point
  //  - bytes 0x00–0x7F and 0xA0–0xFF map directly to 0x0000–0x00FF
  //  - bytes 0x80–0x9F use our single_byte_map table
  for (let index = 0; index < byte_stream.length; index++) {
      const byte = byte_stream[index];
      const code_point = 
          byte >= 0x80 && byte <= 0x9F
          ? (single_byte_map[byte] ?? byte)
          : byte;

      const char = String.fromCodePoint(code_point);
      char_stream.push(char);
  }
  byte_stream = null;
  return char_stream
}

function get_widest_and_narrowest_char(family, style, size) {
  let widest = 0;
  let narrowest = 1000; // a big number, so it will be replaced by the first character width
  const char_map = get_windows_1252_char();
  for (let char_index = 0; char_index < char_map.length; char_index++) {
      const character = figma.createText();
      character.fontName = { family: family, style: style };
      character.fontSize = size; // arbitrary size for measurement
      character.characters = char_map[char_index];
      character.textAutoResize = 'WIDTH_AND_HEIGHT';
      character.lineHeight = { unit: 'AUTO' }; // add some space to the height
      character.x = 1000; // move it out of view
      character.y = 1000; // move it out of view

      if (character.width > widest) {
          widest = character.width;
      }
      if (character.width < narrowest) {
          narrowest = character.width;
      }
      
      character.remove();
  }
  return { widest, narrowest };
}

let font_family = "Inter";
let font_style = "Regular";
let font_size = 30;

await figma.loadFontAsync({ family: font_family, style: font_style })

console.log(get_widest_and_narrowest_char(font_family, font_style, font_size))
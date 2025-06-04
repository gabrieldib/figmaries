await figma.loadFontAsync({ family: "Inter", style: "Regular" })

const text_node = figma.createText()
text_node.x = 0; text_node.y = 0
text_node.characters = 'Quick brown fox'

temp_array = [] // because an anonymous array may not work in certain cases. eg: figma.flatten([text_node], parent)
temp_array.push(text_node)

figma.flatten(temp_array, figma.currentPage)    
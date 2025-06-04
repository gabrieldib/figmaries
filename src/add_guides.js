function add_new_guide(guide) {
  figma.currentPage.guides = figma.currentPage.guides.concat(guide)
}

const NUM_GUIDES = 16
const GUIDE_OFFSET = 100

for (let i = 0; i < NUM_GUIDES; i++) {
    add_new_guide({axis: 'X', offset: i * GUIDE_OFFSET})    
}

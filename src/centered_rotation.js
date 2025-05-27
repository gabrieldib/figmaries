function sum_sin(a,b) {
    return Math.sin(a)*Math.cos(b) + Math.cos(a)*Math.sin(b)
}

function sum_cos(a,b) {
    return Math.cos(a)*Math.cos(b) - Math.sin(a)*Math.sin(b)
}

function angle_to_radians(a) {
    return (a * Math.PI)/180
}

function get_center(node) {
    const a   = node.relativeTransform[0][0]
    const b   = node.relativeTransform[0][1]
    const c   = node.relativeTransform[1][0]
    const d   = node.relativeTransform[1][1]
    const tx  = node.relativeTransform[0][2] 
    const ty  = node.relativeTransform[1][2] 
    const Ocx = node.width / 2
    const Ocy = node.height / 2

    const Cx = Math.round(a*Ocx + b*Ocy + tx,2)
    const Cy = Math.round(c*Ocx + d*Ocy + ty,2)

    return [Cx, Cy]
}

function new_tx_ty(node, new_angle) {
    const ca = angle_to_radians(node.rotation)
    const na = angle_to_radians(new_angle)

    const [center_x, center_y] = get_center(node)
    const x = node.x
    const y = node.y

    const cos_na = Math.cos(na)
    const sin_na = Math.sin(na)
    const cos_fa = Math.cos(na+ca)
    const sin_fa = Math.sin(na+ca)
    
    const new_tx =  cos_na * x +  y * sin_na - center_y * sin_na - center_x * cos_na + center_x
    const new_ty = -sin_na * x + center_x * sin_na +  y * cos_na - center_y * cos_na + center_y

    node.relativeTransform = [
        [ cos_fa, sin_fa, new_tx],
        [-sin_fa, cos_fa, new_ty]
    ]
}

const rotate_by = 30
const rotate_by_rad = angle_to_radians(rotate_by)

const node = figma.currentPage.selection[0]

new_tx_ty(node, rotate_by)



import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js'

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshNormalMaterial()
const mesh     = new THREE.Mesh(geometry,material)
scene.add(mesh)

// Sizes
const sizes = {    width:window.innerWidth,     height:window.innerHeight }

// Camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100)
camera.position.z = 5
scene.add(camera)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(sizes.width,sizes.height)
renderer.setAnimationLoop( animate )
document.body.appendChild(renderer.domElement);

function animate(time){
//    requestAnimationFrame(animate)
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;
    renderer.render(scene,camera)
}


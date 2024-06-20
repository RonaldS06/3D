import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Pane } from "https://cdn.skypack.dev/tweakpane@3.1.7";

const scene = new THREE.Scene()

const pane = new Pane();

const RADIO = 1;

//Markers objectArray
const Markers = [
    {
        name: "Buenos Aires",
        lat: -34.60,
        lng: -58.38
    },
    {
        name: "Lima",
        lat: -12.04,
        lng: -77.04
    }
]
const latLngVec3 = (radius, { lat, lng }) => {
    return new THREE.Vector3().setFromSphericalCoords(
        radius,
        THREE.MathUtils.degToRad(225 - lat),
        THREE.MathUtils.degToRad(135 - lng)
    )
}


const mouse = {
    x: 0,
    y: 0,
}


//console.log(scene)
//Creamos un objeto con el ancho y alto de nuestro viewport
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
//Camara
//modificamos el valor de PerspectiveCamera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 3
camera.lookAt(0, 0, 0)
const cameraGroup = new THREE.Group()
cameraGroup.add(camera)
scene.add(cameraGroup)


//Texturas
const textureLoader = new THREE.TextureLoader();

const colorTexture = textureLoader.load("https://assets.codepen.io/4698468/2k_earth_daymap.jpg")
const normalTexture = textureLoader.load("https://assets.codepen.io/4698468/8k_earth_normal_map_compress.jpg")
const aoTexture = textureLoader.load("https://assets.codepen.io/4698468/2k_earth_specular_map.jpg")
const cloudsTexture = textureLoader.load("https://assets.codepen.io/4698468/2k_earth_clouds.jpg")

//Mesh - Geometrias
const planeGeometry = new THREE.SphereGeometry(RADIO, 60); //planetGeometry...
const planeMaterial = new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    aoMap: aoTexture
});

planeMaterial.aoMapIntensity = 1
planeMaterial.normalScale = new THREE.Vector2(10, 10)
const earth = new THREE.Mesh(planeGeometry, planeMaterial) //Añadimos geometria y material
scene.add(earth)

const cloudsGeometry = new THREE.SphereGeometry(RADIO + 0.01, 60)
const cloudsMaterial = new THREE.MeshStandardMaterial({
    alphaMap: cloudsTexture,
    transparent: true
})
const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial) //Añadimos geometria y material
scene.add(clouds)

const markersGroup = new THREE.Group()
const markersGeometry = new THREE.SphereGeometry(0.02, 30)
const markersMaterial = new THREE.MeshBasicMaterial()

Markers.map(marker => {
    const markerMesh = new THREE.Mesh(markersGeometry, markersMaterial)
    markerMesh.name = marker.name //opcional
    const markerPosition = latLngVec3(RADIO, { lat: marker.lat, lng: marker.lng })
    markerMesh.position.set(...markerPosition)
    markersGroup.add(markerMesh)
})
scene.add(markersGroup)

//Luces
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight.position.z = 5
scene.add(directionalLight)

//Render
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setClearColor("#111")
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)

//Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enablePan = false //No se despliega con click
controls.enableZoom = false
controls.enableDamping = true;


const axesHelper = new THREE.AxesHelper(3)
//scene.add(axesHelper)

const helper = new THREE.DirectionalLightHelper(directionalLight, 5)
//scene.add( helper );

//Resize
window.addEventListener("resize", () => {
    //actualizamos el ancho y alto de la ventana
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    //actualizamos la camara
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    //actualizamos el render
    renderer.setSize(sizes.width, sizes.height)
})

window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX / sizes.width - 0.15
    mouse.y = -1 * (event.clientY / sizes.height - 0.15)
})

const clock = new THREE.Clock()

function animated() {

    const elapsedTime = clock.getElapsedTime()
    earth.rotation.y = elapsedTime / 30
    clouds.rotation.y = elapsedTime / -40
    markersGroup.rotation.y = elapsedTime / 30

    //mouse effect
    cameraGroup.position.x += (mouse.x - cameraGroup.position.x) * 1.05;
    cameraGroup.position.y += (mouse.y - cameraGroup.position.y) * 1.05;

    //cameraGroup.position.set(mouse.x, mouse.y, 3)

    controls.update(); //efecto smooth
    requestAnimationFrame(animated)
    renderer.render(scene, camera)
}

animated()

//--------------------------------------------




/* 

window.addEventListener('dbclick', () => {
    if (!document.fullscreenElement) {
        renderer.domElement.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
})
 */


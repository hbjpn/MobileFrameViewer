//import * as THREE from "https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js";
//import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three-orbitcontrols@2.110.3/OrbitControls.min.js";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

var scene;
var objects = [];
let viewW = 1000;
let viewH = 800;

function prepare()
{
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1020);

    const camera = new THREE.PerspectiveCamera(
    75,
    viewW / viewH,
    0.1,
    1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(viewW, viewH);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(2, 2, 3);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    var axisHelper = new THREE.AxesHelper( 5 );
    scene.add( axisHelper );

    const raycaster = new THREE.Raycaster();
    const mouse     = new THREE.Vector2();
    renderer.domElement.addEventListener('mousemove', (e) => {
        mouse.x =  (e.offsetX / renderer.domElement.clientWidth)  * 2 - 1;
        mouse.y = -(e.offsetY / renderer.domElement.clientHeight) * 2 + 1;
    });

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(objects);
        objects.forEach((obj) => {
            //obj.material.color.setHex(colors.normal);
            obj.scale.setScalar(1);
        });

        if (intersects.length > 0) {
            const hit = intersects[0].object;
            //hit.material.color.setHex(colors.hover);
            hit.scale.setScalar(1.1); 
            document.getElementById("infoarea").value = hit.info;
        }
        renderer.render(scene, camera);
    }

    animate();
}

window.addEventListener("DOMContentLoaded", () => {
    prepare();
});

window.addEventListener("resize", () => {

  camera.aspect = viewW / viewH;
  camera.updateProjectionMatrix();

  renderer.setSize(viewW, viewH);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.clear3D = ()=>{
    for(let o of objects){
        scene.remove(o);
    }
    objects = [];
};

window.drawRe3D = (color, k, l, zindex, txt, txtColor)=>{
    const rew = 1;
    const reh = 1;
    const rez = 0.2;
    const geometry = new THREE.BoxGeometry(rew-0.05, reh-0.05, 0.1);
    const material = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.2,
        roughness: 0.35
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(rew*l, reh*k, rez*zindex);
    cube.info = txt;
    scene.add(cube);
    objects.push(cube);
};
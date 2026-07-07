//import * as THREE from "https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js";
//import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three-orbitcontrols@2.110.3/OrbitControls.min.js";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

var scene;
var objects = [];

function prepare()
{
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1020);

    const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.body.appendChild(renderer.domElement);

    // カメラコントローラーを作成
    const controls = new OrbitControls(camera, renderer.domElement);

    /*
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
    color: 0x4ade80,
    metalness: 0.2,
    roughness: 0.35
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    */

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(2, 2, 3);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        /*
        const t = clock.getElapsedTime();
        cube.rotation.x = t * 0.7;
        cube.rotation.y = t * 1.0;
        cube.position.y = Math.sin(t * 1.5) * 0.15;
        */
        renderer.render(scene, camera);
    }

    animate();
}

window.addEventListener("DOMContentLoaded", () => {
    prepare();
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
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
    scene.add(cube);
    objects.push(cube);
};
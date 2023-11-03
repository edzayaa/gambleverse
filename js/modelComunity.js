import * as THREE from 'three';


import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let camera, scene, renderer;

const clock = new THREE.Clock();
const cards=[new THREE.Mesh()];
init();
animate();

function init() {

	const container = document.getElementById("model_1");

	camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 1, 2000 );
	camera.position.set( 0, -35, 0 );

	scene = new THREE.Scene();

	const ambient=new THREE.AmbientLight( 0xffffff, 3 );
	scene.add(ambient);
	const directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
	directionalLight.position.set( - 1, 0, 1 ).normalize();
	scene.add( directionalLight );
	const directionalLight1 = new THREE.DirectionalLight( 0xffffff, 5 );
	directionalLight1.position.set( - 0, -1, 0 ).normalize();
	scene.add( directionalLight1 );
	// scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

	// ground
	// const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
	// mesh.rotation.x = - Math.PI / 2;
	// mesh.receiveShadow = true;
	// scene.add( mesh );

	// const grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
	// grid.material.opacity = 0.2;
	// grid.material.transparent = true;
	// scene.add( grid );

	// model
	const loader = new GLTFLoader();
	loader.load( '3D/model_5.glb', function ( object ) {
cards[0].traverse((res)=>{
	res.is
})
		const model = object.scene;
		console.log(model);
		model.traverse(res=>{
			if (res.isMesh) {
				cards.push(res);
				res.castShadow=true;
				res.receiveShadow=true;
			}
		})
		//model.scale.set(new THREE.Vector3(1,1,1));
		scene.add( model );

	} );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( container.offsetWidth, container.offsetHeight );
	container.appendChild( renderer.domElement );
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.setClearColor( 0x000000, 0 ); // the default

	const controls = new OrbitControls( camera, renderer.domElement );
	controls.target.set( 0, 0, 0 );
	controls.update();

	window.addEventListener( 'resize', onWindowResize );


}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {

	requestAnimationFrame( animate );

	const delta = clock.getDelta();
	cards.forEach(e=>{
		e.rotateY(delta);
	})

	renderer.render( scene, camera );


}

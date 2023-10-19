
const canvas1 = document.getElementById("model_1"); // Get the canvas element
const engine1 = new BABYLON.Engine(canvas1, true); // Generate the BABYLON 3D engine
const createScene1 = function () {
	// Creates a basic Babylon Scene object
	const scene = new BABYLON.Scene(engine1);
	// // Creates and positions a free camera
	 const camera = new BABYLON.FreeCamera("camera1", 
	 	new BABYLON.Vector3(0, 5, -8), scene);
	// // Targets the camera to scene origin
	 camera.setTarget(BABYLON.Vector3.Zero());
	// // This attaches the camera to the canvas
	 camera.attachControl(canvas1, true);
	// Creates a light, aiming 0,1,0 - to the sky
	 const light = new BABYLON.HemisphericLight("light", 
	 	new BABYLON.Vector3(0, 1, 0), scene);
	// // Dim the light a small amount - 0 to 1
	 light.intensity = 0.7;
	// Append glTF model to scene.
	
	return scene;
};
const scene1 = createScene1(); //Call the createScene function
scene1.clearColor = new BABYLON.Color4(0, 0, 0, 0);


BABYLON.SceneLoader.Append("3D/", "model_2.glb", scene1, function (scene) {
	// Create a default arc rotate camera and light.
	scene.createDefaultCameraOrLight(true, true, true);

	// The default camera looks at the back of the asset.
	// Rotate the camera by 180 degrees to the front of the asset.
	scene.activeCamera.alpha += Math.PI*1.01;
	
});


// Register a render loop to repeatedly render the scene
engine1.runRenderLoop(function () {
	scene1.render();
});

const canvas2 = document.getElementById("model_2"); // Get the canvas element
const engine2 = new BABYLON.Engine(canvas2, true); // Generate the BABYLON 3D engine
const createScene2 = function () {
	// Creates a basic Babylon Scene object
	const scene = new BABYLON.Scene(engine2);
	// // Creates and positions a free camera
	 const camera = new BABYLON.FreeCamera("camera1", 
	 	new BABYLON.Vector3(0, 5, -8), scene);
	// // Targets the camera to scene origin
	 camera.setTarget(BABYLON.Vector3.Zero());
	// // This attaches the camera to the canvas
	 camera.attachControl(canvas2, true);
	// Creates a light, aiming 0,1,0 - to the sky
	 const light = new BABYLON.HemisphericLight("light", 
	 	new BABYLON.Vector3(0, 1, 0), scene);
	// // Dim the light a small amount - 0 to 1
	 light.intensity = 0.7;
	// Append glTF model to scene.
	
	return scene;
};
const scene2 = createScene2(); //Call the createScene function
scene2.clearColor = new BABYLON.Color4(0, 0, 0, 0);


BABYLON.SceneLoader.Append("3D/", "model_2.glb", scene2, function (scene) {
	// Create a default arc rotate camera and light.
	scene.createDefaultCameraOrLight(true, true, true);

	// The default camera looks at the back of the asset.
	// Rotate the camera by 180 degrees to the front of the asset.
	scene.activeCamera.alpha += Math.PI*.85;
	
});


// Register a render loop to repeatedly render the scene
engine2.runRenderLoop(function () {
	scene2.render();
});


const canvas3 = document.getElementById("model_3"); // Get the canvas element
const engine3 = new BABYLON.Engine(canvas3, true); // Generate the BABYLON 3D engine
const createScene3 = function () {
	// Creates a basic Babylon Scene object
	const scene = new BABYLON.Scene(engine3);
	// Creates and positions a free camera
	const camera = new BABYLON.FreeCamera("camera1", 
		new BABYLON.Vector3(0, 5, -8), scene);
	// Targets the camera to scene origin
	camera.setTarget(BABYLON.Vector3.Zero());
	// This attaches the camera to the canvas
	camera.attachControl(canvas3, true);
	// Creates a light, aiming 0,1,0 - to the sky
	const light = new BABYLON.HemisphericLight("light", 
		new BABYLON.Vector3(0, 1, 0), scene);
	// Dim the light a small amount - 0 to 1
	light.intensity = 0.7;
	// Append glTF model to scene.
	
	return scene;
};
const scene3 = createScene3(); //Call the createScene function
scene3.clearColor = new BABYLON.Color4(0, 0, 0, 0);


BABYLON.SceneLoader.Append("3D/", "model_3.glb", scene3, function (scene) {
	// Create a default arc rotate camera and light.
	scene.createDefaultCameraOrLight(true, true, true);

	// The default camera looks at the back of the asset.
	// Rotate the camera by 180 degrees to the front of the asset.
	scene.activeCamera.alpha += Math.PI*.85;
	
});


// Register a render loop to repeatedly render the scene
engine3.runRenderLoop(function () {
	scene3.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
	engine2.resize();
	engine3.resize();
});
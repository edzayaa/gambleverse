
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

	// Creates a PointLight, aiming 0,1,0 - to the sky
	var pointLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(10, 85, 45), scene);
	// // Dim the light a small amount - 0 to 1
	pointLight.intensity = 240;
	pointLight.radius = 10

	// Change the color of the PointLight
    pointLight.diffuse = new BABYLON.Color3(87, 35, 100);
	//pointLight.specular = new BABYLON.Color3(87, 35, 100);

	console.log(pointLight);

	
	// Append glTF model to scene.
	BABYLON.SceneLoader.Append("3D/", "model_2.glb", scene, function (mesh) {
		// Create a default arc rotate camera and light.
		mesh.createDefaultCamera(true, true, true);
	
		// The default camera looks at the back of the asset.
		// Rotate the camera by 180 degrees to the front of the asset.
		mesh.activeCamera.alpha += Math.PI*1.01;
	
		//scaling
		mesh.meshes[0].scaling = new BABYLON.Vector3(1.15, 1.15, 1.15);
		mesh.meshes[1].scaling = new BABYLON.Vector3(1.15, 1.15, 1.15);
		mesh.meshes[2].scaling = new BABYLON.Vector3(1.15, 1.15, 1.15);
		mesh.meshes[3].scaling = new BABYLON.Vector3(1.15, 1.15, 1.15);
		mesh.meshes[4].scaling = new BABYLON.Vector3(1.15, 1.15, 1.15);
	
		//rotation
		mesh.meshes[0].rotation = new BABYLON.Vector3(0, 0.2, 0.2);
		mesh.meshes[1].rotation = new BABYLON.Vector3(0, 0.2, 0.2);
		mesh.meshes[2].rotation = new BABYLON.Vector3(0, 0.2, 0.2);
		mesh.meshes[3].rotation = new BABYLON.Vector3(0, 0.2, 0.2);
		mesh.meshes[4].rotation = new BABYLON.Vector3(0, 0.2, 0.2);

		//material metallic
		mesh.materials[0]._metallic = 0.95;
		mesh.materials[1]._metallic = 0.95;
		mesh.materials[2]._metallic = 0.95;
		mesh.materials[3]._metallic = 0.95;
		
		/* -------------Animation---------- */

		//Animate the Wheels
		const animWheel = new BABYLON.Animation("wheelAnimation", "meshes[0].rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		const wheelKeys = []; 
		//At the animation key 0, the value of rotation.y is 0
		wheelKeys.push({
			frame: 0,
			value: 0
		});
		//At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
		wheelKeys.push({
			frame: 30,
			value: 2 * Math.PI
		});
		//set the keys
		animWheel.setKeys(wheelKeys);
		mesh.meshes[0].animations = [];
		mesh.meshes[0].animations.push(animWheel);
		scene.beginAnimation(mesh.meshes[0], 0, 30, true);

		//Animate the Wheels
		const animWheel1 = new BABYLON.Animation("wheelAnimation1", "meshes[1].rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		const wheelKeys1 = []; 
		//At the animation key 0, the value of rotation.y is 0
		wheelKeys1.push({
			frame: 0,
			value: 0
		});
		//At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
		wheelKeys1.push({
			frame: 30,
			value: 2 * Math.PI
		});
		//set the keys
		animWheel1.setKeys(wheelKeys1);
		mesh.meshes[1].animations = [];
		mesh.meshes[1].animations.push(animWheel1);
		scene.beginAnimation(mesh.meshes[1], 0, 30, true);

		//Animate the Wheels
		const animWheel2 = new BABYLON.Animation("wheelAnimation2", "meshes[2].rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		const wheelKeys2 = []; 
		//At the animation key 0, the value of rotation.y is 0
		wheelKeys2.push({
			frame: 0,
			value: 0
		});
		//At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
		wheelKeys2.push({
			frame: 30,
			value: 2 * Math.PI
		});
		//set the keys
		animWheel2.setKeys(wheelKeys2);
		mesh.meshes[2].animations = [];
		mesh.meshes[2].animations.push(animWheel2);
		scene.beginAnimation(mesh.meshes[2], 0, 30, true);

		//Animate the Wheels
		const animWheel3 = new BABYLON.Animation("wheelAnimation3", "meshes[3].rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		const wheelKeys3 = []; 
		//At the animation key 0, the value of rotation.y is 0
		wheelKeys3.push({
			frame: 0,
			value: 0
		});
		//At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
		wheelKeys3.push({
			frame: 30,
			value: 2 * Math.PI
		});
		//set the keys
		animWheel3.setKeys(wheelKeys3);

		mesh.meshes[3].animations = [];
		mesh.meshes[3].animations.push(animWheel3);
		scene.beginAnimation(mesh.meshes[3], 0, 30, true);

		//Animate the Wheels
		const animWheel4 = new BABYLON.Animation("wheelAnimation4", "meshes[4].rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		const wheelKeys4 = []; 
		//At the animation key 0, the value of rotation.y is 0
		wheelKeys4.push({
			frame: 0,
			value: 0
		});
		//At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
		wheelKeys4.push({
			frame: 30,
			value: 2 * Math.PI
		});
		//set the keys
		animWheel4.setKeys(wheelKeys4);

		//Link this animation to a wheel
		mesh.meshes[4].animations = [];
		mesh.meshes[4].animations.push(animWheel4);
		scene.beginAnimation(mesh.meshes[4], 0, 30, true);

	});
	return scene;
};
const scene1 = createScene1(); //Call the createScene function
scene1.clearColor = new BABYLON.Color4(0, 0, 0, 0);
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
	 light.intensity = 0.3;
	// Append glTF model to scene.

	// Creates a PointLight, aiming 0,1,0 - to the sky
	var pointLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(5, 70, 25), scene);
	// // Dim the light a small amount - 0 to 1
	pointLight.intensity = 100;
	pointLight.radius = 10

	// Change the color of the PointLight
    pointLight.diffuse = new BABYLON.Color3(87, 35, 100);
	//pointLight.specular = new BABYLON.Color3(87, 35, 100);

	// Append glTF model to scene.

	BABYLON.SceneLoader.Append("3D/", "model_2.glb", scene, function (sceneMesh) {
		// Create a default arc rotate camera and light.
		sceneMesh.createDefaultCamera(true, true, true);
	
		// The default camera looks at the back of the asset.
		// Rotate the camera by 180 degrees to the front of the asset.
		sceneMesh.activeCamera.alpha += Math.PI*1.01;
	
		//scaling
		sceneMesh.meshes[0].scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
		sceneMesh.meshes[1].scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
		sceneMesh.meshes[2].scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
		sceneMesh.meshes[3].scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
		sceneMesh.meshes[4].scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
	
		//rotation
		sceneMesh.meshes[0].rotation = new BABYLON.Vector3(-0.1, 0, -0.01);
		sceneMesh.meshes[1].rotation = new BABYLON.Vector3(-0.1, 0, -0.01);
		sceneMesh.meshes[2].rotation = new BABYLON.Vector3(-0.1, 0, -0.01);
		sceneMesh.meshes[3].rotation = new BABYLON.Vector3(-0.1, 0, -0.01);
		sceneMesh.meshes[4].rotation = new BABYLON.Vector3(-0.1, 0, -0.01);
	
		//position
		sceneMesh.meshes[0].position = new BABYLON.Vector3(40, -10, -0);
		sceneMesh.meshes[1].position = new BABYLON.Vector3(40, -10, -0);
		sceneMesh.meshes[2].position = new BABYLON.Vector3(40, -10, -0);
		sceneMesh.meshes[3].position = new BABYLON.Vector3(40, -10, -0);
		sceneMesh.meshes[4].position = new BABYLON.Vector3(40, -10, -0);

		//material metallic
		sceneMesh.materials[0]._metallic = 0.95;
		sceneMesh.materials[1]._metallic = 0.95;
		sceneMesh.materials[2]._metallic = 0.95;
		sceneMesh.materials[3]._metallic = 0.95;
	
		console.log(sceneMesh);
		
	});
	
	
	return scene;
};
const scene2 = createScene2(); //Call the createScene function
scene2.clearColor = new BABYLON.Color4(0, 0, 0, 0);




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
	/* // Creates a light, aiming 0,1,0 - to the sky
	const light = new BABYLON.HemisphericLight("light", 
		new BABYLON.Vector3(0, 1, 0), scene);
	// Dim the light a small amount - 0 to 1
	light.intensity = 0.7;
	// Append glTF model to scene. */

	// Creates a light, aiming 0,1,0 - to the sky
	var pointLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 1, 0), scene);
	// // Dim the light a small amount - 0 to 1
	pointLight.intensity = 0.7;
	// Append glTF model to scene.
	BABYLON.SceneLoader.Append("3D/", "model_3.glb", scene, function (sceneMesh) {
		// Create a default arc rotate camera and light.
		sceneMesh.createDefaultCamera(true, true, true);
	
		// The default camera looks at the back of the asset.
		// Rotate the camera by 180 degrees to the front of the asset.
		sceneMesh.activeCamera.alpha += Math.PI*1.01;
		
	});
	return scene;
};
const scene3 = createScene3(); //Call the createScene function
scene3.clearColor = new BABYLON.Color4(0, 0, 0, 0);





// Register a render loop to repeatedly render the scene
engine3.runRenderLoop(function () {
	scene3.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
	engine1.resize();
	engine2.resize();
	engine3.resize();
});
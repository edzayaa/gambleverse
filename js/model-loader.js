
var active1=false,active2=false,active3=false;
var scrollDir,scrollAct=window.scrollY;
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		active1=true;
		return; // if we added the class, exit the function
	  }
	  active1=false;
	  // We're not intersecting, so remove the class!
	  //bunny.classList.remove('bunny-animation');
	});
});
  
observer.observe(document.querySelector('.model-1-loader'));

const observer2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		active2=true;
		return; // if we added the class, exit the function
	  }
	  active2=false;
	});
});
  
observer2.observe(document.querySelector('.model-2-loader'));

const observer3 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		active3=true;
		return; // if we added the class, exit the function
	  }
	  active3=false;
	});
});
  
observer3.observe(document.querySelector('.model-3-loader'));

document.addEventListener('scroll',()=>{
	if (scrollAct>window.scrollY) {
		scrollDir=1;
	}else{
		scrollDir=-1
	}
	scrollAct=window.scrollY;
});
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
    pointLight.diffuse = new BABYLON.Color3(106, 94, 209);

	// Creates a PointLight, aiming 0,1,0 - to the sky
	var pointLight2 = new BABYLON.PointLight("pointLight2", new BABYLON.Vector3(-10, 75, 45), scene);
	// // Dim the light a small amount - 0 to 1
	pointLight2.intensity = 240;
	pointLight2.radius = 10

	// Change the color of the PointLight
    pointLight2.diffuse = new BABYLON.Color3(10, 10, 255);
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
		mesh.meshes[0].rotation = new BABYLON.Vector3(-0.1, 0.1, 0.2);
		mesh.meshes[1].rotation = new BABYLON.Vector3(-0.1, 0.1, 0.2);
		mesh.meshes[2].rotation = new BABYLON.Vector3(-0.1, 0.1, 0.2);
		mesh.meshes[3].rotation = new BABYLON.Vector3(-0.1, 0.1, 0.2);
		mesh.meshes[4].rotation = new BABYLON.Vector3(-0.1, 0.1, 0.2);

		//material metallic
		mesh.materials[0]._metallic = 0.95;
		mesh.materials[1]._metallic = 0.95;
		mesh.materials[2]._metallic = 0.95;
		mesh.materials[3]._metallic = 0.95;
		
		/* -------------Animation rotation---------- */

		// scene.registerBeforeRender(function () {
		// 	// Rotate the mesh by 0.01 radians around the y-axis.
		// 	if (active1) {
		// 		mesh.meshes[0].rotation.y += 0.002
		// 		mesh.meshes[1].rotation.y += 0.002
		// 		mesh.meshes[2].rotation.y += 0.002
		// 		mesh.meshes[3].rotation.y += 0.002
		// 		mesh.meshes[4].rotation.y += 0.002
		// 	}
			
		// });

	});
	return scene;
};
const scene1 = createScene1(); //Call the createScene function
scene1.clearColor = new BABYLON.Color4(0, 0, 0, 0);
console.log(scene1);
// Register a render loop to repeatedly render the scene
engine1.runRenderLoop(function () {
	
	if (active1) {
		scene1.render();
		if (scene1.meshes.length>0) {
			scene1.meshes[0].rotation.y += 0.002 *scrollDir;
			scene1.meshes[1].rotation.y += 0.002*scrollDir;
			scene1.meshes[2].rotation.y += 0.002*scrollDir;
			scene1.meshes[3].rotation.y += 0.002*scrollDir;
			scene1.meshes[4].rotation.y += 0.002*scrollDir;
		}
		
	}
	
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
    pointLight.diffuse = new BABYLON.Color3(106, 94, 209);
	//pointLight.specular = new BABYLON.Color3(87, 35, 100);
	// Creates a PointLight, aiming 0,1,0 - to the sky
	var pointLight2 = new BABYLON.PointLight("pointLight2", new BABYLON.Vector3(-10, 85, 45), scene);
	// // Dim the light a small amount - 0 to 1
	pointLight2.intensity = 240;
	pointLight2.radius = 10

	// Change the color of the PointLight
	pointLight2.diffuse = new BABYLON.Color3(10, 10, 255);
		// Append glTF model to scene.

	BABYLON.SceneLoader.Append("3D/", "model_1.glb", scene, function (sceneMesh) {
		// Create a default arc rotate camera and light.
		sceneMesh.createDefaultCamera(true, true, true);
	
		// The default camera looks at the back of the asset.
		// Rotate the camera by 180 degrees to the front of the asset.
		sceneMesh.activeCamera.alpha += Math.PI;
	
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
		sceneMesh.meshes[0].position = new BABYLON.Vector3(10, -10, -0);
		sceneMesh.meshes[1].position = new BABYLON.Vector3(10, -10, -0);
		sceneMesh.meshes[2].position = new BABYLON.Vector3(10, -10, -0);
		sceneMesh.meshes[3].position = new BABYLON.Vector3(10, -10, -0);
		sceneMesh.meshes[4].position = new BABYLON.Vector3(10, -10, -0);

		//material metallic
		sceneMesh.materials[0]._metallic = 0.95;
		sceneMesh.materials[1]._metallic = 0.95;
		sceneMesh.materials[2]._metallic = 0.95;
		sceneMesh.materials[3]._metallic = 0.95;
	
		console.log(sceneMesh);

		/* -------------Animation rotation---------- */

		// scene.registerBeforeRender(function () {
		// 	// Rotate the mesh by 0.01 radians around the y-axis.
		// 	sceneMesh.meshes[0].rotation.y += 0.002 
		// 	sceneMesh.meshes[1].rotation.y += 0.002 
		// 	sceneMesh.meshes[2].rotation.y += 0.002 
		// 	sceneMesh.meshes[3].rotation.y += 0.002 
		// 	sceneMesh.meshes[4].rotation.y += 0.002 
		// });
		
	});
	
	
	return scene;
};
const scene2 = createScene2(); //Call the createScene function
scene2.clearColor = new BABYLON.Color4(0, 0, 0, 0);




// Register a render loop to repeatedly render the scene
engine2.runRenderLoop(function () {
	
	if (active2) {
		scene2.render();
		if (scene2.meshes.length>0) {
			scene2.meshes[0].rotation.y += 0.002 *scrollDir;
			scene2.meshes[1].rotation.y += 0.002*scrollDir;
			scene2.meshes[2].rotation.y += 0.002*scrollDir;
			scene2.meshes[3].rotation.y += 0.002*scrollDir;
			scene2.meshes[4].rotation.y += 0.002*scrollDir;
		}
		
	}
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
	if (active3) {
		scene3.render();
	}
	
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
	engine1.resize();
	engine2.resize();
	engine3.resize();
});
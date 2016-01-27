//define variables up top
var camera, controls, scene, renderer, keyboard, $container, model, stars=[];
// define an init + animate
init();
animate();

function init() {
  //define the camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;


  //connect TrackballControls library
  controls = new THREE.TrackballControls(camera);
  controls.addEventListener("change", render);

  // keyboard = new THREEx.KeyboardState();


  //define the scene
  scene = new THREE.Scene();

  var loader = new THREE.JSONLoader();

  //load the resource
  loader.load('/models/voyager',
    //set callback function
    function ( geometry, materials ) {
    var material = new THREE.MeshFaceMaterial( materials );
    var model = new THREE.Mesh( geometry, material );
    model.scale.set(10,10,10);
    model.position.set (0, 80, 0);
    model.name="voyager";
    scene.add( model );
    render();
    animate();
  });

  function addSphere(){

      // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
      for ( var z= -1000; z < 3000; z+=20 ) {

        // Make a sphere (exactly the same as before).
        var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
        var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        var sphere = new THREE.Mesh(geometry, material)

        // This time we give the sphere random x and y positions between -500 and 500
        sphere.position.x = Math.random() * 1000 - 500;
        sphere.position.y = Math.random() * 1000 - 500;

        // Then set the z position to where it is in the loop (distance of camera)
        sphere.position.z = z;

        // scale it up a bit
        sphere.scale.x = sphere.scale.y = 2;

        //add the sphere to the scene
        scene.add( sphere );

        //finally push it to the stars array
        stars.push(sphere);
      }
  }


  //
  addSphere();

  // set up the sphere variables
  // var radius = 140,
  //     widthSegments = 15,
  //     heightSegments = 10;


  // // set up sphere geometry / material
  // var sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, 6, Math.PI * 2, 0.2, 9.1);
  //
  // var sphereMaterial = new THREE.MeshLambertMaterial({
  //   color: 0xccaa00,
  //   emissive: 0xd94998,
  //   wireframe: true,
  //   wireframeLinewidth: 1.5
  // });
  // // pass geometry + material through Mesh
  // sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  //
  // // add the sphere to the scene
  // scene.add(sphereMesh);
  //
  // //light stuff

  var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1.8 );
  scene.add( light );

  var pointLight = new THREE.PointLight(0xFFFFFF);

  // set its position
  pointLight.position.x = 20;
  pointLight.position.y = 1000;
  pointLight.position.z = 570;

  scene.add(pointLight);

  //define container
$container = $('#container');

// define rendered
// renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setClearColor( 0x000000, 0 ); // the default
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);

//append to a domElement
$container.append(renderer.domElement);

};

function animate() {

  requestAnimationFrame(animate, model);
    controls.update();

}

function render() {
  renderer.render(scene, camera);
}

render();

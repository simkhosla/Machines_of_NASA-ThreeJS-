var camera, controls, scene, renderer, keyboard, $container, voyager, lunarlander, saturnV, gemini, apollosoyuz;

//define container
$container = $('#container');

function init() {
  //define the camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;
  //connect TrackballControls library
  // controls = new THREE.TrackballControls(camera);
  // controls.addEventListener("change", render);

  //define the scene
  scene = new THREE.Scene();


  var loader = new THREE.JSONLoader();

    //load the resource Voyager scene.children[2].materials
    loader.load('/models/voyager',
      //set callback function
      function ( geometry, materials ) {
      var material = new THREE.MeshFaceMaterial( materials );
      voyager = new THREE.Mesh( geometry, material );
      voyager.scale.set(5,5,5);
      voyager.position.set (-520, 0, 0);
      voyager.name = "voyager"
      scene.add( voyager );
      render();
      // animate();
    });

    //load the resource GEMINI scene.children[3].materials
    loader.load('/models/gemini',
                //set callback function
    function ( geometry, materials ) {
    var material = new THREE.MeshFaceMaterial( materials );
    gemini = new THREE.Mesh( geometry, material );
    gemini.scale.set(18,18,18);
    gemini.position.set (-270, -100, 0);
    gemini.name = "gemini"
    scene.add( gemini );
    render();
    });

    //load the resources THIS IS SATURN FIVE scene.children[4].materials
    loader.load('/models/saturnV',
      //set callback function
      function ( geometry, materials ) {
      var material = new THREE.MeshFaceMaterial( materials );
      saturnV = new THREE.Mesh( geometry, material );
      saturnV.scale.set(26,26,26);
      saturnV.position.set (-20, -120, 0);
      saturnV.name = "saturnV"
      scene.add( saturnV );
      render();
      // animate();
    });

  //load the resource THIS IS THE LUNAR LANDER scene.children[5].materials
  loader.load('/models/lunarlander',
    //set callback function
    function ( geometry, materials ) {
    var material = new THREE.MeshFaceMaterial( materials );
    lunarlander = new THREE.Mesh( geometry, material );
    lunarlander.scale.set(4.5,4.5,4.5);
    lunarlander.position.set (230, -20, 0);
    lunarlander.name="lunarlander"
    scene.add( lunarlander );
    render();
    // animate();
  });


  //load the resource THIS IS APOLLO SOYUZ scene.children[5].materials
  loader.load('/models/apollosoyuz',
    //set callback function
    function ( geometry, materials ) {
    var material = new THREE.MeshFaceMaterial( materials );
    apollosoyuz = new THREE.Mesh( geometry, material );
    apollosoyuz.scale.set(3,3,3);
    apollosoyuz.position.set (480, 20, 0);
    apollosoyuz.name="apollosoyuz";
    scene.add( apollosoyuz );
    render();
    // animate();
  });

  // //light stuff

  var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1.8 );
  scene.add( light );

  var pointLight = new THREE.PointLight(0xF5F5F5, 0.2);

  // set its position
  pointLight.position.x = 200;
  pointLight.position.y = 1600;
  pointLight.position.z = 500;

  scene.add(pointLight);



// define rendered
// renderer = new THREE.WebGLRenderer();
renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight);
renderer.setClearColor( 0x000000, 0 ); // the default

//append to a domElement
$container.append(renderer.domElement);

};


function render() {
  requestAnimationFrame(render)

  var time = performance.now() * 0.001;

  lunarlander.rotation.y = time * 0.5;
  gemini.rotation.y = time * 0.5;
  saturnV.rotation.y = time * 0.5;
  voyager.rotation.y = time * 0.5;
  apollosoyuz.rotation.y = time * 0.5;
  // model.rotation.z = time * 0.51;

  renderer.render(scene, camera)
  // animateStars();
};


$(document).ready(function() {


//define variables up top

// define an init + animate
init();

render();

});

var camera, controls, scene, renderer, keyboard, $container, voyager, lunarlander, saturnV, gemini, apollosoyuz, stars = [];

//define container
$container = $('#container');

// function animateStars() {
//
//   // loop through each star
//   for(var i=0; i<stars.length; i++) {
//
//     star = stars[i];
//
//     // and move it forward dependent on the mouseY position.
//     star.position.z +=  i/10;
//
//     // if the particle is too close move it to the back
//     if(star.position.z>1000) star.position.z-=2000;
//
//   }
//
// }
// function addSphere(){
//
//     // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
//     for ( var z= -1000; z < 1000; z+=20 ) {
//
//       // Make a sphere (exactly the same as before).
//       var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
//       var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
//       var sphere = new THREE.Mesh(geometry, material)
//
//       // This time we give the sphere random x and y positions between -500 and 500
//       sphere.position.x = Math.random() * 1000 - 500;
//       sphere.position.y = Math.random() * 1000 - 500;
//
//       // Then set the z position to where it is in the loop (distance of camera)
//       sphere.position.z = z;
//
//       // scale it up a bit
//       sphere.scale.x = sphere.scale.y = 2;
//
//       //add the sphere to the scene
//       scene.add( sphere );
//
//       //finally push it to the stars array
//       stars.push(sphere);
//     }
// }


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
      voyager.scale.set(8,8,8);
      voyager.position.set (-520, 200, -820);
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
    gemini.scale.set(20,20,20);
    gemini.position.set (-270, -170, -400);
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
      saturnV.scale.set(34,34,34);
      saturnV.position.set (300, -90, 350);
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
    lunarlander.scale.set(6,6,6);
    lunarlander.position.set (130, -280, -200);
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
    apollosoyuz.position.set (480, 200, 90);
    apollosoyuz.name="apollosoyuz";
    scene.add( apollosoyuz );
    render();
    // animate();
  });


  // addSphere();
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


  voyager.position.y = Math.tan(time) * 300 + 218;
  voyager.position.x = Math.cos(time) * 100 + 5;
  voyager.position.z = Math.sin(time) * 50 + 55;
  voyager.rotation.y = time * 0.5;
  voyager.rotation.z = time * 1.5;


  gemini.position.y = Math.cos(time) * 300 + 18;
  gemini.position.x = Math.sin(time) * 400 + 55;
  gemini.position.z = Math.tan(time) * 50 + 55;
  gemini.rotation.y = time * 1.5;
  gemini.rotation.z = time * 0.5;

  saturnV.position.y = Math.sin(time) * 100 - 40;
  saturnV.position.x = Math.sin(time) * 380 - 355;
  saturnV.position.z = Math.cos(time) * 220 + 55;
  saturnV.rotation.y = time * 0.5;
  saturnV.rotation.z = time * 1.5;

  lunarlander.position.y = Math.tan(time) * 100 - 40;
  lunarlander.position.x = Math.sin(time) * 380 - 12;
  lunarlander.position.z = Math.cos(time) * 220 + 55;
  lunarlander.rotation.y = time * 1.5;
  lunarlander.rotation.z = time * 1;

  apollosoyuz.position.y = Math.cos(time) * 100;
  apollosoyuz.position.x = Math.sin(time) * 380 + 100;
  apollosoyuz.position.z = Math.cos(time) * 220 + 155;
  apollosoyuz.rotation.y = time * 0.5;
  apollosoyuz.rotation.z = time * 1.5;

  renderer.render(scene, camera)
  // animateStars();
};


$(document).ready(function() {


//define variables up top

// define an init + animate
init();

render();

});

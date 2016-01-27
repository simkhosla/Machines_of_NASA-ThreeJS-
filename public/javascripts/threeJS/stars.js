var camera, controls, scene, renderer, keyboard, $container, model, stars=[];
//define container
$container = $('#container');

function init() {
  //define the camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;


  //connect TrackballControls library
  // controls = new THREE.TrackballControls(camera);
  // controls.addEventListener("change", render);

  // keyboard = new THREEx.KeyboardState();


  //define the scene
  scene = new THREE.Scene();



  //
  // //light stuff


  // var pointLight = new THREE.PointLight(0xFFFFFF);
  //
  // // set its position
  // pointLight.position.x = 20;
  // pointLight.position.y = 1000;
  // pointLight.position.z = 570;
  //
  // scene.add(pointLight);



// define rendered
// renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setClearColor( 0x000000, 0 ); // the default
renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);

//append to a domElement
$container.append(renderer.domElement);

};

// function animate() {
//
//
//   // requestAnimationFrame(animate, model);
//   //   controls.update();
// }


          function addSphere(){

              // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
              for ( var z= -1000; z < 1000; z+=20 ) {

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

        function animateStars() {

          // loop through each star
          for(var i=0; i<stars.length; i++) {

            star = stars[i];

            // and move it forward dependent on the mouseY position.
            star.position.z +=  i/10;

            // if the particle is too close move it to the back
            if(star.position.z>1000) star.position.z-=2000;

          }

        }

function render() {
  requestAnimationFrame(render)
  //
  // var time = performance.now() * 0.001;
  //
  // model.rotation.y = time * 0.5;
  // model.rotation.z = time * 0.51;

  renderer.render(scene, camera)
  animateStars();
}

$(document).ready(function() {


//define variables up top

// define an init + animate
init();
addSphere();
// animate();
render();

});

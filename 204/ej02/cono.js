var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();

// Variables para la Grilla y Flechas

var size = 20;
var arrowSize = 5;
var divisions = 20;
var origin = new THREE.Vector3( 0, 0, 0 );
var x = new THREE.Vector3( 1, 0, 0 );
var y = new THREE.Vector3( 0, 1, 0 );
var z = new THREE.Vector3( 0, 0, 1 );
var color2 = new THREE.Color( 0x333333 ); 
var colorR = new THREE.Color( 0xAA0000 );
var colorG = new THREE.Color( 0x00AA00 );
var colorB = new THREE.Color( 0x0000AA );

//Crear la Grilla
var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

//Flechas
var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );

// Posición de la camara

var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.x = 5;
camera.position.y = 2;
camera.position.z = 3;
scene.add(camera);
const light = new THREE.AmbientLight(0x404040, 5);
scene.add(light);

// Se añaden los elementos a la escena

scene.add(gridHelperXZ);
scene.add(arrowX);
scene.add(arrowY);
scene.add(arrowZ);
       
// Se definen las variables que tendra el cono, teniendo en cuenta la guia establecida
var base=1;
var altura=3; 
var vertices=10;
// Se utilizan las variables preestablecidas para crear el cono
var geometry = new THREE.ConeGeometry(base, altura, vertices); 
var material = new THREE.MeshMatcapMaterial({ color: 0x00FFFF });
var cono = new THREE.Mesh(geometry, material);
// Se añade el cono a la escena
scene.add(cono)
			
//Se utiliza traslación para mover el cono
cono.position.x = 1.72; 
cono.position.y = 0.45;
cono.rotation.z = 2.805*Math.PI/2;  

const controls = new THREE.OrbitControls(camera, renderer.domElement);

function animate() {

  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera)
}
animate();
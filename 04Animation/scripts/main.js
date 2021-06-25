// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin() {
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed * 0.8;
	myOtherBox.object3D.rotation.y += rotationSpeed * 0.5;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps
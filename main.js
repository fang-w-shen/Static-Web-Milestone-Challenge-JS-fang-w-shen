var div = document.getElementById("print");

function tree() {
	var a ="" ;
var b = 1;
var z = "";
var c = 1;
var x = document.getElementById('i1').value;
	var y = document.getElementById('i2').value;
	if (x === "" || y === "") {
		alert("put values in!");
	}
	else {
		var space = x-1;
		while(space >= 0) {

			for (var i = 0; i< space; i++) {
				a += " ";
					
					
			}
			while (c <= b) {
						z += y
						c=c+1;	
					}
			b+=2;	
			console.log("", a + z);
			space = space -1;
			a = "";
		}

	}

}


var button = document.getElementById("grow");
button.addEventListener("click", function() {
	tree();
})

document.getElementById('i1').addEventListener("keydown", enterpressalert);


document.getElementById('i2').addEventListener("keydown", enterpressalert);



function enterpressalert(e){
//var code = (e.keyCode ? e.keyCode : e.which);
//e.preventDefault();
if(e.keyCode == 13) { //Enter keycode
 tree();
}
}


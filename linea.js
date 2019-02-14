function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(220);
	for (var x = 5; x < 500; x = x + 10) {
		x++;
			ellipse(x, 5, 10, 10);

		}
	}

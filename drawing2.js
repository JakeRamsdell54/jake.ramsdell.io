let triangles = [];

function setup() {
  createCanvas(590, 600);
  background("#aaaaaa");

  // Draw four triangles with different specifications
  triangles.push({
    xPos: 490,
    yPos: 340,
    x: 470,
    y: 300,
    size: 300,
    baseWidth: 600,
    rotation: radians(-90),
    scaleX: 1.5,
    scaleY: 1.5,
    col: color(255, 0, 0)
  }); // Red triangle

  triangles.push({
    xPos: 130,
    yPos: 300,
    x: 470,
    y: 300,
    size: 380,
    baseWidth: 600,
    rotation: radians(-90),
    scaleX: 1,
    scaleY: 1,
    col: color(0, 0, 0)
  }); // Black triangle

  triangles.push({
    xPos: 32,
    yPos: 470,
    x: 470,
    y: 300,
    size: 300,
    baseWidth: 510,
    rotation: radians(90),
    scaleX: 0.9,
    scaleY: 0.9,
    col: color(168, 164, 50)
  }); // Yellow triangle

  triangles.push({
    xPos: 390,
    yPos: 115,
    x: 470,
    y: 320,
    size: 300,
    baseWidth: 600,
    rotation: radians(90),
    scaleX: 0.75,
    scaleY: 0.75,
    col: color(255, 255, 255)
  }); // White triangle
}

function draw() {
  background("#aaaaaa");

  // Iterate over each triangle
  for (let i = 0; i < triangles.length; i++) {
    let triangleData = triangles[i];

    // Check if the mouse is over the current triangle
    if (
      mouseX > triangleData.xPos - triangleData.size / 2 &&
      mouseX < triangleData.xPos + triangleData.size / 2 &&
      mouseY > triangleData.yPos - triangleData.size / 2 &&
      mouseY < triangleData.yPos + triangleData.size / 2
    ) {
      // If the mouse is over the triangle, change its color
      triangleData.col = color(random(255), random(255), random(255));
    }

    // Draw the triangle
    drawTriangle(triangleData);
  }
}

function drawTriangle({ xPos, yPos, x, y, size, baseWidth, rotation, scaleX, scaleY, col }) {
  // Set color and stroke
  fill(col);
  noStroke();

  // Calculate the height of the equilateral triangle
  let height = (sqrt(3) / 2) * size;

  // Calculate the x-coordinates of the triangle's vertices
  let x1 = -baseWidth / 2;
  let x2 = baseWidth / 2;
  let x3 = 0;

  // Calculate the y-coordinates of the triangle's vertices
  let y1 = height / 2;
  let y2 = height / 2;
  let y3 = -height / 2;

  // Apply transformations
  push();
  translate(xPos, yPos);
  scale(scaleX, scaleY);
  rotate(rotation);

  // Draw the triangle
  triangle(x1, y1, x2, y2, x3, y3);

  // Reset transformations
  pop();
}

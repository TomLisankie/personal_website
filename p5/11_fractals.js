var currentKochLines = [];
var previousKochLines = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var lineMargin = 50;
  var initialKochLine = new KochLine(lineMargin, height / 2, width - lineMargin, height / 2);
  currentKochLines.push(initialKochLine);
}

function draw() {
  currentKochLines.forEach(function(kochLine) {
    kochLine.display();
  });
}

function drawCircle() {

}


function KochLine(startX, endX, startY, endY) {
  this.startX = startX;
  this.endX = endX;
  this.startY = startY;
  this.endY = endY;

  this.display = function() {
    line(this.start, this.end);
  }

}

// 60 degree rotations.
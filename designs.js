//Give user a 10x10 grid to start with:
makeGrid(10, 10);

//Grid creator event:
document.getElementById("sizePicker")[2].addEventListener('click', function (event) {
  event.preventDefault();
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  makeGrid(height, width);
});

//Clear grid button
document.getElementById('clear').addEventListener('click', function() {
    // makeGrid(10, 10);
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    makeGrid(height, width);
})

//Function to create a grid:
function makeGrid(h, w) {
//Make sure you start with a clean grid:
  var myGrid = document.getElementById('pixelCanvas');
  myGrid.textContent = '';
//Make the grid:
  for (let i = 0; i < h; i++) {
    var gridHeight = document.createElement('tr');
    for (let x = 0; x < w; x++) {
      var gridWidth = document.createElement('td');
      gridWidth.className += "cell";
      gridWidth.addEventListener('click', function() {
        var color = document.getElementById("colorPicker").value;
        this.style.backgroundColor = color;
      })
      gridHeight.appendChild(gridWidth);
    }
    myGrid.appendChild(gridHeight);
  }
  //The following code lets you drag and draw:
  let isDrawing = false;

  let dragDraw = document.getElementsByClassName('cell');
  for (var a = 0; a < dragDraw.length; a++) {
    dragDraw[a].addEventListener('mousedown', function() {
      console.log("mouse is down");
      isDrawing = true;
    })
  };

  for (var b = 0; b < dragDraw.length; b++) {
    dragDraw[b].addEventListener('mousemove', function() {
      if (isDrawing === true) {
        var color = document.getElementById("colorPicker").value;
        this.style.backgroundColor = color;
      }
    })
  };

  for (var c = 0; c < dragDraw.length; c++) {
    dragDraw[c].addEventListener('mouseup', function() {
      isDrawing = false;
    })
  };
}

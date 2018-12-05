var id = 0;
var horizontalIndicator = 'A';
var verticalIndicator = 0;
var coord = [horizontalIndicator, verticalIndicator];
var getCoord = document.getElementById('coord');
function showCoord(mouseEvent)
{
    var b = document.getElementById("battleboard");
    var tr = document.getElementById("batlleboard").getElementsByTagName("tr");
    var td = document.getElementById("batlleboard").getElementsByTagName("td");

    while(b.offsetParent)
    {
        var xpos;
        var ypox;
       if(!td.offsetParent)
       {

       }
    }
}
function findObjectCoords(mouseEvent)
{
  var obj = document.getElementById("battleboard");
  var obj_left = 0;
  var obj_top = 0;
  var xpos;
  var ypos;
  while (obj.offsetParent)
  {
    obj_left += obj.offsetLeft;
    obj_top += obj.offsetTop;
    obj = obj.offsetParent;
  }
  if (mouseEvent)
  {
    //FireFox
    xpos = mouseEvent.pageX;
    ypos = mouseEvent.pageY;
  }
  else
  {
    //IE
    xpos = window.event.x + document.body.scrollLeft - 2;
    ypos = window.event.y + document.body.scrollTop - 2;
  }
  xpos -= obj_left;
  ypos -= obj_top;
  document.getElementById("coord").innerHTML = xpos + ", " + ypos;
}
function createBoard()
{
    var tbb = document.getElementById("battleboard");
    for (var r=0; r < 11; r++) {
    var row = document.createElement("tr");
    for (var c=0; c < 11; c++) { 
        var cell = document.createElement("td");
        row.appendChild(cell);        
        if (c== 0 && r == 0)
        {
            cell.id = "MAP";
            cell.innerHTML = "MAP";
            cell.style.backgroundColor = "#000000"
            cell.style.color = "#ffffff"
        }
        if(c == 0 && r != 0)
        {
            cell.id = verticalIndicator++;
            cell.innerHTML = verticalIndicator;
            cell.style.backgroundColor= "#800000"
            cell.style.color = "#ffffff"
           // id--;
        }
        if(r == 0  && c!=0)
        {
            cell.style.backgroundColor= "#800000"
            cell.style.color = "#ffffff"
            cell.id = horizontalIndicator;
            cell.innerHTML = horizontalIndicator;
            horizontalIndicator = nextChar(horizontalIndicator);
        }
        else if(r != 0 && c!=0)
        {
            cell.style.color = "#ffffff"
            cell.style.backgroundImage = "../photos/texture.png";
            cell.id = 'battlecells';
            cell.innerHTML = cell.id;
           // id++;
            //cell.innerHTML = battlecells;
        }           
    }
    tbb.appendChild(row);
 }
}
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt('A') + 1);
}

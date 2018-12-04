function createBoard()
{
    var tbl = document.getElementById("battleboard");
    var id = 0;
    var horizontalIndicator = 'A';
    var verticalIndicator = 0;
  
    for (var r=0; r < 11; r++) {
    var row = document.createElement("tr");
    for (var c=0; c < 11; c++) { 
        var cell = document.createElement("td");
       
        row.appendChild(cell);
        if (c== 0 && r == 0)
        {
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
            id--;
        }
        if(r == 0  && c!=0)
        {
            cell.style.backgroundColor= "#800000"
            cell.style.color = "#ffffff"
            cell.id = horizontalIndicator;
            cell.innerHTML = horizontalIndicator;
            horizontalIndicator = nextChar(horizontalIndicator);
        }
        else
        {
            cell.id = id++;
            cell.style.backgroundImage = "../photos/texture.png";
        }
       
     }
     tbl.appendChild(row);
    }
}
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt('A') + 1);
}

function createBoard()
{
    var tbl = document.getElementById("battleboard");
    var id = 0;
    var horizontalIndicator = nextChar('a');
    var verticalIndicator = -1;
    for (var r=0; r < 11; r++) {
    var row = document.createElement("tr");
    for (var c=0; c < 11; c++) { 
        var cell = document.createElement("td");
        cell.id = id++;
        row.appendChild(cell);
        cell.innerHTML = id;
        if(c == 0)
        {
            cell.id = verticalIndicator++;
            cell.innerHTML = verticalIndicator;
        }
        if(r == 0)
        {
            cell.id = nextChar('a');
            cell.innerHTML = horizontalIndicator;
        }
     }
     tbl.appendChild(row);
    }
}
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt('A') + 1);
}

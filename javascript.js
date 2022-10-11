

// W/L berechnen
var table, rows, tauschen, i, x, y, mussTauschen;
table = document.getElementById("eastern-conference-table");

for (i = 1; i < (table.rows.length); i++) {
  table.rows[i].cells[3].innerHTML = (Number(table.rows[i].cells[1].outerText) / (Number(table.rows[i].cells[1].outerText) + Number(table.rows[i].cells[2].outerText))).toFixed(2)
}


// Tabelle sortieren
rows = table.rows;
tauschen = true;
while (tauschen) {
  tauschen = false;
  rows = table.rows;

  for (i = 1; i < (rows.length - 1); i++) {
    mussTauschen = false;
    x = rows[i].getElementsByTagName("TD")[2];
    y = rows[i + 1].getElementsByTagName("TD")[2];

    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
      mussTauschen = true;
      break;
    }
  }

  if (mussTauschen) {
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    tauschen = true;
  }
}

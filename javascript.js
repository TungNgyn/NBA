
var table, rows, tauschen, i, x, y, mussTauschen;

// Eastern Conference Table
table = document.getElementById("eastern-conference-table");

// W/L-Berechnung
for (i = 1; i < (table.rows.length); i++) {
  table.rows[i].cells[3].innerHTML = (Number(table.rows[i].cells[1].outerText) / (Number(table.rows[i].cells[1].outerText) + Number(table.rows[i].cells[2].outerText))).toFixed(2);
}

// Tabelle sortieren
rows = table.rows;
tauschen = true;
while (tauschen) {
  tauschen = false;
  rows = table.rows;

  for (i = 1; i < (rows.length - 1); i++) {
    mussTauschen = false;
    x = rows[i].getElementsByTagName("TD")[3];
    y = rows[i + 1].getElementsByTagName("TD")[3];

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

// GB-Berechnung
for (i = 1; i < (table.rows.length); i++) {  
  table.rows[i].cells[4].innerHTML = ((Number(table.rows[1].cells[1].outerText) - (Number(table.rows[1].cells[2].outerText))) - (Number(table.rows[i].cells[1].outerText) - (Number(table.rows[i].cells[2].outerText)))) / 2;
}
table.rows[1].cells[4].innerHTML = "-";


// Western Conference Table
table = document.getElementById("western-conference-table");

// W/L-Berechnung
for (i = 1; i < (table.rows.length); i++) {
  table.rows[i].cells[3].innerHTML = (Number(table.rows[i].cells[1].outerText) / (Number(table.rows[i].cells[1].outerText) + Number(table.rows[i].cells[2].outerText))).toFixed(2);
}

// Tabelle sortieren
rows = table.rows;
tauschen = true;
while (tauschen) {
  tauschen = false;
  rows = table.rows;

  for (i = 1; i < (rows.length - 1); i++) {
    mussTauschen = false;
    x = rows[i].getElementsByTagName("TD")[3];
    y = rows[i + 1].getElementsByTagName("TD")[3];

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

// GB-Berechnung
for (i = 1; i < (table.rows.length); i++) {  
  table.rows[i].cells[4].innerHTML = ((Number(table.rows[1].cells[1].outerText) - (Number(table.rows[1].cells[2].outerText))) - (Number(table.rows[i].cells[1].outerText) - (Number(table.rows[i].cells[2].outerText)))) / 2;
}
table.rows[1].cells[4].innerHTML = "-";
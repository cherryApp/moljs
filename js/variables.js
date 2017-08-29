// Ez egy egy soros komment.

/*
    Egy ez több sorból álló komment.
    Ez a második sor.
*/

var cars = [
  {
    type: "A4",
    man: "Audi",
    year: 2010
  },
  {
    type: "Yaris",
    man: "Toyota",
    year: 2010
  },
  {
    type: "6",
    man: "Mazda",
    year: 2010
  },
  {
    type: "525d",
    man: "BMW",
    year: 2010
  },
  {
    type: "Insignia",
    man: "Opel",
    year: 2010
  },
  {
    type: "Passat",
    man: "VolksWagen",
    year: 2010
  }
];

var table = document.querySelector("#cars-table");
setTimeout(function() {
  var tBody = table.querySelector("tbody");
  fillTable(tBody, cars);
}, 1000);

// Táblázat kitöltő függvény.
function fillTable(body, data) {
  // A tábla tartalma.
  var content = "";

  // For ciklussal bejárjuk a tömböt.
  for (var i = 0; i < data.length; i++) {

    // Táblázat sor.
    content += "<tr>";

    // Szám cella.
    content += "<td>" + (i + 1) + "</td>";

    // Az objektum tulajdonságai.
    for (var k in data[i]) {
        content += "<td>" + data[i][k] + "</td>";
    }

    // Sor lezárása.
    content += "</tr>\n";
  }

  // Tartalom betöltése a táblázatba.
  body.innerHTML = content;
}

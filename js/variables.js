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

var people = [
    {
        name: 'Joe',
        age: 44,
        job: 'teacher'
    },
    {
        name: 'Jim',
        age: 44,
        job: 'teacher'
    },
    {
        name: 'Jack',
        age: 44,
        job: 'teacher'
    }
];

var table = document.querySelector("#cars-table");
fillTable(table, cars);
setTimeout(function() {
    fillTable(table, people);
}, 5000);

// Táblázat kitöltő függvény.
function fillTable(element, data) {
    // Fejléc kitöltése.
  var head = element.querySelector("thead tr");
  var body = element.querySelector("tbody");
  var headContent = "<th>#</th>";
  for (var k in data[0]) {
    headContent += "<th>" + k + "</th>";
  }
  head.innerHTML = headContent;

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

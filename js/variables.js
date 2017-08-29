// Ez egy egy soros komment.

/*
    Egy ez több sorból álló komment.
    Ez a második sor.
*/

var cars = [
    {
        type: "A4",
        man: "Audi"
    },
    {
        type: "Yaris",
        man: "Toyota"
    },
    {
        type: "6",
        man: "Mazda"
    },
    {
        type: "525d",
        man: "BMW"
    },
    {
        type: "Insignia",
        man: "Opel"
    },
    {
        type: "Passat",
        man: "VolksWagen"
    }
];

var table = document.querySelector("#cars-table");
setTimeout( function() {
    var tBody = table.querySelector("tbody");
}, 5000);
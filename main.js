function liczenie() {
    var dzisiaj = new Date();

    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();
    var godzina = dzisiaj.getHours();
    var minuty = dzisiaj.getMinutes();
    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) sekunda = "0" + sekunda;

    document.getElementById("timer").innerText = dzien + "/" + miesiac + "/" + rok + " - " + godzina + ":" + minuty + ":" + sekunda;

    setTimeout(liczenie, 1000);
}
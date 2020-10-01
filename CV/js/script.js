
//About me
var aboutme = ["Name ",
    "Birth ",
    "Country",
    "City ",
    "Phone ",
    "Gmail ",
    "OutLook "];
var txt = "";

for (i = 0; i < aboutme.length; i++) {
    txt += aboutme[i] + '<hr class="style-one">';
}

var aboutme2 = ["Shimon Cohen ", "8 June 1984 ", "Israel ", "TLV ",
    "+972509381406 ", "Cshimon189@gmail.com ", "Shimon_C@hotmail.com "];
var txt2 = "";

for (i = 0; i < aboutme2.length; i++) {
    txt2 += aboutme2[i] + '<hr class="style-one">';
}

document.getElementById("Headerabt").innerHTML = txt;
document.getElementById("rowabt").innerHTML = txt2;








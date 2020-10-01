// Education
var arr = ["1990 - 1996 ",
    "1996 - 2002 ",
    "2018 ",
    "2019 "];


function education() {
    setTimeout(function () {
        line1.innerHTML = arr[0];
        line5.innerHTML = "Elementary School Hasmoneans.";
    }, 0.5000)

    setTimeout(function () {
        line2.innerHTML = arr[1];
        line6.innerHTML = "Technology Namat High School.";
    }, 3000)

    setTimeout(function () {
        line3.innerHTML = arr[2];
        line7.innerHTML = "Technical Support College of Management.";
    }, 6000)

    setTimeout(function () {
        line4.innerHTML = arr[3];
        line8.innerHTML = "technological College preparing: Math + English + Hebrew.";
    }, 9000)

}
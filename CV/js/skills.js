// Tech Support
document.getElementById("TechSupport").innerText = "Technical Support | ";

function mySupport() {

    document.getElementById("Hardware").innerText = "Hardware: ";
    document.getElementById("hardwarepc").innerText = "Test Hardware | Replacing parts";

    document.getElementById("Software").innerText = "SoftWare: ";
    document.getElementById("softinstall").innerText = "Install OS & Drivers| Install Software | Testing Software";
}

// Web Design
document.getElementById("WebDesign").innerText = "Web Design | ";

function myDesign() {
    document.getElementById("WebHTML1").innerText = "HTML: ";
    document.getElementById("webHTML").innerText = "Basic HTML | HTML5 ";

    document.getElementById("WebCSS1").innerText = "CSS: ";
    document.getElementById("webCSS").innerText = "CSS3 | CSS Animation ";
}

// Web Programing
document.getElementById("WebPrograming").innerText = "Web Programing | ";

function myPrograming() {

    document.getElementById("Frontend").innerText = "Frontend: ";
    document.getElementById("javeS").innerText = "JavaScript | React ";

    document.getElementById("Backend").innerText = "Backend: ";
    document.getElementById("Nodejs").innerText = "Node.JS | C# ";

}

// Shining the headers
function mouseDownHead() {
    document.getElementById("WebDesign").style.color = "black";
}

function mouseUpHead() {
    document.getElementById("WebDesign").style.color = "white";
}

function mouseDownprog() {
    document.getElementById("WebPrograming").style.color = "black";
}

function mouseUpprog() {
    document.getElementById("WebPrograming").style.color = "white";
}

function mouseDownsupo() {
    document.getElementById("TechSupport").style.color = "black";
}

function mouseUpsupo() {
    document.getElementById("TechSupport").style.color = "white";
}
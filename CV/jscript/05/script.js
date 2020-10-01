var list = document.querySelector('ul');
    list.addEventListener('click', function(ev){
    if(ev.target.tagName == 'LI'){
        ev.target.classList.toggle('checked');
    }
});

function newElement(){
    var ul = document.getElementById("myUL");
    var li= document.createElement('li');
    var myInput = document.getElementById("myInput").value;
    
    if(myInput == ""){
        document.getElementById('Tdo').style.color = 'black';
        document.getElementById('Tdo').textContent = 'The input Empty';
        document.getElementById('myInput').style.borderBottom = '2px solid black';
       alert("The input empty");

    }else{
    myInput = document.createTextNode(myInput);
    ul.appendChild(li);
    li.appendChild(myInput);
    document.getElementById("myInput").value="";
    document.getElementById('Tdo').textContent = 'ToDo';
    document.getElementById('myInput').style.borderBottom = '2px dotted black';
    document.getElementById('Tdo').style.color = 'white';
    }
}


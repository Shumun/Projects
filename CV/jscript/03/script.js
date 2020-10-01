
     var myList = ['washclothes', 'gotostore', 'eatbreakfast', 'doinghomework', 'meatmyfriend'];
     var text = "";
     for(var i=0; i < myList.length; i++){
     text += myList[i] + "<br>" + "<br>" + "<br>";
     }

     document.getElementById('navp').innerHTML = text; 
     document.getElementById('navp').style.marginTop = '0px';
     document.getElementById('navp').style.paddingTop = '20px';
     document.getElementById('navp').style.background = 'lightgrey';
     document.getElementById('navp').style.fontSize = '20px';  
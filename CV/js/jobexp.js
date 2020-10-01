       // Contact

       var contact = ["CONTACT "];
       var txt9 = "";

       var phone = ["+97235109952 ", "+97235202525 ", "+972935251646 ", "+97235642929 ",
           "+97286362222 ", "+972542211557 ", "+97286340727 ", "+97235109952 ", "1809444688 "];
       var txt10 = "";
       for (i = 0; i < contact.length; i++) {
           txt9 += contact[i] + '<hr class="style-one">';
       }

       for (i = 0; i < phone.length; i++) {
           txt10 += phone[i] + '<hr class="style-one">';
       }

       document.getElementById('contact2').innerHTML = txt10;
       document.getElementById("contact1").innerHTML = txt9;

       // Employees

       var employ = ["EMPLOYESS "];
       var txt = "";

       var employer = ["BUGSY", "DAN HOTEL", "ITN", "FOODBOOK",
           "DAN HOTEL", "DISKIDS", "SUPERMARKET", "NIKE",
           "DELL EMC"];
       var txt3 = "";


       for (i = 0; i < employ.length; i++) {
           txt += employ[i] + '<hr class="style-one">';
       }

       for (i = 0; i < employer.length; i++) {
           txt3 += employer[i] + '<hr class="style-one">';
       }

       document.getElementById("headEmploy").innerHTML = txt;
       document.getElementById("emply").innerHTML = txt3;

       // Date

       var dateHead = ["START DATE "];
       var txt4 = "";

       var date = ["07 - 08 ", "08 - 10 ",
           "2011 ", "2012 ", "2013 ", "2014 ", "2015 ", "16 - 18 ",
           "19 - 20 "];
       var txt2 = "";

       for (i = 0; i < date.length; i++) {
           txt2 += date[i] + '<hr class="style-one">';
       }

       for (i = 0; i < dateHead.length; i++) {
           txt4 += dateHead[i] + '<hr class="style-one">';
       }

       document.getElementById('exp').innerHTML = txt4;
       document.getElementById("exprow").innerHTML = txt2;

       // Position

       var posi = ["POSITION "];
       var txt5 = "";

       var position = ["Brista ", "Event waiter ", "Travel agent ", "delivery ",
           "Food drinks ", "Salesperson ", "Salesperson ", "Salesperson ", "Tech Support"];
       var txt6 = "";


       for (i = 0; i < posi.length; i++) {
           txt5 += posi[i] + '<hr class="style-one">';
       }

       for (i = 0; i < position.length; i++) {
           txt6 += position[i] + '<hr class="style-one">';
       }

       document.getElementById("position1").innerHTML = txt5;
       document.getElementById("position2").innerHTML = txt6;

       //City

       var city = ["CITY "];
       var txt7 = "";

       var city1 = ["TLV ", "TLV ", "TLV ", "TLV", "EILAT ", "EILAT ", "EILAT ", "EILAT ", "NETANIA "];
       var txt8 = "";

       for (i = 0; i < city1.length; i++) {
           txt8 += city1[i] + '<hr class="style-one">';
       }

       for (i = 0; i < city.length; i++) {
           txt7 += city[i] + '<hr class="style-one">';
       }

       document.getElementById("city1").innerHTML = txt8;
       document.getElementById("city").innerHTML = txt7;